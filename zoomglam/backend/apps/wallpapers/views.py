from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import ImageSerializer, TagSerializer
from .models import Image, Tag
from .paginations import NoLimitedResultPagination
from django_filters.rest_framework import DjangoFilterBackend

class ImageList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Image.objects.order_by('-created_at')
    serializer_class = ImageSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['tags']
    search_fields = ['name', 'description']

class ImageDetail(generics.RetrieveAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class TagList(generics.ListAPIView):
    queryset = Tag.objects.order_by('-created_at')
    serializer_class = TagSerializer
    pagination_class = NoLimitedResultPagination
