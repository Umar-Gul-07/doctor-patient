from rest_framework import generics
from rest_framework.renderers import JSONRenderer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import RegistrationSerializer
from ..core.models import ContactForm
from .serializers import ContactFormSerializer


class ContactFormView(generics.CreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationSerializer, LoginSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token


class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            print(f"User Created: {user.email}")
            return Response({"detail": "User registered successfully"}, status=status.HTTP_201_CREATED)
        print(f"Errors: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            
            # Debugging step: print the user to ensure it's valid
            print(f"User: {user}")

            # Check if user exists in the database (optional debugging step)
            if not User.objects.filter(id=user.id).exists():
                return Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            return Response({
                "user_id": user.id,
                "role": user.role,
                "email": user.email,
            }, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data

            # Ensure a token is created or fetched
            return Response({
                "user_id": user.id,
                "role": user.role,
                "email": user.email,
            }, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)