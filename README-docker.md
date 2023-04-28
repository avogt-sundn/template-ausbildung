# Docker Container nutzen

## Möglichkeiten Docker zu installieren

Es gibt mehrere Möglichkeiten, Docker zu installieren.

1. Docker Desktop, ein Produkt von Docker Inc. ([Docker Installationsanleitung](https://docs.docker.com/get-docker/)).
2. Docker als Linux Paket unter WSL2 auf Windows 10/11

## Docker als Linux Paket unter WSL2 auf Windows 10/11

Starte dazu die Ubuntu Shell in einem Terminalfenster und führe folgende Befehle aus:

```bash
sudo apt-get update
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
```

### Testen der Installation

```bash
sudo docker run hello-world
```

---

### troubleshooting

Beim Starten eines Containers aus VS Code heraus erscheint dieses Fenster:

![Docker Container starteen](./.img/docker-paket-vscode-hinweis.png))

### Links

* <https://docs.docker.com/engine/install/ubuntu/#set-up-the-repository>

-
