# Die PostgreSQL Datenbank

## Starten

1. Starte die Datenbank und das Datenbank Frontend (`pgadmin`) mit diesem Kommando:

    ````bash
    docker compose up -d
    ````
## Admin-Zugriff auf die Datenbank mit Adminer (einfach)

1. Starte Deinen lokalen Browser und gehe auf die URL <http://localhost:9009/>

    ![Click Add New Server](.images/SCR-20230329-kuz.png)

    * Wähle Datenbanksystem `PostgreSQL`
    * Server: `postgres`
    * Benutzer: `postgres`
    * Passwort: `password`
    * Datenbank: `tasks`

## Admin-Zugriff auf die Datenbank mit PgAdmin (komplex)

1. Starte Deinen lokalen Browser und gehe auf die URL <http://localhost:9008/>

    Einlogen mit `admin@admin.com`und Password `root`

1. Klick auf `Add New Server`

    ![Click Add New Server](.images/SCR-20230329-jre.png)

1. Nenne die neue Verbindung `tasks`

    ![Name the connection](.images/SCR-20230329-jvw.png)

1. Klick auf die `Connection` Lasche

    ![specify connection](.images/SCR-20230329-jwd.png)

        * Host name/address: `postgres`
        * Username: `postgres`
        * Password: `password`
        * Save Password: `aktivieren`

1. Die PG-Admin Oberfläche öffnet sich

    ![pgadmin-ui](.images/SCR-20230329-jwx.png)

3. Navigiere in die Datenbank, in dein Schema und zu den Tabellen

    ![Click Add New Server](.images/SCR-20230329-k3c.png)
