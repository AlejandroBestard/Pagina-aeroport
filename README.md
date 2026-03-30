# Pàgina web Aeroport de Palma (PMI)

Projecte de pràctiques. És una pàgina estàtica que simula el taulell de vols d'un aeroport, concretament el de Palma de Mallorca.

---

## Què té

- Taula de vols amb sortides i arribades
- Filtres per estat del vol (a temps, retardat, embarcant, cancel·lat)
- Barra de cerca per destí o origen
- Rellotge en temps real a la capçalera
- Secció de serveis amb fotografies
- Secció d'informació general (terminals, contacte, consells)

## Estructura

```
/
├── Index.html
├── style.css
├── JavaScript/
│   └── Script.js
└── imatges/
    ├── Restaurants.jpg
    ├── Botigues.jpg
    ├── Aparcament.jpg
    ├── Transport.jpg
    ├── Servei medic.jpg
    └── wifi gratuit.png
```

## Com obrir-ho

Obrir `Index.html` directament al navegador. No necessita servidor ni instal·lar res.

## Notes

Les dades dels vols són fictícies, generades a mà basant-se en el format de flightaware.com. No hi ha backend ni cap crida a API real.

Fet amb HTML, CSS i JavaScript vanilla, sense cap framework ni llibreria externa.
