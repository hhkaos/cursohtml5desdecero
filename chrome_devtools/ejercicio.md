# Ejercicio

[Ejercicio tipo test de autoevaluación - Lección 3](http://www.cursohtml5desdecero.com/tests/leccion3.html)

Una vez más, recuerda que puedes repetirlo tantas veces como quieras.

El ejercicio práctico es muy simple, tan sólo consiste en añadir el código que hemos visto en el capítulo "**HTML5: Primeros pasos > Etiquetas básicas**" (lo puedes encontrar al final de esta lección) al fichero *index.html* que hemos creado.

Luego quiero que te familiarices un poco con las pestañas que hemos visto e intentes:
* Usar los atajos de teclado en la pestaña "**Sources**".
* Buscar la petición HTTP que se envía al cargar la página en "**Network**".
* Editar el código en la pestaña "**Elements**": 
    * Modifica el contenido y el HTML de la etiqueta **h1**
    * Elimina una etiqueta
    * Reordena otra etiqueta
    * Haz una búsqueda y encuentra por ejemplo: **Rovira**
    * Haz clic en la jerarquía para acceder al elemento "**ul**".
    * Ejecuta el emulador y activa la opción de **Apple iPhone 5**.

```html
<!DOCTYPE html>
<!-- TODO: añadir la etiqueta lang -->
<html>
<head>
	<meta charset="UTF-8">
	<title>Ejemplo con etiquetas básicas</title>
</head>
<body>
    <h1>Etiquetas HTML</h1>
    <p>
        Este ejemplo muestra cómo combinar algunas de las etiquetas más básicas de HTML5. <br>
        Recuerda que <strong>es importante entender la diferencias entre ellas</strong>.
    </p>
    
    <h2>Etiqueta ul+li</h2>
    <p>
        Si listamos personas nominadas a los Oscars, dado que el orden no altera el significado, debemos usar <em>ul</em>. 
    </p>
    <ul>
        <li>David Verdaguer</li>
        <li>Jesús Castro</li>
        <li>Israel Elejalde</li>
        <li>Dani Rovira</li>
    </ul>
    
    <h2>Etiqueta ol+li</h2>
    <p>
        En el caso de que estemos listando elementos donde el orden es importante, como por ejemplo la clasificación de un mundial de fútbol, debemos usar <em>ol</em>.
    </p>
    <ol>	 
        <li>España</li>
        <li>Países Bajos</li>
        <li>Alemania</li>
        <li>Uruguay</li>
    </ol>
</body>
</html>
```

# Dudas
Si hay algo que no te haya quedado claro puedes preguntar cualquier duda en los [issues del proyecto en Github](https://github.com/hhkaos/cursohtml5desdecero/issues).
