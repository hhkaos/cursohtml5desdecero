# Estilos externos

inline y externos


## Aplicar estilos a los elementos

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

## Vincular una hoja de estilos

Para indicarle a una página dónde se encuentras los estilos tendremos que añadir un elemento auto-contenido **<link>**:

```css
<link rel="stylesheet" href="resources/css/main.css">
```

Una página puede incluir varias hojas de estilos, y siempre prevalecen los estilos de la última hoja añadida.

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