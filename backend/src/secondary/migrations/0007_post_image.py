# Generated by Django 3.1.7 on 2021-04-17 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('secondary', '0006_applicationrequest'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(default=0, upload_to='blog_images', verbose_name='Фото поста'),
            preserve_default=False,
        ),
    ]
