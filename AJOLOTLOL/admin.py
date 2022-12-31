from django.contrib import admin
from .models import Project, QueryLog, ClickLog, JoinedLog
# Register your models here.

admin.site.register(Project)
admin.site.register(QueryLog)
admin.site.register(ClickLog)
admin.site.register(JoinedLog)