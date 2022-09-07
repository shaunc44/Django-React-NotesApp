from rest_framework import serializers
# from .models import Note


class FileSerializer(serializers.Serializer):
    file = serializers.FileField()

    # class Meta:
    #     model = Note
    #     fields = '__all__' # This can also be a list of specific fields