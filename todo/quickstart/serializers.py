from quickstart.models import User, TodoItem
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'user_name', 'password', 'created', 'google_auth')

class TodoItemSerializer(serializers.HyperlinkedModelSerializer):
	user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
	class Meta:
		model = TodoItem
		fields = ('id', 'name', 'user', 'completed', 'remind_date', 'repeat_remind', 'remind_location', 'image')
