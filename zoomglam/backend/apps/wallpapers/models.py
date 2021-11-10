from django.db import models

from django.db import models
from cloudinary.models import CloudinaryField
from django.db.models.deletion import CASCADE

class Tag(models.Model):
    class Meta(object):
        db_table = 'tag'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Others'
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

    def __str__(self):
        return self.name

class Image(models.Model):
    class Meta(object):
        db_table = 'image'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True
    )
    description = models.CharField(
        'Body', blank=False, null=False, max_length=140, db_index=True
    )
    image = CloudinaryField(
        'image', blank=True, null=True,
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
    tags = models.ManyToManyField(
        Tag
    )

    def __str__(self):
        return self.name
