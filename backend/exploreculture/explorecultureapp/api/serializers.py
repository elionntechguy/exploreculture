from rest_framework import serializers
from explorecultureapp.models import Article, CulturalPhotography, View360, EightDAudio

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'content')

class CulturalPhotographySerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalPhotography
        fields = ('title', 'content', 'imgposter', 'culturalphotographyimg')

class View360Serializer(serializers.ModelSerializer):
    class Meta:
        model = View360
        fields = ('title', 'content', 'imgposter', 'view360img')

class EightDAudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = EightDAudio
        fields = ('title', 'content', 'songposter', 'eightdaudioimg', 'eightdaudiofile')