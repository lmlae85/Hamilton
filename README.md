# Samlet ratingskala-app

Indeholder én forside med links til:

- Hamilton 17 depressionsskala (HAM-D17)
- HCL-32 hypomani-skala
- Youngs Maniskala (YMRS)

Nyt i denne version:

- HAM-D17 kan vises ét item ad gangen eller alle items på én gang.
- HCL-32 kan vise HCL-items ét ad gangen eller alle HCL-items på én gang.
- Mobilvisningen er optimeret til brug som erstatning for fysisk skema.

Upload hele mappen til GitHub Pages. `index.html` i roden er forsiden.

Data gemmes lokalt i browseren og sendes ikke til en server.


## v1.2
Forsidens links peger nu direkte på `index.html` i hver undermappe. Det gør, at appen også virker korrekt når den åbnes lokalt via `file://` i Chrome/Edge, hvor links til mapper ellers kan vise en mappeoversigt.


## v1.2.1
- Rettet HCL-32 auto-hop til feltet “antal dage”, så koden ikke afhænger af browserens globale ID-navne.
- Service worker cache-navn opdateret, så installerede mobilversioner henter den nye udgave efter upload.
