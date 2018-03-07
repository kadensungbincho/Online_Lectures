from django.contrib import messages
from django.core.mail import send_mail
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render

from . import forms


def hello_world(request):
    return render(request, 'home.html')


def suggestion_view(request):
    if request.method == "POST":
        form = forms.SuggestionForm(request.POST)
        if form.is_valid():
            send_mail(
                'Suggestion from {}'.format(form.cleaned_data['name']),
                form.cleaned_data['suggestion'],
                '{name} <{email}>'.format(**form.cleaned_data),
                ['kadensungbincho@gmail.com']
            )
            messages.add_message(request, messages.SUCCESS,
                                 'Thanks for your suggestions!')
            return HttpResponseRedirect(reverse('suggestion'))
    else:
        form = forms.SuggestionForm()

    return render(request, 'suggestion_form.html', {'form': form})
