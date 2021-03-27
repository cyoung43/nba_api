# this function retrieves the aggregate stats for each NBA team
def get_season():  
  from sportsreference.nba.teams import Teams
  import pandas

  teams = Teams()
  count = 1

  for team in teams:
    print(team.name, team.abbreviation)
    if count == 1:
      df = team.dataframe

    if count > 1:
      df = df.append(team.dataframe)

    count += 1

  return df

# season = get_season()
# season.to_json('./data/season.json')
# print('\nAdded season json file\n')

# this function retrieves each team's schedule and scores up to the current date
def get_schedules():
  from sportsreference.nba.schedule import Schedule
  from sportsreference.nba.teams import Teams
  from sportsreference.nba.boxscore import Boxscore

  teams = Teams()
  count = 1

  for team in teams:
    team_sched = Schedule(team.abbreviation)
    print(team.abbreviation, ': ', team.name)
    
    for game in team_sched:
      if count == 1:
        df = game.dataframe
        count += 1
        if df.location[0] == 'Home':
          df['home_team'] = team.abbreviation
          df['away_team'] = df.opponent_abbr
        else:
          df['home_team'] = df.opponent_abbr
          df['away_team'] = team.abbreviation

      elif str(game.dataframe.points_allowed[0]) == 'None':
        continue

      else:
        gm = game.dataframe
        if gm.location[0] == 'Home':
          gm['home_team'] = team.abbreviation
          gm['away_team'] = gm.opponent_abbr
        else:
          gm['home_team'] = gm.opponent_abbr
          gm['away_team'] = team.abbreviation
        df = df.append(gm)

  df = df.reset_index().drop_duplicates(subset='index', keep='first').reset_index()
  df = df.drop(columns=['index', 'level_0']).set_index([df.home_team, df.boxscore_index]).sort_index()
  return df

# current_schedule = get_schedules()
# current_schedule.to_json('./data/schedule.json')
# print('\nAdded schedule json file\n')

# this function grabs each player in the NBA and their season-total statistics
def get_players():
  from sportsreference.nba.teams import Teams
  import pandas as pd

  teams = Teams()
  count = 1

  for team in teams:
    print(team.name)
    for player in team.roster.players:
      if count == 1:
        player_df = player.dataframe
        player_df['name'] = player.name
        count += 1
      else:
        df = player.dataframe
        df['name'] = player.name
        player_df = player_df.append(df)

  player_df = player_df.reset_index().rename(columns={'level_0': 'season'})
  player_df = player_df.set_index([player_df.name, player_df.season]).sort_index()
  return player_df

# players = get_players()
# players.to_json('./data/players.json')
# print('\nAdded players json file\n')

# this function retrieves each individual game played in the season by a team and the associated boxscore
def get_games():
  from sportsreference.nba.teams import Teams
  from sportsreference.nba.schedule import Schedule
  import pandas as pd

  teams = Teams()
  count = 1

  for team in teams:
    team_sched = Schedule(team.abbreviation)
    print('Starting team', team.name)
    for game in team_sched:
      try:
        if count == 1:
          seasons = game.dataframe_extended
          count += 1
          print(seasons.shape)
          if seasons.away_points[0] > seasons.home_points[0]:
            seasons['away_team'] = seasons.winning_abbr
            seasons['home_team'] = seasons.losing_abbr
          else:
            seasons['away_team'] = seasons.losing_abbr
            seasons['home_team'] = seasons.winning_abbr
        else:
          gdf = game.dataframe_extended
          if gdf.away_points[0] > gdf.home_points[0]:
            gdf['away_team'] = gdf.winning_abbr
            gdf['home_team'] = gdf.losing_abbr
          else:
            gdf['away_team'] = gdf.losing_abbr
            gdf['home_team'] = gdf.winning_abbr
          
          seasons = seasons.append(gdf)
          print(seasons.shape)
      except:
        continue

  seasons = seasons.reset_index().drop_duplicates(subset='index', keep='first').drop(columns=['index'])
  seasons = seasons.set_index([seasons.home_team, seasons.date])
  return seasons

all_games = get_games()
all_games.to_json('./data/all_games.json')
print('\nAdded all games json file\n')