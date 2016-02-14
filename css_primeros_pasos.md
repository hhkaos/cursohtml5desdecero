# CSS: Primero pasos

Estilos por defecto en el navegador

No todas las etiquetas valen (can i use)[CanIUse.com](http://caniuse.com/)

## Cascading StyleSheets

CSS o las hojas de estilo en cascada es un lenguaje de marcado que nos permite modificar el aspecto gráfico de los elementos introducidos con HTML.

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