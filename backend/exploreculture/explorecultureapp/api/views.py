from rest_framework.generics import ListAPIView, RetrieveAPIView
from explorecultureapp.models import Article, CulturalPhotography
from .serializers import ArticleSerializer, CulturalPhotographySerializer

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class CulturalPhotographyListView(ListAPIView):
    queryset = CulturalPhotography.objects.all()
    serializer_class = CulturalPhotographySerializer

class CulturalPhotographyDetailView(RetrieveAPIView):
    queryset = CulturalPhotography.objects.all()
    serializer_class = CulturalPhotographySerializer