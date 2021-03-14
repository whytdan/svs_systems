from django.db import models
from ckeditor.fields import RichTextField


class PortfolioProject(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    made_on = models.DateField('Был осущетвлен в')
    image = models.ImageField('Изоброжение проекта', upload_to="portfolio_images")
    description = RichTextField('Описание')
    is_main = models.BooleanField('Показывать на главной странице', default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Проект из портфолио'
        verbose_name_plural = 'Проекты из портфолио'
        ordering = ['made_on']


class Post(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    created_at = models.DateField('Дата создания поста')
    description = RichTextField('Описание поста')
    is_main = models.BooleanField('Показывать на главной странице', default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Пост из блога'
        verbose_name_plural = 'Посты из блога'
        ordering = ['created_at']


class PostImage(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='images')
    title = models.CharField('Заголовок фото (нужно для сео)', max_length=255)
    file = models.ImageField('Фото поста', upload_to="blog_images")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Изоброжение поста'
        verbose_name_plural = 'Изоброжения постов'


class ApplicationRequest(models.Model):
    sender = models.CharField("ФИО Отправителя", max_length=255)
    email = models.CharField("Email отправителя", max_length=255, blank=True, null=True)
    phone_number = models.CharField("Номер отправителя", max_length=255, blank=True, null=True)
    message = models.TextField("Сообщение отправителя")

    def __str__(self):
        return f'Сообщение от {self.sender}'

    class Meta:
        verbose_name = 'Сообщение клиента'
        verbose_name_plural = 'Сообщения клиентов'

