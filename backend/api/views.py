from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from django.contrib.auth.models import User, Group, Permission
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from api.serializers import (
    QuestionSerializer,
    QuestionListSerializer,
    AnswerSerializer,
    AnswerListSerializer,
    TagSerializer,
    UserSerializer,
    GroupSerializer,
)
from api.models import Question, Answer, Tag

class CanCreateAnswer(permissions.BasePermission):
    message = 'Must be a medical professional to answer'
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True
        return request.user.has_perm('api.add_answer')

# Create your views here.
class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    
    def list(self, request):
        queryset = Question.objects.all()
        serializer = QuestionListSerializer(queryset, context={'request': request}, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(asker=self.request.user)


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [CanCreateAnswer]
    
    def list(self, request):
        queryset = Answer.objects.all()
        serializer = AnswerListSerializer(queryset, context={'request': request}, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
