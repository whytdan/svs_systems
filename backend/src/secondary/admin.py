from django.contrib import admin
from .models import *

class PortfolioProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'made_on', 'description', 'image' )


class PostImageInline(admin.TabularInline):
    model = PostImage
    extra = 0


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'description', )
    inlines = [PostImageInline]

admin.site.register(PortfolioProject, PortfolioProjectAdmin)
admin.site.register(Post, PostAdmin)