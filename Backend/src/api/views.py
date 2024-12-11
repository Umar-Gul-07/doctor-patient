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
from rest_framework.generics import CreateAPIView


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
                    "user_email": user.email,
                    "name":user.first_name+user.last_name
                },
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create Appointment
class AppointmentCreateView(CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def post(self, request, *args, **kwargs):
        user_id = request.data.get("patient_id")  # Get user_id from the request or local storage
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(patient_id=user_id)  # Use patient_id from the request or local storage
            return Response(
                {"detail": "Appointment created successfully", "appointment": serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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