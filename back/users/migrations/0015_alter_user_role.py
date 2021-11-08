# Generated by Django 3.2.8 on 2021-11-08 22:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0014_auto_20211023_0225"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="role",
            field=models.IntegerField(
                choices=[
                    (0, "New Hire"),
                    (1, "Administrator"),
                    (2, "Manager"),
                    (3, "Other"),
                ],
                default=3,
                help_text="An administrator has access to everything. A manager has only access to their new hires and their tasks.",
            ),
        ),
    ]
