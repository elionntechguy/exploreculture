from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title

class CulturalPhotography(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    imgposter = models.CharField(max_length=120)
    culturalphotographyimg = models.ImageField(upload_to='img/', max_length=255)

    def __str__(self):
        return self.title + '/' + self.content + '/' + self.imgposter