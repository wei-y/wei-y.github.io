FROM python

RUN cd /opt && git clone https://github.com/danjac/realworld.git
WORKDIR /opt/realworld

RUN pip install -r requirements.txt
RUN ./manage.py migrate
CMD ["./manage.py", "runserver", "0.0.0.0:8000"]
