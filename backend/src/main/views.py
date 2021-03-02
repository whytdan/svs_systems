from rest_framework import viewsets, mixins
from main.models import *
from main.serializers import *


class MainPageSectionViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = MainPageSection.objects.all()
    serializer_class = MainPageSectionSerializer


class OfferSectionViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = OfferSection.objects.all()
    serializer_class = OfferSectionSerializer


class EventOrganizationSectionViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = EventOrganizationSection.objects.all()
    serializer_class = EventOrganizationSectionSerializer


class AboutUsViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


class OurProjectsSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = OurProjectsSection.objects.all()
    serializer_class = OurProjectsSectionSerializer


class OurTeamSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = OurTeamSection.objects.all()
    serializer_class = OurTeamSectionSerializer


class FirstServiceSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = FirstServiceSection.objects.all()
    serializer_class = FirstServiceSectionSerializer


class SecondServiceSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = SecondServiceSection.objects.all()
    serializer_class = SecondServiceSectionSerializer


class ThirdServiceSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = ThirdServiceSection.objects.all()
    serializer_class = ThirdServiceSectionSerializer


class FourthServiceSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = FourthServiceSection.objects.all()
    serializer_class = FourthServiceSectionSerializer


class FifthServiceSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = FifthServiceSection.objects.all() 
    serializer_class = FifthServiceSectionSerializer


class LanguagesSectionViewset(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = LanguagesSection.objects.all()
    serializer_class = LanguagesSectionSerializer