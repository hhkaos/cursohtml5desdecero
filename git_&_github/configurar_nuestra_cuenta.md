# Configurar nuestra cuenta

Vamos a empezar por crear una cuenta en Github.

Primero vamos a la [sección "Signup"](https://github.com/join?source=header-home) y completamos nuestros datos:


[![](../images/github_2.png)](../images/github_2.png)

[![](../images/github_3.png)](../images/github_3.png)

[![](../images/github_4.png)](../images/github_4.png)

[![](../images/github_5.png)](../images/github_5.png)

Enhorabuena! ya tienes una cuenta en Github, será: http://www.github.com/**Username** en mi caso http://www.github.com/raulEsri ()

Crear un nuevo repositorio desde la línea de comandos:
```bash
echo "# raulEsri.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/raulEsri/raulEsri.github.io.git
git push -u origin master
```