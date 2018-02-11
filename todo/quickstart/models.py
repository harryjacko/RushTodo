from django.db import models

# Create your models here.
class User(models.Model):
	user_name = models.CharField(max_length=20, unique=True)
	password = models.CharField()
	created = models.DateTimeField(auto_now_add=True)
	google_auth = models.BooleanField(default=False)

class TodoItem(models.Model):
	name = models.CharField(max_length=50)
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
	remind_date = models.DateTimeField()
	repeat_remind = models.BooleanField(default=False)
	remind_location = models.CharField(max_length=300)
	image = models.CharField()
