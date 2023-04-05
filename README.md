# Template für Ausbildungsprojekte mit Angular, Quarkus und Postgres

## Was ist in diesem Repository enthalten

Dies ist ein monorepo, denn es fasst mehrere Teilprojekte in einem git repository zusammen.

1. Angular Frontend Projekt (im Ordner `frontend`)
2. Quarkus / Java Backend Projekt (im Ordner `backend`)
3. ein Docker Container setup mit einer PostgreSQL Datenbank

## Wie beginne ich die Entwicklung

Hier beschreiben wir die Schritte, die auszuführen sind, um Code live zu editieren und auszuprobieren.

Vorbedingungen:

- Du hast [Docker Desktop](docker.com) installiert (Windows oder MacOS)
- Du hast ein Terminal mit einem shell prompt, um die folgenden Kommandozeilen eingeben zu können (Anleitung dazu [hier](README-terminal.md))
- Du hast Java 17 installiert
- Du hast Node installiert

Zu Beginn jeder Arbeitssitzung führst Du diese Schritte aus:

- baue und starte die notwendigen Docker container:

    ````bash
    docker compose up -d
    ````

- beginne die Java-Entwicklung mit dem Starten des Live Reload Modus:

    ````bash
    cd backend
    ./mvnw quarkus:dev
    ````

  - die shell ist nun für weitere Eingaben blockiert, da hier das Log der Quarkus Anwendung ausgegben wird

- beginne die Angular-Entwicklung mit dem Starten des Live Reload Modus:

    ````bash
    cd frontend
    npm install -g @angular/cli
    npm install
    ng serve
    ````

- rufe die Web-Applikation im Browser auf unter
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

- Wenn du diese Fehlermeldung bekommst, dann prüfe die Umgebungsvariable JAVA_HOME. Diese muss auf das JDK 17 zeigen.

Fehlermeldung:

```bash
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  01:10 min
[INFO] Finished at: 2023-04-05T15:06:39+02:00
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal io.quarkus.platform:quarkus-maven-plugin:2.16.5.Final:dev (default-cli) on project task-backend: Fatal error compiling: error: release version 17 not supported -> [Help 1]
```

Umgebungsvariable JAVA_HOME prüfen:

```bash
# unter Windows
echo $env:JAVA_HOME

# oder unter Linux:
echo $JAVA_HOME
```