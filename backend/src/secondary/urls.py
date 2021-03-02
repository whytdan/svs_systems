from rest_framework.routers import DefaultRouter
from secondary import views

router = DefaultRouter()

router.register('blog', views.PostsViewset)
router.register('portfolio', views.PortfolioProjectViewSet)

urlpatterns = router.urls