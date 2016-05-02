# Propiedades - Parte 2

##

* **[opacity](https://www.w3.org/wiki/CSS/Properties/opacity)**: establece la transparencia de un elemento

## Borde (Border)

* border-width:
* border-style:
* border-color:
* border:

[Ver todos](https://www.w3.org/wiki/CSS/Properties#Border)

# Modificar el fondo de un elemento

## Fondo (Background)

* **[background-color](https://www.w3.org/wiki/CSS/Properties/background-color)**: nos permite especificar el color (igual que vimos antes) de fondo de un elemento.
* **[background-image](https://www.w3.org/wiki/CSS/Properties/background-image)**: permite especificar una URL de una imagen que queremos que aparezca de fondo (por ej: url('imagen.jpg'))
* **[background-repeat](https://www.w3.org/wiki/CSS/Properties/background-repeat)**: por defecto si establecemos una imagen de fondo se repite indefinidamente, pero esto podemos cambiarlo (repeat-x, repeat-y, no-repeat, ...)
* **[background-position](https://www.w3.org/wiki/CSS/Properties/background-position)**: nos permite cambiar la posición de la imagen de fondo (left, right, center, ...)
* **[background](https://www.w3.org/wiki/CSS/Properties/background)**: es un atajo igual que la propiedad **font**.

[Ver todos](https://www.w3.org/wiki/CSS/Properties#Background)

## Ejemplos

```css
body{
    background-color: #efefef;
}
```

```css
h1{
    background: url("fondo-encabezado.jpg") no-repeat center;
}
```

# Modificar una lista

## Lista (List)

* **[list-style-image](https://www.w3.org/wiki/CSS/Properties/list-style-image)**: permite especificar una imagen para cada que preceda a cada elemento de la lista.
* **[list-style-type](https://www.w3.org/wiki/CSS/Properties/list-style-type)**: si no es establece la propiedad *list-style-image* especficar el formato que precede a un elemento de la lista
* **[list-style](https://www.w3.org/wiki/CSS/Properties/list-style)**: es un atajo igual que *font* o *background*

[Ver todos](https://www.w3.org/wiki/CSS/Properties#List)

## Ejemplos

```css
li{
    list-style: none;
}
```

```css
li{
    list-style: square outsite;
}
```

```css
li{
    list-style-image: url("punto.jpg");
}
```

```css
li{
    list-style-type: upper-roman;
}
```