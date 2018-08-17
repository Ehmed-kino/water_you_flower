FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev python3.6 build-essential
WORKDIR /app
COPY . /app
RUN pip3 install -r requirements.txt
ENTRYPOINT ["python3.6"]
CMD ["server.py"]