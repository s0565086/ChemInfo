# ChemInfo

Als Team aus Umweltinformatikern ist es uns ein Anliegen, Umweltmonitoringsysteme digital abzubilden.
Unser Webservice soll eine bestehende Chemikalien-Datenbank des Umweltbundesamtes erweitern bzw. erneuern.

Für die Realisierung des Backends nutzen wir das Framework Express.js und Typeorm für die Datenbank. Im Frontend verwenden wir...

## Getting Started

Zuerst muss das Repository  mittels `git clone` und der HTML-Adresse aus dem Git geladen werden.
Dann installiert bitte MySQL und Node.js, die entspechenden Installer findet man bei Google. Navigiert dann im Terminal in den Projektordner und führt `npm install` aus.
Um dann das Projekt zu starten muss noch `node index.js` ausgeführt werden.

## Datenbank

Um die Datenbank zu erstellen muss erst der original Datensatz in den Script Ordner kopiert werden und data.json genannt werden. Anschließend muss das Script filldatabase.js ausgeführt werden mit `node scripts/fill-database.js`.
Das Script sucht sich die CAS Nummern und die zugehörigen Namen und vergleicht diese. Dann werden alle die keine Duplikate sind in die Datenbank geschrieben.
Die Datenbank enthält eine Tabelle mit einer Eindeutigen ID, einem JSON Array mit den Namen und den Kürzeln für die jeweilige Sprache. Die CASRN wird als varchar gespeichert. 

## More Information 

[Google Drive](https://drive.google.com/drive/folders/136wLcla9PJiPXw-M33A4eo4nh_z7Ofpl)
