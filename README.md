# TrabajoIntegrador_2

En el Trabajo Integrador 2 se pedia integarar una estrategia de registro y login con passport. En mi caso utilise un custon Ruter y una estartegia de login con JWT.
Para resgistrar un usuario, es necesario utilizar Postman con la siguiente ruta: 

POST localhost:8080/api/sessions/register 

con los siguientes datos del usuaruio:
{
"firstName": "Mirta",
"lastName": "Lopez",
"email": "ml@gmail.com",
"role": "user",
"password": "123"
}

Obtendremos: el usuario registrado con su respectiva password hasheada. 

Para realizar el login utilizamos la ruta en Postman: 

POST localhost:8080/api/sessions/login
con los siguientes datos del usuaruio:
{
"email": "ml@gmail.com",
"password": "123"
}

Obtenemos: el login del usuario con la generación de su respectivo Token.

en la ruta GET localhost:8080/api/sessions/current

Obtendremos como respuesta los datos del usuario: 
{
    "status": "success",
    "message": {
        "name": "Oscar Martinez",
        "id": "649de0e584cb0d91ebaf2aa6",
        "role": "user",
        "iat": 1688531134,
        "exp": 1688617534
    }
}

Con esto último completamos el entregable al 100%.
