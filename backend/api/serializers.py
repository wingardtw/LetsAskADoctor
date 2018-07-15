from django.contrib.auth.models import User, Group
from api.models import Question, Tag, Answer
from rest_framework import serializers



class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('url', 'text', 'asker', 'uuid')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('url', 'text', 'category')
        
class AnswerSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Answer
        fields = ('url', 'text', 'question') 

class AnswerListSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Answer
        fields = ('url', 'text', 'user', 'question') 



# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
