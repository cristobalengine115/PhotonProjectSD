from django import forms
class CreatenewQuery(forms.Form):
    query = forms.CharField(label="",max_length=200, widget=forms.TextInput(attrs={'class': 'form-control form-control-lg center', 'placeholder': 'Ingresa tu busqueda...'}))
