from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static


api_urlpatterns = [
    path('main/', include('main.urls')),
    path('secondary/', include('secondary.urls')),
]

urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('api/', include(api_urlpatterns)),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
