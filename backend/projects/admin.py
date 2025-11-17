from django.contrib import admin
from .models import Project,Skill

@admin.register(Project)
class ProjecrAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')   
