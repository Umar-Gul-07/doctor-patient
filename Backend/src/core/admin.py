from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin

from .models import (
    Country, Application, ContactForm, User,Appointment
)


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'tagline', 'is_active', 'created_on')


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'language', 'currency', 'phone_code', 'is_active', 'created_on')


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'subject', 'message', 'email', 'phone')
    search_fields = ('fullname', 'email')
    list_filter = ('fullname', 'email')


class UserAdmin(BaseUserAdmin):
    # Fields to display in the admin list view
    list_display = ('email', 'first_name', 'last_name', 'role', 'is_active', 'is_staff', 'date_joined')
    list_filter = ('role', 'is_staff', 'is_superuser', 'is_active', 'date_joined')
    
    # Fields to use in the edit/add forms
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'phone', 'role')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important Dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'role', 'is_active', 'is_staff', 'is_superuser'),
        }),
    )
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions')


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'patient', 'doctor', 'appointment_date', 'status', 'created_on')
    list_filter = ('status', 'appointment_date', 'created_on')
    search_fields = ('patient__email', 'doctor__email', 'status')
    ordering = ('-created_on',)
    readonly_fields = ('created_on',)

    def get_readonly_fields(self, request, obj=None):
        # Make `status` editable only for superusers
        if obj and not request.user.is_superuser:
            return self.readonly_fields + ('status',)
        return self.readonly_fields


admin.site.register(User, UserAdmin)
