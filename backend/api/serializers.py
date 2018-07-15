from django.contrib.auth.models import User, Group
from api.models import Question, Tag, Answer
from rest_framework import serializers



class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('url', 'text', 'uuid')

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('url', 'text', 'category')
        
class AnswerSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Answer
        fields = ('url', 'text', 'question', 'user') 

class QuestionListSerializer(serializers.HyperlinkedModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)
    class Meta:
        model = Question
        fields = ('url', 'text', 'asker', 'uuid', 'answers')

class AnswerListSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Answer
        fields = ('url', 'text', 'user', 'question') 



# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField() 
    is_doc = serializers.BooleanField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            password = validated_data['password'],
            email = validated_data.get('email', ''),
        )
        if validated_data['is_doc']:
            doc_group = Group.objects.get(name='Medical Professional')
            user.groups.add(doc_group)
            user.save()
            
        return user

    class Meta:
        model = User
        fields = ('url', 'username', 'password', 'email', 'is_staff', 'is_doc')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
