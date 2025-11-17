from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


def __str__(self):
   return self.title


class Skill(models.Model):
    name = models.CharField(max_length=100)
  


def __str__(self):
    return self.name

