from django.urls import path

from .views import ContactFormView, RegistrationView,LoginView

urlpatterns = [
    path('contact-us/', ContactFormView.as_view(), name='contact-form'),
     path('register/', RegistrationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]

