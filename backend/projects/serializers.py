from rest_framework import serializers
from .models import Project, Skill


class ProjectSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
      model = Project
      fields = ['id','title','description','image_url','github','demo','created_at']


def get_image_url(self, obj):
   request = self.context.get('request')
   if obj.image and hasattr(obj.image, 'url'):
       return request.build_absolute_uri(obj.image.url) if request else obj.image.url
   return None


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id','name','level']