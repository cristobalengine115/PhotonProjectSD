from django.http import HttpResponse, JsonResponse
from .models import Project, QueryLog, ClickLog, JoinedLog
from .forms import CreatenewQuery
from django.shortcuts import get_object_or_404, render, redirect
# Create your views here.

def index(request):
    title = "welcome"
    return render(request, 'index.html',{
        'title': title
    })

def hello(request,username):
    return HttpResponse("<h1>Hello %s<h1>"%username)

def about(request):
    username = 'fazt'
    return render(request, 'about.html',{
        'username':username
    })

def projects(request):
    # projects = list(Project.objects.values())
    projects = Project.objects.all()
    return render(request, 'projects.html',{
        'projects':projects
    })



def buscador(request):
    if request.method == 'GET':
        return render (request, 'layout.html',{
            'buscador' : CreatenewQuery()
        })
    else:
        print(request.POST)
        query = QueryLog.objects.create(query=request.POST["query"])
        query = request.POST
        request.session['query'] = query['query']
        print(query)
        return redirect('resultados')

def resultados(request):
    query = request.session['query']
    return render(request, 'searches.html',{
        'query': query
    })

def joiner(request):
    print("")