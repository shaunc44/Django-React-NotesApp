# from django.http import JsonResponse, response
# from django.middleware.csrf import get_token
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer

from django.http import HttpResponse, JsonResponse, response
from django.shortcuts import render



# @api_view(['GET', 'POST'])
# def getNotes(request):
#     if request.method == 'GET':
#         return getNotesList(request)

@api_view(['GET'])
def getTaxPage(request):
    # notes = Note.objects.all().order_by('-updated')
    # serializer = NoteSerializer(notes, many=True) # serialize many objects which returns a queryset
    return Response() # Get data out of serializer


def display_tax(request):
    # return HttpResponse(status=204)
    return HttpResponse("This is the TAX page")


def ingest_file(request):
    pass


def display_1099_grid(request):
    pass



    