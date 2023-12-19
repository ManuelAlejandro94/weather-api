# Weather Api

## Configuración

Versión de node utilizada: v18.16.1
Versión de npm utilizada: 6.14.9

* Colocarse dentro del directorio `weather-api`
* Usando consola del SO de preferencia instalar los componentes necesarios:
```
$ npm install
```
En caso de encontrarse a través de un proxy:
```
$ npm config set proxy http://<username>:<password>@<proxy_server>:<port>
$ npm install
```
* Editar `.env` con la `APIKEY` necesaria para el consumo del API


## Despliegue de la aplicación en modo desarrollo

### Consola
Encontradose dentro de `weather-api` usando la configuración por defecto:
```
npm start
```

## Que no incluye el aplicativo
* Manejo de excepciones en las respuestas inesperadas del API.
* Códigos de error específicos en las respuestas que tienen algún error.
* Implementación de protocolos de autenticación como OAuth2
* Protección contra inyección SQL en los campos