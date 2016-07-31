## Herencia

La palabra CSS viene de *Cascading StyleSheets*, esto quiere decir: Hojas de Estilo en Cascada.


Una propiedad **muy importante** de las hojas de estilo es que los estilos aplicados a un elemento padre son heredados por su hijo.

```html
<ul style="color: red">
    <li>Inicio</li>
    <li style="color: blue">Experiencia</li>
</ul>
```

En este caso el color de la fuente "Inicio" aparecerá en rojo y la de "Experiencia" en azul.

> Nota: **no está recomendado** aplicar los estilos usando atributos. A esta forma se le llama usar "estilos en línea".


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

