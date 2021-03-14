from ckeditor.fields import RichTextField
from django.db import models


class MainPageSection(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Описание')

    class Meta:
        verbose_name = 'Начало главной страницы'
        verbose_name_plural = 'Начало главной страницы'

    def __str__(self):
        return self.title


class OfferSection(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Описание')

    class Meta:
        verbose_name = 'Страница предложений'
        verbose_name_plural = 'Страница предложений'

    def __str__(self):
        return self.title


class Offer(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    icon = models.ImageField('Иконка', upload_to="offer_icons")
    description = models.TextField('Описание')
    section = models.ForeignKey(OfferSection, on_delete=models.CASCADE, related_name='offers')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Предложение'
        verbose_name_plural = 'Предложении'
        ordering = ['id']


class EventOrganizationSection(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Описание')

    class Meta:
        verbose_name = 'Секция организации мероприятий'
        verbose_name_plural = 'Секция организации мероприятий'

    def __str__(self):
        return self.title


class EventOrganization(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = RichTextField(verbose_name='Описание')
    section = models.ForeignKey(EventOrganizationSection, on_delete=models.CASCADE, related_name='events')

    class Meta:
        verbose_name = 'Организация мероприятия'
        verbose_name_plural = 'Организация мероприятий'
        ordering = ['-id']

    def __str__(self):
        return self.title


class OurProjectsSection(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Описание')

    class Meta:
        verbose_name = ''
        verbose_name_plural = 'Секция "Наши проекты"'
        ordering = ['-id']

    def __str__(self):
        return self.title


class AboutUs(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    # description = RichTextField(verbose_name='Описание')
    description = models.TextField(verbose_name='Описание')

    class Meta:
        verbose_name = 'Секция о нас'
        verbose_name_plural = 'Секция о нас'

    def __str__(self):
        return self.title


class OurTeamSection(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Описание')

    class Meta:
        verbose_name = 'Секция наша команда'
        verbose_name_plural = 'Секция наша команда'

    def __str__(self):
        return self.title


class TeamMember(models.Model):
    full_name = models.CharField('Фио участника команды', max_length=255)
    description = models.TextField('Пару слов об участнике')
    image = models.ImageField('Фото участника', upload_to="team_members")
    section = models.ForeignKey(OurTeamSection, on_delete=models.CASCADE, related_name='team_members')

    class Meta:
        verbose_name = 'Участник команды'
        verbose_name_plural = 'Участники команды'

    def __str__(self):
        return self.full_name


class FirstServiceSection(models.Model):
    title = models.CharField('Заголовок первого блока сервисов', max_length=255, null=False)
    description = models.TextField('Описание первого блока сервиса')

    class Meta:
        verbose_name = 'Первый блок сервиса'
        verbose_name_plural = 'Первый блок сервиса'

    def __str__(self):
        return self.title
        

class Service1(models.Model):
    section = models.ForeignKey(FirstServiceSection, on_delete=models.CASCADE, related_name='services')
    image = models.ImageField('Изоброжение сервиса1', upload_to="service_images")
    title = models.CharField('Заголовок сервиса1', max_length=255)
    description = models.TextField('Описание сервиса1')

    class Meta:
        verbose_name = 'Сервис1'
        verbose_name_plural = 'Сервисы1'

    def __str__(self):
        return self.title


class SecondServiceSection(models.Model):
    title = models.CharField('Заголовок второго блока сервисов', max_length=255)
    image = models.ImageField('Задний фон второго блока сервисов', upload_to="bc_images")
    description = models.TextField('Описание второго блока сервиса')

    class Meta:
        verbose_name = 'Второй блок сервиса'
        verbose_name_plural = 'Второй блок сервиса'


    def __str__(self):
        return self.title


class Service2(models.Model):
    section = models.ForeignKey(SecondServiceSection, on_delete=models.CASCADE, related_name='services')
    icon = models.ImageField('Иконка сервиса2', upload_to="service_images")
    title = models.CharField('Заголовок сервиса2', max_length=255)
    description = models.TextField('Описание сервиса2')

    class Meta:
        verbose_name = 'Сервис2'
        verbose_name_plural = 'Сервисы2'

    def __str__(self):
        return self.title


class ThirdServiceSection(models.Model):
    title = models.CharField('Заголовок третьего блока сервисов', max_length=255)
    description = models.TextField('Описание третьего блока сервиса')

    class Meta:
        verbose_name = 'Третий блок сервиса'
        verbose_name_plural = 'Третий блок сервиса'

    def __str__(self):
        return self.title


class Service3(models.Model):
    section = models.ForeignKey(ThirdServiceSection, on_delete=models.CASCADE, related_name='services')
    title = models.CharField('Заголовок сервиса3', max_length=255)
    description = models.TextField('Описание сервиса3')

    class Meta:
        verbose_name = 'Сервис3'
        verbose_name_plural = 'Сервисы3'

    def __str__(self):
        return self.title


class FourthServiceSection(models.Model):
    title = models.CharField('Заголовок четвёртого блока сервисов', max_length=255)
    image = models.ImageField('Задний фон четвёртого блока сервисов', upload_to="bc_images")
    description = models.TextField('Описание четвёртого блока сервиса')

    class Meta:
        verbose_name = 'Четвёртый блок сервиса'
        verbose_name_plural = 'Четвёртый блок сервиса'

    def __str__(self):
        return self.title


class Service4(models.Model):
    section = models.ForeignKey(FourthServiceSection, on_delete=models.CASCADE, related_name='services')
    icon = models.ImageField('Иконка сервиса4', upload_to="service_images")
    title = models.CharField('Заголовок сервиса4', max_length=255)
    number = models.CharField('Номер сервиса4', max_length=255)

    class Meta:
        verbose_name = 'Сервис4'
        verbose_name_plural = 'Сервисы4'

    def __str__(self):
        return self.title


class FifthServiceSection(models.Model):
    title = models.CharField('Заголовок пятого блока сервисов', max_length=255)
    description = models.TextField('Описание пятого блока сервиса')

    class Meta:
        verbose_name = 'Пятый блок сервиса'
        verbose_name_plural = 'Пятый блок сервиса'

    def __str__(self):
        return self.title


class Service5(models.Model):
    section = models.ForeignKey(FifthServiceSection, on_delete=models.CASCADE, related_name='services')
    title = models.CharField('Заголовок сервиса5', max_length=255)

    class Meta:
        verbose_name = 'Сервис5'
        verbose_name_plural = 'Сервисы5'

    def __str__(self):
        return self.title


# class LanguagesSectionInfo1(models.Model):
#     title = models.CharField('Заголовок', max_length=255)
#     description = models.TextField('Описание')
#     column1 = models.TextField('Колонна 1')
#     column2 = models.TextField('Колонна 2')
#     column3 = models.TextField('Колонна 3')

#     class Meta:
#         verbose_name =  'Секция информация о языках 1'
#         verbose_name_plural = 'Секция информация о языках 1'

#     def __str__(self):
#         return self.title


# class LanguagesSectionInfo2(models.Model):
#     title = models.CharField('Заголовок', max_length=255)
#     description = models.TextField('Описание')
#     column1 = models.TextField('Колонна 1')

#     class Meta:
#         verbose_name =  'Секция информация о языках 1'
#         verbose_name_plural = 'Секция информация о языках 1'

#     def __str__(self):
#         return self.title


class LanguageServicesList(models.Model):
    title = models.CharField('Заголовок', max_length=255)

    class Meta:
        verbose_name = 'Список услуг для языков'
        verbose_name_plural = 'Списки услуг для языков'

    def __str__(self):
        return self.title


class LanguageService(models.Model):
    title = models.CharField('Название услуги', max_length=255)
    service_list = models.ForeignKey(LanguageServicesList, on_delete=models.CASCADE, related_name='services')

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'

    def __str__(self):
        return self.title

