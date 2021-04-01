from rest_framework import viewsets, mixins
from django_filters.rest_framework import DjangoFilterBackend
from secondary.models import *
from secondary.serializers import *
from braces.views import CsrfExemptMixin

class PortfolioProjectViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = PortfolioProject.objects.all()
    serializer_class = PortfolioProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['is_main',]


class PostsViewset(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['is_main',]

class ApplicationRequestViewset(CsrfExemptMixin,  mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ApplicationRequest.objects.all()
    serializer_class = ApplicationRequestSerializer
    authentication_classes = []
