from quickstart.models import User, TodoItem
from quickstart.serializers import UserSerializer, TodoItemSerializer
from django.shortcuts import render
from rest_framework import generics

# Create your views here.

# ------- User -------
class UserList(generics.ListCreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	lookup_field = ('user_name')

class UserFromIdDetial(generics.RetrieveUpdateDestroyAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	lookup_field = ('id')

# ------- TodoItem -------
class TodoItemFromUserList(generics.ListCreateAPIView):
	queryset = TodoItem.objects.all()
	serializer_class = TodoItemSerializer

	def filter_queryset(self, request):
		user_form = self.kwargs['user']
		get_object_or_404(User, id=user_form)
		queryset = TodoItem.objects.filter(user=user_form)
		serializer = TodoItemSerializer(queryset, many=True)
		return queryset
