# Pruebas de Consultas

## Certificado Certificado Antiguedad

### Consulta Original

```
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 506ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 61ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 62ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 59ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 65ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 73ms
```

### Consulta Optimizada

```
GET /transito/certificado?tipo=transito_antiguedad_licencia&run= 200 in 119ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 32ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 31ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 26ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 25ms
GET /transito/certificado?tipo=transito_antiguedad_licencia&run=xxxxxx-x 200 in 32ms
```
