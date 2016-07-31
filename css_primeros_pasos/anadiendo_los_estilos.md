# Formas de añadir CSS
Ahora vamos a repasar las tres formas que existen de añadir estilos a nuestro HTML.
## Estilos en línea
Voy a explicarte esta forma de aplicar estilos, aunque debe evitarla siempre que sea posible ya que es una mala práctica estilar tu página de esta manera.

A cualquier etiqueta HTML puedes añadirle la propiedad `style` y dentro de ella añadir tantos estilos como desees separados por punto y coma, por ejemplo:

```html
<h1 style="color:red;font-size:2em">Título de la página</h1>
```

Esta práctica está totalmente des-recomendada ya que a la larga complica el mantenmiento de los estilos de tu página incitándote a escribir más código del necesario como veremos a continuación.

## Estilos internos
Este es el ejemplo que hemos visto hasta ahora, añadiendo la etiqueta `<style>` dentro de nuestra página HTML.

## Estilos externos

Y estas La forma recomendada (**siempre**) de aplicar estilos es creando un fichero con extensión "**.css**" e indicarle al navegador que la cargue, para ello usaremos un elemento auto-contenido llamado **&lt;link&gt;**:

```html
<link rel="stylesheet" href="resources/css/main.css">
```

Una página puede incluir varias etiquetas **link**, o lo que es lo mismo: *múltiples hojas de estilos*, pero en caso de tener un estilo duplicado siempre prevalecerá el último estilo definido. Cuando veamos la herencia veremos qué significa esto.

# Aplicar estilos a los elementos

* **id**: identificador **único** de un elemento
* **class**: identificador que puede ser compartido por varios elementos

```html
<!-- index.html -->
<h1 id="experiencia">Experiencia <strong class="destacado">profesional<strong></h1>

<p class="destacado">
    A lo largo de los últimos 16 años blah blah blah...
</p>

<style>
	#experiencia{
	    font-size: large;
	}
	.destacado{
	    color: blue;
	}
	strong{
	    font-weight: normal;
	}
</style>
```


## Fuentes personalizadas

En CSS3 ya se permite el uso de fuente personalizadas. [Google Fonts](https://www.google.com/fonts) dispone de un amplio número de fuentes de uso libre.

Para usarlas tendremos que añadir la hoja de estilos en nuestro HTML y añadir las fuentes en los elementos que queramos en nuestro CSS.

```html
<!-- index.html -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600italic,700' rel='stylesheet' type='text/css'>
```

```css
/* main.css */
body{
    font-family: 'Open Sans', sans-serif;
}
```

Ejemplo:

```css
h1{
    font: italic 600 24px / 1.5em Helvetica;
}
```

```css
h1{
    font-size: 2em;
    font-family: 'Open Sans', sans-serif;
}
```

```css
h1{
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
}
```