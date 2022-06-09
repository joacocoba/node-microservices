
# Node.js Microservices Project

El proyecto estará dividido en 3 partes y cada una de ellas correrá en un contenedor distinto de docker pero estarán comunicadas entre sí.

## 1. Number-Validator: un microservicio realizado en Node.js con el framework de Express.js
Descripción: Su funcionalidad es básicamente la de validar el número que recibe del cliente. (POSTMAN)
- Se validará que sea un número
- Se validará si es PAR o IMPAR

Tenemos un endpoint /sendNumbers y a través de un método POST, le pasaremos los números que queramos que sean validados.

Para esto, le debemos pasar un objeto que deberá estar conformado de la siguiente manera:

#### POSTMAN
- URL: localhost:4000 => esto es el puerto por el cual nuestra computadora accede al contenedor pero en el contenedor el microservicio se estará corriendo en el 3000. 
- Objeto en JSON: => Aclaración: es importante seleccionar el formato JSON para el body de la request.
{
    "number": "numero" (siendo este número el número a enviar)
}

Luego a través de WebSocket con Socket.io, estaremos enviando esta información al DB-Connector.



Esto que menciono, lo podemos validar ya que desde la consola del contenedor de DB-Connector, se exhiben los números en tiempo real y ya están clasificados en PAR o IMPAR.

## 2. DB-Connector: un microservicio realizado en Node.js con el framework de Express.js 

Descripción: Estará conectado con la base de datos y será el encargado de escribir los registros en ella.

Recibirá los números a través de los Web Sockets y al llegar a los 10 registros de un tipo (par o impar), generará un nuevo documento dentro de la colección correspondiente de MongoDb.

Tenemos un endpoint /lastNumbers y a través de un método GET, podremos conseguir los últimos 10 registros de un tipo.

Para esto, debemos especificar el tipo de número (par o impar) y debemos hacerlo de la siguiente manera:

#### POSTMAN

- URL: localhost:4001 => esto es el puerto por el cual nuestra computadora accede al contenedor pero en el contenedor el microservicio se estará corriendo en el 3001. 
- Objeto en JSON: => Aclaración: es importante seleccionar el formato JSON para el body de la request.
{
    "type": "odd | even" (siendo par o impar la elección de los registros que queremos ver)
}

Recuerden que para que esta request no les devuelva un 204 (No Content), deberán mandar 10 números del mismo tipo. De esa forma, habrá un nuevo lote con 10 números y los últimos 10 que manden, son los que recibirán.

## 3. MongoDB: será el contenedor en donde correrá la base de datos y tendrá las siguientes colecciones:
- even_numbers: con los documentos de cada lote de números pares
- odd_numbers:  con los documentos de cada lote de números impares


Las 3 partes están configuradas para que corran cada una de ellas en un contenedor de docker. 

La manera más sencilla de hacerlas funcionar sería clonar el repositorio de esta dirección: https://github.com/joacocoba/node-microservices y seguir una seríe de pasos.

Esto tiene un archivo docker-compose.yml en la raíz del directorio y si nosotros ejecutamos dos comandos, nos generará un contenedor para cada imagen correspondiente y si no tenemos alguna nos la creará a partir del Dockerfile.

- docker-compose build
- docker-compose up

Con eso ya estaríamos, podrán ver que en Docker tienen los 3 contenedores corriendose.

### Tests
Hice algunos tests para los endpoints de DB-Connector y Number-Validator que para ejecutarlos y verlos en acción se deberá ejecutar el comando npm test dentro de la carpeta correspondiente.


### Aclaración por si corren el programa a nivel local
Me gustaría mencionar un detalle, que es que si quisieran correr la app a nivel local y comprobar su funcionamiento habría que hacer una pequeña modificación en la URL de la conexión desde el number-validator hacia el db-connetor y esto es porque por algún motivo no me reconoce la variable de entorno para pasarsela al socket, estuve tratando un buen rato y no hubo manera. 

Caso distinto es cuando ingreso una variable de entorno como por ejemplo para Mongo que está me la carga perfectamente, me pareció extraño pero no lo pude hacer que se haga automático.

De todas formas, si quieren que funcione habría que modificar la línea 3 de este archivo 

- node-microservices/number-validator/src/sockets/socket.js que es const socket = io("http://db-connector:3001") por const socket = io("http://localhost:3001");

