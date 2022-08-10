from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer



# def getTaxPage(request):
#     # notes = Note.objects.all().order_by('-updated')
#     # serializer = NoteSerializer(notes, many=True) # serialize many objects which returns a queryset
#     return Response() # Get data out of serializer


def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True) # serialize many objects which returns a queryset
    return Response(serializer.data) # Get data out of serializer


def getNoteDetail(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False) # serialize only one object
    return Response(serializer.data)


def createNote(request):
    data = request.data
    note = Note.objects.create(body=data['body'])
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')
