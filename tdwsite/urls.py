from django.urls import path
from .views import *


urlpatterns=[
    path('', home, name='home'),
    path('contact-us/', contact, name='contact'),
    path('FAQs/', FAQs, name='FAQs'),
    path('history/', history, name='history'),
    path('careers/', news, name='news'),
    path('operate/', operate, name='operate'),
    path('overview/', overview, name='overview'),
    path('downloads/', downloads, name='downloads'),
    path('dpa/', dpa, name='dpa'),
    path('enquiry/', enquiry, name='enquiry'),
    path('privacy-policy/', policy, name='policy'),
    path('data-protection/', edms, name='edms'),
    path('scanning/', scanning, name='scanning'),
    path('shredding/', shredding, name='shredding'),
    path('sos/', sos, name='sos'),
    path('news/', news, name='news'),
    path('data-protection-act/', storage, name='storage'),
    path('useful-numbers/', dials, name='dials'),
    path('products-and-services/', prod_and_services, name='prod_and_services'),
]