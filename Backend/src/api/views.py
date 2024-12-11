from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import (
    RegistrationSerializer,
    LoginSerializer,
    AppointmentSerializer,
    ContactFormSerializer,
    UserSerializer
)
from ..core.models import ContactForm, Appointment,User


# Contact Form View
class ContactFormView(generics.CreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer


# User Registration View
class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            print(f"User Created: {user.email}")
            return Response(
                {"detail": "User registered successfully"},
                status=status.HTTP_201_CREATED,
            )
        print(f"Errors: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# User Login View
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            return Response(
                {
                    "user_id": user.id,
                    "role": user.role,
                    "email": user.email,
                },
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create Appointment
class AppointmentCreateView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def perform_create(self, serializer):
        serializer.save(patient=self.request.user)


# Approve or Decline Appointment
class AppointmentUpdateView(generics.UpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def patch(self, request, *args, **kwargs):
        appointment = self.get_object()
        status_ = request.data.get('status')

        if status_ not in ['approved', 'declined']:
            return Response({'error': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)

        appointment.status = status_
        appointment.save()
        return Response({'status': appointment.status}, status=status.HTTP_200_OK)


class AllUsersView(APIView):

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AllAppointmentsView(APIView):

    def get(self, request):
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)