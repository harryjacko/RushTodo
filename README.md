# RushTodo

To do list / checklist web application. Mobile first design (for Android/Desktop Chrome, should work for all browsers)

Built using Django's rest framework, Angular and SQL

## To Run locally :

### MySQL:
Setup a database
- Username: root
- Password: rush2018
- DBName: rush

### Django:
- pip install django
- pip install djangorestframework
- pip install django-cors-headers
- pip install mysqlclient
- Navigate to "/todo" in terminal window
- python manage.py migrate
- python manage.py makemigrations
- python manage.py runserver

### Angular:

- Install NodeJs - https://nodejs.org/en/download/
- Navigate to "/angular/todo" in terminal window
- npm install -g @angular/cli
- ng serve --open
- This should open your default browser with the app running at http://localhost:4200/ 






