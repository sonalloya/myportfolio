from rest_framework import generics
from .models import Project, Skill
from .serializers import ProjectSerializer, SkillSerializer


class ProjectList(generics.ListCreateAPIView):
     queryset = Project.objects.all().order_by('-created_at')
     serializer_class = ProjectSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
      queryset = Project.objects.all()
      serializer_class = ProjectSerializer


class SkillList(generics.ListCreateAPIView):
      queryset = Skill.objects.all()
      serializer_class = SkillSerializer


class SkillDetail(generics.RetrieveUpdateDestroyAPIView):
      queryset = Skill.objects.all()
      serializer_class = SkillSerializer