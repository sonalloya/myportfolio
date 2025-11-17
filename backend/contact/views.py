from django.shortcuts import render

from rest_framework import generics
from .models import Message
from .serializers import MessageSerializer


class MessageCreate(generics.CreateAPIView):
   queryset = Message.objects.all()
   serializer_class = MessageSerializer


class MessageList(generics.ListAPIView):
   queryset = Message.objects.all().order_by('-created_at')
   serializer_class = MessageSerializer
