"""
URLs for the Tax App
"""

# Related third party imports
from django.urls import path

# Local application/library specific imports
from . import views



urlpatterns = [
    path('', views.getTaxPage, name="tax"),

    path('api/upload-file/', views.upload_file, name='upload_file'),
    path('api/get-1099-results/', views.get_1099_results, name='get_1099_results'),

    # path('notes/', views.getNotes, name="notes"),

    # path('notes/create/', views.createNote, name="create-note"),
    # path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    # path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),

    # path('notes/<str:pk>/', views.getNote, name="note"),
]