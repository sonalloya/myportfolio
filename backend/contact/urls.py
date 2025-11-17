from django.urls import path
from .views import MessageCreate, MessageList

urlpatterns = [
    path('', MessageCreate.as_view(), name ='message_create'),
    path('list/', MessageList.as_view(), name='message_list'),
]