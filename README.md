# NBA-Analytics
Author: Chris Young

### Project Description
This project was created as part of an assignment for IS 542. NBA-Analytics is my own version of ESPN or NBA.com where fans can come and see statistics and team/player performance for the current season. In future versions, users will also be able to view live scores for NBA games as they are played.

### Data
Data for this project was obtained from a Python package called `sportsreference`. This package scrapes data from [Basketball-Reference](https://www.basketball-reference.com/), a site that tracks advanced statistics for sports, particularly the NBA. This package can be called by running the following commands:
* `pip install sportsreference`
* `from sportsreference.nba.teams import Teams`
* `utah = Teams('UTA')`
* Then team attributes, like a dataframe of statistics can then be accessed by `utah.dataframe`

### API
To access this data from my React project, I created a python script that would go and collect stats from each team, game, and player available from the package. I then utilized an EC2 instance to execute this script daily (a cron job), and rewrite JSON files that I could access at a server endpoint on the EC2 instance. I pulled these JSON files into my application through `axios`

### Architecture
This project required:
* AWS EC2 t3.micro instance
* Python script/cron job running on server
* JSON data transformation/manipulation
* React application
* React context
* React-router-dom
* React-bootstrap
* React-chartjs-2
* React-select
* Deployment via BYU subdomain

### Features
This project includes the following features: 
1. Dashboards for each team showing a line chart trend of games played and points scored by the home/opposing teams. Team dashboards also include cards showing PPG, APG, RPG, and TPG (turnovers per game). Finally, this dashboard also shows team shooting percentages in a donut, react-chartjs-2 chart.
2. A select page that selects players and displays a player dashboard. The select component allows for filtering on both teams and playing positions in the event that a user may be forgetting the name of a player.
3. Player dashboards show variance between a player's current season and career statistics. It shows variance on three-point, two-point, free-throw, field goal, and true shooting percentages.
4. In future versions, selecting a team's game date will display a new version of the team dashboard specified for that specific game.
5. Future versions will also include the capability of getting live data for NBA games.

### Application
View my application live by visiting [nba.chryoung.org](nba.chryoung.org)
