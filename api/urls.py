"""
URLs for the API App
"""

# Related third party imports
from django.urls import path

# Local application/library specific imports
from . import views



urlpatterns = [
    path('', views.getRoutes, name="routes"),
    
    path('notes/', views.getNotes, name="notes"),

    # path('notes/create/', views.createNote, name="create-note"),
    # path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    # path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),

    path('notes/<str:pk>/', views.getNote, name="note"),
]
