# Tutorial

### 1. Clonar repo
```git clone https://github.com/andbrew/balux.git```

```cd balux/```

### 2. balux
Crear la base de datos ```'balux'``` en MySQL con todos los privilegios para el usuario ```'alvin'```
con la contraseña ```'galletaBernardi'```.

### 3. Dump DB
Ejecutar ```mysql> source filename``` donde ```filename``` es:

  3.1 ```balux.sql```
  
  3.2 ```movie.sql```
  
  3.3 ```person.sql```
  
  3.4 ```actor.sql```
  
  3.5 ```director.sql```
  
  3.6 ```oscar.sql```
  
**Nota: Es importante seguir el orden anterior**

### 4. Server & DB connection
```cd server/```

```npm start```

![](/ss1.png)

### 5. Run ```Vue``` app
```cd ../cliente/```

```npm run serve```

![](/ss2.png)

### 6. localhost
En cualquier navegador escribir la ruta: ```http://localhost:8080/movies```

![](/ss3.png)

**¡LISTO! Ahora desde la aplicación se esta haciendo una consulta a la tabla ```movie``` y el usuario de la app
puede agregar y eliminar cintas modificando directamente la base de datos**
