# Validación

Que el código se muestre en nuestro navegador web como queríamos no implica necesariamente que lo hayamos escrito bien. En muchas ocasiones el navegador es capaz de detectar errores humanos y corregirlos de manera automática para que el usuario vea bien la página, pero esto no es siempre así. Si queremos asegurarnos de que nuestra página está correctamente escrita podemos usar [el Validador de HTML del W3C](https://validator.w3.org/), que además en caso de encontrar errores nos dará pistas sobre cómo resolverlos.

Si abres el enlace verás que tienes 3 formas de validar código:
1. **Validate URI**: que te permite introducir la URL de una página para comprobar su código. Como nosotros aún no hemos alojado nuestra página en ningún servidor web no usaremos esta opción (aún).
2. **Validate by File Upload**: que nos permite subir un fichero HTML
3. **Validate by Direct Input**: que nos permite introducir el código dentro de un elemento **textarea**.

Usaremos las opciones 2 y 3 hasta que en la siguiente lección aprendamos cómo alojar nuestra página en un servidor web accesible desde Internet.

Aunque el naegador sea capaz de solucionar algunos de nuestros errores, es importante crear código válido porque:
* Aunque el navegador sea capaz de resolver un problema, no todos los navegadores son iguales, y por tanto puede que algunos no lo resuelvan o la solución que aplique provoque un efecto no deseado.
* Por accesibilidad como veremos a continuación.

# Accesibilidad
Vamos a ver este apartado muy por encima, pero no quería dejarlo completamente de lado.

Existe una iniciativa que tiene como objetivo hacer la web más accesible, especialmente para personas cualquier tipo de discapacidad: visual (completa o parcial), auditiva, cognitiva, etc. Esta iniciativa se llama: **Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)** y están creado un estándar que [actualmente se encuentra en la versión 1.1](https://www.w3.org/TR/wai-aria-1.1/).

Cualquiera puede aplicar algunas prácticas de accesibilidad con poco esfuerzo, como por ejemplo usar los [landmarks](https://www.w3.org/TR/wai-aria-1.1/#landmark_roles), que no son más que atributos que añadimos a las etiquetas para indicar las pártes más relevantes de nuestra página como: el menú de navegación, el área de contenido principal o contenido complementario<sup>1</sup>. 

Si hablas inglés te recomiendo ver [esta charla de Leonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc), una mujer ciega explicando la importancia de la accesibilidad.

<small>Aclaraciones:</small><br>
<small>1. Pequeño vídeo explicativo en inglés sobre [cómo usar los landmarks](https://www.youtube.com/watch?v=o4xHfi4t9S0).</small><br>
