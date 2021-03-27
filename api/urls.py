from io import SEEK_END
from django.urls import path
from .views import send_players, send_schedule, send_season

urlpatterns = [
    path('players', send_players, name='send_players'),
    path('schedule', send_schedule, name='send_schedule'),
    path('season', send_season, name='send_season')
]