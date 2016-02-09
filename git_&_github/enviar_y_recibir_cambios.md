# Enviar y recibir cambios

Vamos a empezar por descargar, instalar y configurar [Github Desktop](https://desktop.github.com) que es una herramienta que nos va a ayudar a gestionar las versión de manera gráfica<sup>1</sup>.
 
Una vez descargado e instalado lo abrimos y nos identificamos con nuestra cuenta.

[![](../images/github_desktop_1.png)](../images/github_desktop_1.png)

Una vez hecho volvemos a la opción de clonar y seleccionamos el repositorio que acabamos de crear.

[![](../images/github_desktop_2.png)](../images/github_desktop_2.png)

Esto nos pedirá que seleccionamos una carpeta en nuestro disco duro donde se va a clonar el repositorio (se creará una carpeta nueva en nuestro disco duro lista para controlar los cambios). La seleccionamos y le damos a "OK".

Una vez clonada el repositorio vamos a ver una forma básica de usarlo.

Crear un nuevo repositorio desde la línea de comandos:
```bash
echo "# raulEsri.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/raulEsri/raulEsri.github.io.git
git push -u origin master
```