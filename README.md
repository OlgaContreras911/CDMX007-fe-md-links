# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://i.ibb.co/BLNsLqH/1200px-Markdown-mark-svg.png)

## Diagrama de flujo

![-md-links](https://i.ibb.co/x53Wn2W/Diagrama-de-flujo-md-liks.jpg)

## Backlog para la implementación de la librería

![ZB](https://i.ibb.co/VYg9Cwc/BL.jpg)

## Documentación tpécnica de la librería
 
El objetivo de esta librería es validar los links encontrados en un archivo o archivos .md y obtener estadísticas de los mismos. Estose logro por medio de la siguiente implementación:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse con respecto al directorio desde donde se invoca
  node (_current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js
const mdLinks = require("md-links");

// Caso 1 .- Ruta relativa sin options
mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

// Caso  .- Ruta relativa con option (validate)
mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

// Caso 3 .- Ruta relativa de un directorio sin options
mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

//PD: Pueden presentarse más casos.
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```


#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1 Ok: 2
```


## Guía de uso e implementación de la librería

Módulo instalable via npm install <github-user>/md-links. Este módulo incluye un ejecutable que puedes invocar en la línea de comando como una interfaz que puedes importar con require para usarlo programáticamente.

Esto hará que se instalen las dependencias, para que el módulo funcione correctamente. Este módulo tiene una función principal llamada mdlinks, que tiene dos parametros PathUrl : Es el parámetro que recibe la dirección del archivo y Option : Que es el parámetro que recibe la opción --validate o --stats.

## Instalación

Módulo instalable via `npm install <github-user>/md-links`. Este módulo incluye un ejecutable que se puede importar con `require`
para usarlo programáticamente.

 Puede instalarse via `npm install --global <github-user>/md-links` si se desea implementar globalmente

 ## Uso

 En la consola se debe escribir md-links y el nombre del archivo o documento que se desee analizar:

 ```sh
$ md-links ../carpeta 
```
o

 ```sh
$ md-links archivo.md
```
Al correr esto, en consola se imprimen todos los links contenidos respectivamente

Si se le agrega al comando --validate devolverá el estado de cada link respecto al servidor

 ```sh
$ md-links ../carpeta --validate
```
o

 ```sh
$ md-links archivo.md --validate
```

Si en su lugar se agrega al comando --stats devolverá cuantos links hay y cuantos de estos son únicos
 
 ```sh
$ md-links ../carpeta --stats
```
o

 ```sh
$ md-links archivo.md --stats
```

También pueden combinarse ambas y en su lugar nos devolverá cuantos links están rotos, cuantos links hay en buen estado, cuantos links hay y cuantos de estos son únicos

 ```sh
$ md-links ../carpeta --validate  --stats
```
o

 ```sh
$ md-links archivo.md --validate --stats
```