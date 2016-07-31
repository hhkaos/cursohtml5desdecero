## Herencia

La palabra CSS viene de _Cascading StyleSheets_, esto quiere decir: Hojas de Estilo en Cascada. La palabra **cascada** hace referencia a una propiedad **muy importante** de las hojas de estilo, y es que los estilos aplicados a un elemento padre son heredados por su hijo.

Por ejemplo:

```html
<ul style="color: red">
    <li>Inicio</li>
    <li style="color: blue">Experiencia</li>
</ul>
```

En este caso el color de la fuente "Inicio" aparecerá en rojo y la de "Experiencia" en azul.

> **Nota**: te recuerdo que **no está recomendado** aplicar los estilos usando atributos. En este caso lo he hecho así porque creo que queda más clara la explicación.

Del mismo modo y como ya adelantábamos al principio del capítulo, si un estilo se define dos veces, el último definido será el que prevalezcerá, por ejemplo si en nuestro fichero escribimos:

```css
/* main.css */
p { 
    background: orange; 
    font-size: 24px; 
} 
p { 
    background: green; 
}
```

En este caso el color de todas las etiquetas **&lt;p&gt;** será verde. Esto ocurre igual si el estilo está definido en dos hojas CSS distintas pero ambas están añadidas usando la etiqueta **&lt;link&gt;**, en este caso prevalence el estilo definido en la última hoja añadida.

Si por error definiésemos la misma propiedad dos veces en un elemento también prevalecerá la segunda, por ejemplo:
```css
/* main.css */
p {
    background: orange;
    font-size: 24px;
    background: green;
}
```
En este caso también prevalecerá el verde.

## Predominancia del estilo más específico

```css
h1 span{
    color: red;
}
```

```css
h1 > span{
    color: red;
}
```

```css
h1, h2{
    color: red;
}
```

