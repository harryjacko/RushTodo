from quickstart.models import User, TodoItem
from quickstart.serializers import UserSerializer, TodoItemSerializer
from django.shortcuts import get_object_or_404
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
class TodoItemList(generics.ListCreateAPIView):
	queryset = TodoItem.objects.all()
	serializer_class = TodoItemSerializer
	def perform_create(self, serializer):
		user_id_form = self.request.data['user']
		user_object = get_object_or_404(User, id=user_id_form)
		serializer.save(user=user_object)

class TodoItemDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = TodoItem.objects.all()
	serializer_class = TodoItemSerializer

class TodoItemFromUserList(generics.ListCreateAPIView):
	queryset = TodoItem.objects.all()
	serializer_class = TodoItemSerializer

	def filter_queryset(self, request):
		user_id_form = self.kwargs['user']
		get_object_or_404(User, id=user_id_form)
		queryset = TodoItem.objects.filter(user=user_id_form)
		serializer = TodoItemSerializer(queryset, many=True)
		return queryset
