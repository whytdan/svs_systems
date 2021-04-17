from django.contrib import admin
from .forms import RequiredInlineFormSet
from .models import *

class PortfolioProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'made_on', 'description', )

class PostImageInline(admin.TabularInline):
    model = PostImage
    extra = 1
    formset = RequiredInlineFormSet


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'description', )
    inlines = [PostImageInline]

class ApplicationRequestAdmin(admin.ModelAdmin):
    list_display = ('sender', 'phone_number', 'email', 'message', )


admin.site.register(PortfolioProject, PortfolioProjectAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(ApplicationRequest, ApplicationRequestAdmin)
