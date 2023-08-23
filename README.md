# Tarea



## 1. Como realizar un README.md para los enpoint



## Nombre del Proyecto

Describe el nombre y la breve descripción del proyecto.

### Descripción


Proporciona una descripción más detallada de lo que hace el proyecto y qué problemas resuelve.

### Requisitos Previos


Enumera cualquier requisito previo que un usuario pueda necesitar antes de usar los endpoints. Esto podría incluir versiones específicas de software, configuraciones, tokens de acceso, etc.

## Instalación


Proporciona instrucciones paso a paso sobre cómo instalar y configurar tu proyecto. Esto podría incluir cómo descargar el código fuente, instalar dependencias y cualquier otra configuración necesaria.

## Uso


Explica cómo utilizar los endpoints de tu proyecto.

### Endpoint 1


- **Descripción**: Describe brevemente lo que hace este endpoint.

- **URL**: Proporciona la URL completa para acceder a este endpoint.

- **Método HTTP**: GET, POST, PUT, DELETE, etc.

- **Parámetros**: Enumera los parámetros aceptados por este endpoint, si los hay.

- **Ejemplo de Solicitud**: Proporciona un ejemplo de cómo hacer una solicitud a este endpoint.

- **Ejemplo de Respuesta**: Proporciona un ejemplo de cómo se verá la respuesta del endpoint.

  ### Endpoint 2


(Repite la misma estructura que para el primer endpoint, si hay más de uno).

## Contribución


Si se permiten contribuciones en el proyecto, proporcionar instrucciones sobre cómo los otros desarrolladores pueden contribuir.

## Soporte


Proporciona información de contacto, como un correo electrónico o un enlace a un sistema de seguimiento de problemas, donde los usuarios puedan obtener ayuda o reportar problemas.

## Licencia


Especifica la licencia bajo la cual se distribuye tu proyecto. Esto es importante para establecer cómo otros pueden usar el código.

## Créditos


Si se han utilizado bibliotecas, recursos o inspiración de otros proyectos, menciónarlos aquí y proporcionar enlaces a los repositorios correspondientes.

## Agradecimientos


Si hay personas o equipos que han contribuido significativamente en el proyecto, agradecer aquí.

## Notas Adicionales


Cualquier otra información que se considere relevante para los usuarios de los endpoints.



------



## 2.  7 tipos de datos primitivos de JS.



1. **Número (Number)**: Representa valores numéricos, ya sean enteros o decimales.

   ###### Ejemplo:

   ```javascript
   let numero1 = 21;
   let numero2 = 2.2;
   
   console.log(typeof(numero1));
   console.log(typeof numero2);
   ```

   

2. **Cadena (String)**: Representa secuencias de caracteres (texto).

   ###### Ejemplo:

   ```javascript
   let texto = "Hello";
   console.log(typeof(texto));
   ```

   

3. **Booleano (Boolean)**: Representa valores de verdadero (`true`) o falso (`false`).

   ###### Ejemplo:

   ```javascript
   let existo = true;
   console.log(typeof(existo));
   ```

   

4. **Símbolo (Symbol)**: Introducido en ECMAScript 6, representa un valor único y se usa comúnmente como clave de propiedad en objetos.

   ###### Ejemplo:

   ```javascript
   let sym1 = Symbol();
   let sym2 = Symbol("foo");
   let sym3 = Symbol("foo");
   ```

   

5. **Nulo (Null)**: Representa la ausencia intencionada de cualquier valor.

   ###### Ejemplo:

   ```javascript
   let vacia = null;
   console.log(vacia);
   ```

   

6. **Indefinido (Undefined)**: Representa una variable que se ha declarado pero no se ha asignado un valor.

   ###### Ejemplo:

   ```javascript
   let variableSinDefinir;
   console.log(variableSinDefinir);
   ```

   

7. **Objeto (Object)**: Es un tipo de dato complejo que puede contener propiedades y métodos.

   ###### Ejemplo:

   ```javascript
   let objeto = new Object();
   console.log(objeto);
   ```



------

## 3. Maneras de realizar input y output en js 



## Entrada de Datos (Input):

- ### En un Navegador Web:

1. **Formularios HTML**: Utiliza elementos `<input>`, `<select>`, `<textarea>` y `<form>` para recopilar datos del usuario.
2. **Eventos del Teclado y Ratón**: Escucha los eventos del teclado (`keydown`, `keyup`) y del ratón (`click`, `mousemove`) para capturar la entrada del usuario.
3. **Ventanas Emergentes (Prompt)**: Utiliza `prompt()` para mostrar un cuadro de diálogo de entrada al usuario.

- ### En Node.js:

1. **Línea de Comandos**: Utiliza el módulo `readline` para capturar la entrada del usuario en la línea de comandos.

   

## Salida de Datos (Output):

- ### En un Navegador Web:

1. **Consola del Navegador**: Utiliza `console.log()`, `console.warn()`, `console.error()`, etc., para imprimir mensajes en la consola del navegador.
2. **Manipulación del DOM**: Actualiza el contenido de los elementos HTML utilizando JavaScript para mostrar información en la página.
3. **Ventanas Emergentes (Alert, Confirm, Prompt)**: Utiliza `alert()`, `confirm()` y `prompt()` para mostrar ventanas emergentes al usuario.

- ### En Node.js:

1. **Consola de Node.js**: Utiliza `console.log()` para imprimir mensajes en la consola de Node.js.
2. **Escritura en Archivos**: Utiliza módulos como `fs` para escribir información en archivos en el entorno de Node.js.



------



# 4. Que es el DOM en js

Las siglas **DOM** significan **Document Object Model**, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina **árbol DOM** 



![¿Qué es el DOM?](https://lenguajejs.com/javascript/dom/que-es/que-es-dom.png)



