# Docker Container nutzen

## Möglichkeiten Docker zu installieren

Es gibt mehrere Möglichkeiten, Docker zu installieren.

1. Docker Desktop, ein Produkt von Docker Inc. ([Docker Installationsanleitung](https://docs.docker.com/get-docker/)).
2. Docker als Linux Paket unter WSL2 auf Windows 10/11

## Docker als Linux Paket unter WSL2 auf Windows 10/11

Starte dazu die Ubuntu Shell in einem Terminalfenster und führe folgende Befehle aus:

```bash

sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -a -G docker $USER
echo
echo 'Beende die Ubuntu Shell und starte sie neu!'
echo '-- tippe dazu `exit` ein und drück die Enter Taste'
```

Beende die Ubuntu Shell und starte sie neu:
```bash
exit
# logout
#
# [process exited with code 1 (0x00000001)]
# You can now close this terminal with Ctrl+D, or press Enter to restart.
```


### Testen der Installation

Öffne eine neue Ubuntu Shell
* <kbd>WIN</kbd>+<kbd>terminal</kbd>
  
und führe folgende Befehle aus:

```bash
docker run hello-world
#
# Unable to find image 'hello-world:latest' locally
# latest: Pulling from library/hello-world
# 2db29710123e: Pull complete
# Digest: sha256:4e83453afed1b4fa1a3500525091dbfca6ce1e66903fd4c01ff015dbcb1ba33e
# Status: Downloaded newer image for hello-world:latest
#
# Hello from Docker!
# [..]
# For more examples and ideas, visit:
#  https://docs.docker.com/get-started/
```

---

### troubleshooting



Damit der `docker`-Befehl nun auch ohne `sudo` ausgeführt werden kann, muss der aktuelle Benutzer in die Gruppe `docker` aufgenommen werden:

```bash
sudo usermod -a -G docker $USER
exit
# beeende die Ubuntu Shell und starte sie neu
# die Gruppenzuordnung wird erst nach einem Neustart der Shell wirksam

### Links

* <https://docs.docker.com/engine/install/ubuntu/#set-up-the-repository>
* <https://askubuntu.com/questions/79565/how-to-add-existing-user-to-an-existing-group>

-
