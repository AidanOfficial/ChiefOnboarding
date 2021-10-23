# Generated by Django 3.2.8 on 2021-10-23 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_auto_20211023_0221'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.CharField(blank=True, default='', max_length=300),
        ),
        migrations.AlterField(
            model_name='user',
            name='position',
            field=models.CharField(blank=True, default='', max_length=300),
        ),
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.IntegerField(choices=[(0, 'New Hire'), (1, 'Administrator'), (2, 'Manager'), (3, 'Other')], default=3),
        ),
        migrations.AlterField(
            model_name='user',
            name='slack_channel_id',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='slack_user_id',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
