# Ecommerce

Proyecto inicializado con [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Ejecuta la App en entorno de desarrollo\
Abre en [http://localhost:3000](http://localhost:3000) para visualizarlo en tu navegador.



### `npm test`

Ejecuta el test runner e interactua escuhcando las pruebas.\


### `npm run build`

Se realiza el Buil para la produccion y se crea la carpeta del build.


## Learn More

El proyecto que contiene este repositorio consta de una tienda online de comida rápida desarrollada para el curso de React JS de Coderhouse.

El usuario inicialmente visualiza una pantalla principal donde se encuentran todos los productos, pero cuenta con la opción de filtrar los productos según la categoría que prefiera, por ejemplo, acceder a la categoría Pizzas. Además puede acceder al detalle específico de cada producto, donde encontrará una descripcion y la opcion de "Agregar al carrito".

Una vez que los productos son agregados al carrito, se podrá finalizar la compra completando un formulario que contiene los campos nombre, apellido, correo electrónico y celular. Completado el mismo se le generará un numero de orden único para identificar su compra.

## Consideraciones adicionales:

## Firebase
A través de Firebase, se hizo el deploy de la aplicación y se almacenaron tanto los productos (con sus respectivas propiedades) como las órdenes generadas.

## Material UI
Se utilizó Material UI para el diseño con el fin de agilizar el desarrollo estético de la aplicación.

## Diseño responsive
Siguiendo con la estrategia de diseño "Mobile First", esta aplicación fue diseñada en primera instancia para ser visualizada en dispositivos moviles, y luego se implementó el diseño para dispositivos de escritorio.

## Local Storage
Se implementó el uso del almacenamiento del navegador para que los productos en el carrito persistan por mas que no hayan finalizado la compra y cierren la sesión.