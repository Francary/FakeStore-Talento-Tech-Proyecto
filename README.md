# API REST en Node.js

## JSON POSTMAN
- [JSON DE POSTMAN](https://github.com/Francary/FakeStore-Talento-Tech-Proyecto/blob/master/Postman.jsom)

## RUTAS

- Login para Obtener Token:   
    `POST /api/login`  
  **Cuerpo del body:**

  ```json
  
  {
    "email": "admin@admin.com",
    "password": "imposible",
  }

- Crear un nuevo usuario:  
    `POST /api/users`  
  **Cuerpo del body:**

  ```json
  
  {
    "email": "admin@admin.com",
    "password": "imposible",
    "isAdmin": true
  }

- Consultar todos los usuarios:  
    `GET /api/users`

- Consultar todos los productos:  
    `GET /api/products`

- Consultar un producto por ID:  
    `GET /api/products/:id`

- Crear un nuevo producto:  
    `POST /api/products`  
  **Cuerpo del body:**

  ```json
  {
    "name": "Procesador AMD 9700",
    "price": 700,
    "description": "Procesador Gamer",
    "Categoria": ["Gamer", "Computacion"]
  }

- Eliminar un producto por ID:   
    `DELETE /api/products/:id`

- Actualizar un producto:  
    `PUT /api/products/:id`

## Authorization

Para la autenticacion use los Headers para enviar mi TOKEN
> Key Authorization  
 Value {{tokenFakeStore}} --> Que una variable Global para no tener que estarlo cambiado en cada peticion

![Capture](./src/img/imagen1.png)

## Tecnologias
<img src="https://www.surrealcms.com/uploads/nodejs-logo.png" width="150" height="50" style="margin-right: 15px;">    
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/New_Firebase_logo.svg/1280px-New_Firebase_logo.svg.png" width="150" height="50" style="margin-right: 15px;">    
<img src="https://www.dongee.com/tutoriales/content/images/2023/11/image-59.png"width="150" height="50" style="margin-right: 15px;">    
<img src="https://miro.medium.com/v2/resize:fit:788/1*XkmnsJ6Joa6EDFVGUw0tfA.png"width="150" height="50" style="margin-right: 15px;">    
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0"width="150" height="50" style="margin-right: 15px;">    
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png"width="150" height="50" style="margin-right: 15px;">    


## API EN VERCEL
[Link API VERCEL](https://fake-store-talento-tech-proyecto.vercel.app/)

