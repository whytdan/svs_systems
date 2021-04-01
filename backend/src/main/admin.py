from django.contrib import admin
from .models import *


class MainPageSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )

    def has_delete_permission(self, request, obj=None):
        return False
    
    def has_add_permission(self, request):
        return False


class OfferInline(admin.TabularInline):
    model = Offer
    min_num = 6
    max_num = 6
    extra = 0


class OfferSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [OfferInline]

    def has_delete_permission(self, request, obj=None):
        return False
    
    def has_add_permission(self, request):
        return False


class EventOrganizationInline(admin.TabularInline):
    model = EventOrganization
    min_num = 3
    max_num = 3
    extra = 0


class EventOrganizationSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [EventOrganizationInline]

    def has_delete_permission(self, request, obj=None):
        return False
    
    def has_add_permission(self, request):
        return False


class TeamMemberInline(admin.TabularInline):
    model = TeamMember


class OurTeamSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [TeamMemberInline]

    def has_delete_permission(self, request, obj=None):
        return False
    
    def has_add_permission(self, request):
        return False


class OurProjectsSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )

    def has_delete_permission(self, request, obj=None):
        return False
    
    def has_add_permission(self, request):
        return False



class Service1Inline(admin.TabularInline):
    model = Service1
    min_num = 3
    max_num = 3
    extra = 0


class Service2Inline(admin.TabularInline):
    model = Service2
    min_num = 3
    max_num = 3
    extra = 0


class Service3Inline(admin.TabularInline):
    model = Service3
    min_num = 3
    max_num = 3
    extra = 0


class Service4Inline(admin.TabularInline):
    model = Service4
    min_num = 4
    max_num = 4
    extra = 0


class Service5Inline(admin.TabularInline):
    model = Service5
    extra = 0


class FirstServiceSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [Service1Inline]


class SecondServiceSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [Service2Inline]
    

class ThirdServiceSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [Service3Inline]


class FourthServiceSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [Service4Inline]


class FifthServiceSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )
    inlines = [Service5Inline]


class LanguageServiceInline(admin.TabularInline):
    model = LanguageService


class LanguageServicesListAdmin(admin.ModelAdmin):
    list_display = ('title', )
    inlines = [LanguageServiceInline,]


class AboutUsAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', )

    def has_delete_permission(self, request, obj=None):
        return False
    
    def has_add_permission(self, request):
        return False


admin.site.register(MainPageSection, MainPageSectionAdmin)
admin.site.register(OfferSection, OfferSectionAdmin)
admin.site.register(EventOrganizationSection, EventOrganizationSectionAdmin)
admin.site.register(AboutUs, AboutUsAdmin)
admin.site.register(OurTeamSection, OurTeamSectionAdmin)
admin.site.register(OurProjectsSection, OurProjectsSectionAdmin)
# admin.site.register(FirstServiceSection, FirstServiceSectionAdmin)
# admin.site.register(SecondServiceSection, SecondServiceSectionAdmin)
# admin.site.register(ThirdServiceSection, ThirdServiceSectionAdmin)
# admin.site.register(FourthServiceSection, FourthServiceSectionAdmin)
# admin.site.register(FifthServiceSection, FifthServiceSectionAdmin)
admin.site.register(LanguageServicesList, LanguageServicesListAdmin)
