# Generated by Django 3.2.4 on 2021-09-12 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallpapers', '0002_auto_20210825_1636'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]