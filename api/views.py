from django.shortcuts import render
from django.http import JsonResponse
import json
# Create your views here.

def send_players(request):

    with open('api\data\players.json') as players:
        data = json.load(players)

    return JsonResponse(data, safe=False)

def send_schedule(request):
    with open('api\data\schedule.json') as schedule:
        data = json.load(schedule)

    return JsonResponse(data, safe=False)

def send_season(request):
    with open('api\data\season.json') as season:
        data = json.load(season)

    return JsonResponse(data, safe=False)