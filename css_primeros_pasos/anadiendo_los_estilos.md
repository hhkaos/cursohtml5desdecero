# Estilos externos

inline y externos
Reset.css

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