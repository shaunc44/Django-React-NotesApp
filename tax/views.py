"""
Tax Views
"""

# Standard library imports
from pdb import set_trace

# Related third party imports
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, response
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer

# Local application/library specific imports
from .forms import Upload1099FileForm



@api_view(['GET'])
def getTaxPage(request):
    # notes = Note.objects.all().order_by('-updated')
    # serializer = NoteSerializer(notes, many=True) # serialize many objects which returns a queryset
    return Response() # Get data out of serializer


# TODO
# 1. Submit file to validation logic
# 2. Get results and pass back to React frontend
# 3. Should I point results to JSON endpoint ???
# 4. Or put results in memory?
# 5. How to flag invalid cells ... maybe use key in JSON dict ???
# results = [
#     {
#         'field': 'first_name',
#         'value': 'shaun',
#         'valid': 1
#     },
#     {
#         'field': 'last_name',
#         'value': 1234982734,
#         'valid': 0
#     },
# ]

@api_view(['POST'])
def upload_file(request):

    if request.method == 'POST':
        form = Upload1099FileForm(request.POST, request.FILES)

        try:
            if form.is_valid():
                # email = request.POST.get('receiving_person')
                file = request.FILES.get('upload_file')
                # title = request.POST.get('title')
                # set_trace()
                return HttpResponseRedirect('/tax')

        except Exception as e:
                print('UPLOAD FILE ERROR >>', e)
                # err = traceback.format_exc()
                # html_message = ("<span>Quick Search Conflict Check NOT Submitted for:</span><br>"
                #                f"<span>{file.name}</span><br>"
                #                f"<span>ERROR: {e}</span>")
                # send_message(request, 'error', format_html(html_message))
                # message = f"Quick Search conflict check NOT submitted for {file.name} | ERROR: {err}"
                # logger(user, msg=message, old_record=None, new_record=None, error=err)

        finally:
            return HttpResponseRedirect('/tax')

    else:
        form = Upload1099FileForm()
        context = {}
        # context.update({'keyword_form': form})
        # return render(request, 'quick_search.html', context)
        return HttpResponseRedirect('/tax')


def get_1099_results(request):
    pass




# def display_tax(request):
#     # return HttpResponse(status=204)
#     return HttpResponse("This is the TAX page")


# def ingest_file(request):
#     pass


# def display_1099_grid(request):
#     pass



    