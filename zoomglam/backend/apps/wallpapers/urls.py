from django.urls import path
from . import views

urlpatterns = [
    path('images/', views.ImageList.as_view(), name='post_list'),
    path('images/<int:pk>/', views.ImageDetail.as_view(), name='image_detail'),
    path('tags/', views.TagList.as_view(), name='tag_list'),

]
