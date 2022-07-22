FROM nikolaik/python-nodejs:latest

WORKDIR /usr/src/app


COPY . .
RUN apt-get update && \
  apt-get install -y \
  neofetch \
  ffmpeg \
  wget \
  pm2  \
  chromium \ 
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

RUN set -x \
&& apt-get update \
&& apt autoremove --yes

EXPOSE 8080

CMD ["pm2", "start", "node", "."]`
