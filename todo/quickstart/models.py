from django.db import models, IntegrityError

# Create your models here.
class User(models.Model):
	user_name = models.CharField(max_length=50, unique=True)
	password = models.CharField(max_length=256)
	created = models.DateTimeField(auto_now_add=True)
	google_auth = models.BooleanField(default=False)

class TodoItem(models.Model):
	name = models.CharField(max_length=50)
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
	completed = models.BooleanField(default=False)
	remind_date = models.DateTimeField(blank=True, null=True)
	repeat_remind = models.BooleanField(default=False, blank=True)
	remind_location = models.CharField(max_length=300, blank=True)
	image = models.CharField(max_length=128, blank=True)
