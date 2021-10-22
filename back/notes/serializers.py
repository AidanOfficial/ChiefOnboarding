from rest_framework import serializers

from users.serializers import AdminSerializer, NewHireSerializer

from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    new_hire = NewHireSerializer(read_only=True)
    admin = AdminSerializer(read_only=True)

    class Meta:
        model = Note
        fields = "__all__"
