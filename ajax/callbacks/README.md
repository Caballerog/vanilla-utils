ajaxSM
======

<h2>English</h2>

Tool to make <b>simple ajax calls</b>.<br/>

Download one of the files and call it in your html's head.<br/>

An example of call would be:<br/>
```javascript
ajax({
    url: 'testAjax.php',
    type: 'POST',
    parse: true,
    async: true,
    data: {firstName: "John", lastName: "Doe"},
    success: function (data) {
        //do whatever with data
    },
    error: {
        403: function () {
            "Forbidden access to testAjax.php"
        },
        404: function (errorCode, errorDescription) {
            alert("testAjax.php hasn't been found\n" + errorCode + ": " + errorDescription)
        },
        other: function (errorCode, errorDescription) {
            console.log("Unrecognized error\n" + errorCode + ": " + errorDescription)
        } 
    }
});
```

The "parse" param means if you want to receive data parsed as JSON or not.

<b>Parameters:</b> <br/>
<u>url</u> -> The URL string<br/>
<u>type</u> -> The method<br/>
<u>parse</u> -> Boolean. Default to false<br/>
<u>async</u> -> Boolean. Default to true (false makes a synchronous call)<br/>
<u>data</u> -> Object with the data to send<br/>
<u>success</u> -> Function which receives the data<br/>
<u>error</u> -> JSON with the functions to execute in each specified error and a function called "other" which will handle the rest (all of them receive the code and the description of the error)

There's no need to set all params. Only URL, TYPE and SUCCESS are required.

<h2>Español</h2>

Herramienta para hacer <b>llamadas ajax simples</b>.<br/>

Descarga uno de los archivos y llámalo en el head de tu html.<br/>

Un ejemplo de llamada sería: <br/>

```javascript
ajax({
    url: 'testAjax.php',
    type: 'POST',
    parse: true,
    async: true,
    data: {firstName: "John", lastName: "Doe"},
    success: function (data) {
        //haz lo que sea con data
    },
    error: {
        403: function () {
            "No está permitido el acceso a testAjax.php"
        },
        404: function (errorCode, errorDescription) {
            alert("No se ha encontrado textAjax.php\n" + errorCode + ": " + errorDescription)
        },
        other: function (errorCode, errorDescription) {
            console.log("Error no reconocido\n" + errorCode + ": " + errorDescription)
        }
    }
});
```

El parámetro "parse" indica si quieres recibir data parseado como JSON o no.

<b>Parámetros:</b> <br/>
<u>url</u> -> String de la URL<br/>
<u>type</u> -> Método<br/>
<u>parse</u> -> Booleano. Por defecto false<br/>
<u>async</u> -> Booleano. Por defecto true (false hace una llamada síncrona) <br/>
<u>data</u> -> Objeto con los datos para enviar<br/>
<u>success</u> -> Función que recibe los datos<br/>
<u>error</u> -> JSON con las funciones a ejecutar en cada uno de los errores especificados y una funcion llamada "other" que se encargará del resto (todas reciben el código y la descripción del error)

No es necesario inicializar todos los parámetros. Los unicos obligatorios son URL, TYPE y SUCCESS