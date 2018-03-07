from django.core import mail
from django.urls import reverse
from django.test import TestCase


from . import forms


class SuggestionviewTestCase(TestCase):
    def setUp(self):
        self.data = {
            'name': 'Kadencho',
            'email': 'kadensungbincho@gmail.com',
            'verify_email': 'kadensungbincho@gmail.com',
            'suggestion': 'More on testing!',
            }
            self.url = reverse('suggestion')

    def test_suggestion_view_get(self):
        resp = self.client.get(self.url)
        self.assertEqual)resp.status_code, 200)
        self.assertTemplateUsed(resp, 'suggestion_from.html')
        self.assertIsInstance(resp.context['form'], forms.SuggestionForm)

    def test_suggestion_view_post(self):
        resp = self.client.post(self.url, self.data)
        self.assertRedirects(resp, self.url)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(
            mail.outbox[0].subject,
            'Suggestion from {}'.format(data['name'])

    def test_suggestion_bad_honeypot(self):
        data = self.data.copy()
        data['honeypot'] = 'pooh bear'
        resp = self.client.post(self.url, data)
        self.assertEqual(resp.status_code, 200)
        self.assertIn('honeypot', resp.context['form'].errors)

    def test_suggestion_bad_emials(self):
        data = self.data.copy()
        data['verify_email'] = 'kadensungbincho@gmail.com'
        self.assertEqual(resp.status_code, 200)
        self.assertIn('__all__', resp.context['form'].errors)

