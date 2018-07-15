import uuid
from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
TAG_CATEGORIES = (
    ('vacc', 'Vaccine'),
    ('demog', 'Demographic'),
    ('other', 'Other'),
)

def get_sentinel_user():
    return get_user_model().objects.get_or_create(username='deleted')[0]

class Profile(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)

class Question(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.TextField()
    thumbs_up = models.IntegerField(default=0)
    asker = models.ForeignKey('auth.User', on_delete=models.SET(get_sentinel_user))
    tags = models.ManyToManyField('Tag')

    def __str__(self):
        return self.text

class Tag(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.CharField(max_length=20)
    category = models.CharField(max_length=20, choices=TAG_CATEGORIES, default='other')

    def __str__(self):
        return self.text

class Answer(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.TextField()
    question = models.ForeignKey('Question', on_delete=models.CASCADE)
    thumbs_up = models.IntegerField(default=0)
    user = models.ForeignKey('auth.User', on_delete=models.SET(get_sentinel_user))
    pinned = models.BooleanField(default=False) 

    def __str__(self):
        return self.text
