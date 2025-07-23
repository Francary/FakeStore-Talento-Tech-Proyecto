# API REST en Node.js

## RUTAS

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