from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name


class QueryLog(models.Model):
    query_id = models.BigAutoField(primary_key=True)
    query = models.CharField(max_length=200)
    
    def __str__(self):
        return "QueryID: " +str(self.query_id)+ ", Query: "+self.query

class ClickLog(models.Model):
    click_id = models.BigAutoField(primary_key=True)
    query = models.ForeignKey(QueryLog, on_delete=models.CASCADE)
    ad_id = models.IntegerField()

class JoinedLog(models.Model):
    joined_id = models.BigAutoField(primary_key=True)
    click = models.ForeignKey(ClickLog, on_delete=models.CASCADE)
    query = models.ForeignKey(QueryLog, on_delete=models.CASCADE)




