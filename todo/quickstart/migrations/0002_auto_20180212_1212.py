# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-02-11 23:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todoitem',
            name='image',
            field=models.CharField(blank=True, max_length=128),
        ),
        migrations.AlterField(
            model_name='todoitem',
            name='remind_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='todoitem',
            name='remind_location',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]