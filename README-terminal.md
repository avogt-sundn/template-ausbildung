# Ein Terminal zum Eingeben von Kommandozeilen

Die tägliche Arbeit erfordert die Fähigkeit, Kommandozeilen einzutippen und auf dem Entwicklungsrechner auszuführen.

Hier beschreiben wir verschiedene Möglichkeiten, in den Besitz so einer Umgebung zu kommen.

Zur Auswahl stehen mehrere Terminal-Applikationen in Kombination mit verschiedenen Shell-Installationen

* ein *Terminal* stellt das Fenster bereit, in dem der Cursor blinkt und Ausgaben erscheinen
* eine *Shell* ist das Programm, welches die Kommandos ausführt

Jedes der folgenden Kapitel beschreibt eine mögliche Alternative. Es muss nicht zwingend etwas installiert werden. Sollte WSL2 (siehe unten) schon vorhanden sein, ist dies zu empfehlen

---

## Visual Studio Code

Das eingebaute Terminal kann in VS Code im Menü `Terminal` gefunden werden oder per short cut geöffnet werden:

* Aufruf mit <kbd>CTRL/CMD</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd>, <kbd>toggle terminal</kbd>
* oder der jeweilige Shortcut (voreingestellt Windows: ctrl+shift+ö oder MacOS: Option+F12)

## Windows Eingabeaufforderung

 Die Eingabeaufforderung ist bereits installiert.

* Aufruf mit <kbd>WIN</kbd>, <kbd>cmd</kbd>

## Windows Powershell

Die Powershell ist bereits installiert.

* Aufruf mit <kbd>WIN</kbd>, <kbd>powershell</kbd>

## Windows WSL2 Linux

WSL2, das Windows-Subsystem für Linux, muss zunächst installiert werden:

* die [Microsoft Anleitung für WSL2 Installation](https://learn.microsoft.com/de-de/windows/wsl/install) umfasst diese Schritte:
  * `wsl --install`
  * `wsl --set-default-version 2`
  * `wsl --install -d Ubuntu`

  > Wahrscheinlich fordert Windows die Installation von Updates auf. Diese müssen ausgeführt werden.

## Windows Terminal

Eine modernere Version der Eingabeaufforderung ist das *Windows Terminal* von Microsoft:

* [Windows Terminal](https://learn.microsoft.com/de-de/windows/terminal/)
* Aufruf mit <kbd>WIN</kbd>, <kbd>terminal</kbd>

---

Unter MacOS sind Terminal und eine linux-artige Shell bereits vorhanden.

## MacOS Terminal

Ein Terminal ist bereits vorinstalliert. Aufruf per

* <kbd>CMD</kbd>+<kbd>SPACE</kbd>, <kbd>terminal</kbd>

## MacOS iterm

Unter MacOS empfehlen wir die Inatallation von iterm

* Download von der Webseite [iterm2](https://iterm2.com/) und anschließende Installation
* <kbd>CMD</kbd>+<kbd>SPACE</kbd>, <kbd>iterm</kbd>

---

# Optional: Oh-my-zsh - die zsh mit Erweiterungen

Eine moderne Shell ist die *zsh* und kann unter Windows WSL2 als auch unter MacOS nachinstalliert werden.

[Homepage von Oh My Zsh](https://ohmyz.sh/)

* die Installation besteht aus einem Schritt:
    ```bash
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```
