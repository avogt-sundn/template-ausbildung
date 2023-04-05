# Template für Ausbildungsprojekte mit Angular, Quarkus und Postgres

## Was ist in diesem Repository enthalten

Dies ist ein monorepo, denn es fasst mehrere Teilprojekte in einem git repository zusammen.

1. Angular Frontend Projekt (im Ordner `frontend`)
2. Quarkus / Java Backend Projekt (im Ordner `backend`)
3. ein Docker Container setup mit einer PostgreSQL Datenbank

## Wie beginne ich die Entwicklung

Hier beschreiben wir die Schritte, die auszuführen sind, um Code live zu editieren und auszuprobieren.

Vorbedingungen:

- Du hast Docker Desktop installiert (Windows oder MacOS)
- Du hast ein Terminal mit einem shell prompt, um die folgenden Kommandozeilen eingeben zu können (Anleitung dazu [hier](README-terminal.md))
- Du hast Java und Maven installiert

Dann:

- baue und starte alles mit:

    ````bash
    docker compose up -d
    ````

- beginne die Java-Entwicklung mit dem Starten des Live Reload Modus:

    ````bash
    mvn quarkus:remote-dev
    ````

- rufe die web-Applikation im Browser auf unter
  - <http://localhost:4200>

Falls Du in die Datenbank schauen willst:

- im Datenbank-Tool muss die Datenbank verbindung eingerichtet werden.
  - [Gehe dahin](backend/README-Datenbank.md)

# troubleshooting

- `2023-03-30 17:31:37,884 ERROR [io.qua.ver.htt.dep.dev.HttpRemoteDevClient] (Remote dev client thread) Remote dev request failed: java.net.ConnectException: Connection refused`
- prüfe dass du das Quarkus backend im browser unter http://localhost:8080 erreichst:
- WENN NICHT:
  - prüfe dass du das Quarkus backend mit `docker compose up -d` gestartet hast
  - prüfe dass im [docker-compose.yml](docker-compose.yml) das backend auf port 8080 gemappt wird:

    ````bash
    backend:
    build:
      context: ./backend
      dockerfile: ./src/main/docker/Dockerfile.jvm.multistaged
    image: backend
    depends_on:
      - postgres
    ports:
      - 8080:8080
    ````
