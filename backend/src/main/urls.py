from rest_framework.routers import DefaultRouter
from main import views

router = DefaultRouter()

router.register('hero-section', views.MainPageSectionViewSet)
router.register('offers', views.OfferSectionViewSet)
router.register('events-organizations', views.EventOrganizationSectionViewSet)
router.register('our-projects', views.OurProjectsSectionViewset)
router.register('about-us', views.AboutUsViewSet)
router.register('our-team', views.OurTeamSectionViewset)
router.register('first-service', views.FirstServiceSectionViewset)
router.register('second-service', views.SecondServiceSectionViewset)
router.register('third-service', views.ThirdServiceSectionViewset)
router.register('fourth-service', views.FourthServiceSectionViewset)
router.register('fifth-service', views.FifthServiceSectionViewset)
router.register('languages', views.LanguagesSectionViewset)

urlpatterns = router.urls