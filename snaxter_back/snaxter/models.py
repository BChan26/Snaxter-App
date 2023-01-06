from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50, null=False, unique=True)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.username

class Restaurant(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    address = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    website = models.CharField(max_length=50)
    opens = models.TimeField(default='00:00:00')
    closes = models.TimeField(default='00:00:00')
    cuisine = [
        ('American', 'American'),
        ('Chinese', 'Chinese'),
        ('Greek', 'Greek'),
        ('Indian', 'Indian'),
        ('Italian', 'Italian'),
        ('Japanese', 'Japanese'),
        ('Mexican', 'Mexican'),
        ('Thai', 'Thai'),
    ]
    cuisine_type = models.CharField(max_length=50, choices=cuisine)
    description = models.CharField(max_length=50)
    restaurant_picture = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.CharField(max_length=50)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='menu_items', default='')
    item_picture = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.name