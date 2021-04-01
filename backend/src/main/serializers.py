from rest_framework import serializers
from main.models import *


class MainPageSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainPageSection
        fields = '__all__'


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'


class OfferSectionSerializer(serializers.ModelSerializer):
    offers = OfferSerializer(many=True, read_only=True)
    
    class Meta:
        model = OfferSection
        fields = '__all__'


class EventOrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventOrganization
        fields = '__all__'


class EventOrganizationSectionSerializer(serializers.ModelSerializer):
    events = EventOrganizationSerializer(many=True, read_only=True)
    
    class Meta:
        model = EventOrganizationSection
        fields = '__all__'


class OurProjectsSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurProjectsSection
        fields = '__all__'


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = '__all__'


class OurTeamSectionSerializer(serializers.ModelSerializer):
    team_members = TeamMemberSerializer(many=True, read_only=True)

    class Meta:
        model = OurTeamSection
        fields = '__all__'
        extra_fields = ['team_members']


class FirstServiceSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirstServiceSection
        fields = '__all__'


class SecondServiceSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondServiceSection
        fields = '__all__'


class ThirdServiceSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThirdServiceSection
        fields = '__all__'


class FourthServiceSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FourthServiceSection
        fields = '__all__'


class FifthServiceSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FifthServiceSection
        fields = '__all__'


class LanguageServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageService
        fields = '__all__'


class LanguageServicesListSerializer(serializers.ModelSerializer):
    services = LanguageServiceSerializer(many=True, read_only=True)

    class Meta:
        model = LanguageServicesList
        fields = '__all__'
        extra_fields = ['services']

