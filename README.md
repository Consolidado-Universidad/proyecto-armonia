# Proyecto Armonía

Proyecto armonía nace por la necesidad de implementar una capa de interoperación para los sistemas que proveen empresas como CAS Chile, SMC entre otras.

## Objetivo

El objetivo del proyecto es poder proveer a otros municipios interesados, una forma fácil y gratuita de poder implementar sistemas que le permitan digitalizar sus procesos en el marco de la Ley 21.180 de digitalización del Estado.

## Estado del Proyecto

En las primeras iteraciones del sistema, se dará soporte para obtener información de los sistemas de tránsito y rentas de CAS Chile.

El proyecto contempla dar una solución backend que se pueda integrar con cualquier otra solución frontend. Sin embargo para poder cumplir con el objetivo de que sea fácil de implementar, en primera instancia, se dará soporte para funcionar completamente con la plataforma de gobierno [SIMPLE](https://simple.gob.cl/)

## Instalación

- Crea un archivo `.env` en `/src` usando como como referencia `/src/.env.ejemplo` y modifica las variables de entorno.

- Crea un registro de tipo `A` en tu administrador de DNS. El registro debe tener el mismo nombre de dominio que configuraste en el archivo `.env` y debe apuntar a la IP del servidor donde vas a ejecutar este contenedor. (Tu IP debe ser pública)

- Desde la carpeta raiz ejecuta `docker compose --env-file ./src/.env up -d`

Para poder revisar los logs de los contenedores puedes ejecutar el comando: `docker compose logs -f`

## Seguridad

Para evitar solicitudes de servidores no autorizados se debe configurar la variable `LISTA_BLANCA` el archivo `.env` sus valores pueden ser:

- Direcciones IPv4 (por ejemplo, "192.168.1.1")

* - Direcciones IPv6 (por ejemplo, "2001:db8::1")
* - Rangos CIDR IPv4 (por ejemplo, "192.168.0.0/16")
* - Rangos CIDR IPv6 (por ejemplo, "2001:db8::/32")
* - IPv4 mapeadas a IPv6 (por ejemplo, "::ffff:192.168.1.1")

> Para agregar más de un servidor, los valores se deben separar por comas.

# Funcionamiento

Esta configuración usa Traefik para configurar un Servidor Proxy Inverso, por lo que deberás poder ingresar desde el dominio o subdominio que configuraste.

Los endpoints disponibles actualmente son:

- `/transito?run=12345678-9`
# proyecto-armonia
