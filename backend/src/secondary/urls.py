from rest_framework.routers import DefaultRouter
from secondary import views

router = DefaultRouter()

router.register('blog', views.PostsViewset)
router.register('portfolio', views.PortfolioProjectViewSet)
router.register('application-requests', views.ApplicationRequestViewset)

urlpatterns = router.urls