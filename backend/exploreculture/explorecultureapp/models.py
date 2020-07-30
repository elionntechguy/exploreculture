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
        return self.title + ' / ' + self.content + ' / ' + self.imgposter

class View360(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    imgposter = models.CharField(max_length=120)
    view360img = models.ImageField(upload_to='img/', max_length=255)
    view360url = models.TextField()

    def __str__(self):
        return self.title + ' / ' + self.content + ' / ' + self.imgposter

class EightDAudio(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    songposter = models.CharField(max_length=120)
    eightdaudioimg = models.ImageField(upload_to='img/', max_length=255)
    eightdaudiofile = models.FileField(upload_to='audio/')

    def __str__(self):
        return self.title + ' / ' + self.content + ' / ' + self.songposter

class AR(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    poster = models.CharField(max_length=120)
    arimg = models.ImageField(upload_to='img/', max_length=255)
    arfile = models.FileField(upload_to='ar/')

    def __str__(self):
        return self.title + ' / ' + self.content + ' / ' + self.poster

class TraditionalFood(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    recipeposter = models.CharField(max_length=120)
    recipeimg = models.ImageField(upload_to='img/', max_length=255)

    def __str__(self):
        return self.title + ' / ' + self.content + ' / ' + self.recipeposter