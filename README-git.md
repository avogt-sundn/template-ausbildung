# Umgang mit git und dem source code repository

Wir speichern unser Projekt auf einem git server. Git ist ein Versionsverwaltungssystem, das es uns ermöglicht, Änderungen an unserem Code zu verfolgen und zu verwalten. Es ist ein sehr mächtiges Werkzeug, das wir hier nicht in voller Tiefe erklären können. Wir werden hier nur die wichtigsten Begriffe und Konzepte erklären, die wir für die Arbeit mit diesem Projekt benötigen.

## Wie komme ich an den Code?

Wenn du diesen Code liest, dann vermutlich in der Web-Oberfläche unseres git servers. Dort kannst du den Code herunterladen, indem du auf den grünen `Code`-Button klickst und dann `Download ZIP` auswählst.

Besser ist es, du erstellst eine lokale Kopie des git repository durch Klonen: dabei merkt sich die Kopie, von wo sie geladen wurde. Und nur damit ist es dir dann möglich, von dir vorgenommene Änderungen in das git repository hoch zu laden. Das ist der Weg, über den mehrere Entwickler ihre Änderungen zusammenführen.

Dazu musst Du nun `git` installieren.

## Wie installiere ich git?

`git` ist ein Kommandozeilen-Werkzeug: du musst es in deinem Terminal eintippen und mit der <kbd>RETURN</kbd>-Taste ausführen. Was ein Terminal ist und wie du es installieren musst, haben wir hier erklärt: [README-terminal.md](README-terminal.md)

* Windows Installer: du kannst eine Installationsprogramm für die Windows-Variante von `git` [hier](https://git-scm.com/downloads) herunterladen. Wenn du es installiert hast, kannst du es mit dem Befehl `git --version` überprüfen.

* Windows Terminal mit Ubuntu Shell:
* MacOS: `git` ist bereits installiert. Du kannst es mit dem Befehl `git --version` überprüfen.

## Klonen des git repository

 indem du den Befehl `git clone` in deinem Terminal eingibst. Dazu fügst Du die URL des Projekts hinzu:

```bash
# im Terminal siehst Du diesen prompt:
# vscode ➜ /workspaces/template-ausbildung (main) $
# gib dahinter ein:
git clone https://git.s-und-n.de/ausbildung/template-ausbildung.git
# Cloning into 'template-ausbildung'...
# remote: Enumerating objects: 545, done.
# remote: Counting objects: 100% (375/375), done.
# remote: Compressing objects: 100% (338/338), done.
# remote: Total 545 (delta 166), reused 0 (delta 0), pack-reused 170
# Receiving objects: 100% (545/545), 1.60 MiB | 6.93 MiB/s, done.
# Resolving deltas: 100% (216/216), done.

cd template-ausbildung
# vscode ➜ /workspaces/template-ausbildung (main) $

# wechselt in das Prorjektverzeichnis
```
