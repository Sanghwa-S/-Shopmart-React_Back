# Web422 Assignment 1: Restful API (Users and products)

This is a simple RESTful API that allows client applications to create, read, update, and delete products from the database

## This project uses:
- node.js
- express
- mongoDB

# End points

## Users

### GET /users

The endpoint above returns all users in the mongoDB database

### GET /users/id

The endpoint above returns a specific user based on the id in the mongoDB database

### POST /users

The endpoint above creates a new user in the mongoDB database using json. The fields include:

- firstName(*)
- lastName(*)
- email(*)
- password(*) (encrypted in the database)
- phoneNumber

("*") = required

## Products

### GET /products

The endpoint above returns all products in the mongoDB database

### GET /products/id

The endpoint above returns a specific product based on the id in the mongoDB database

### POST /products

The endpoint above creates a new product in the mongoDB database using json. The fields include:

- pName(*)
- price(*)
- pDescription
- pCategory(*)
- pQuantity
- bestseller(*)
- photo

("*") = required

### GET /products?pCategory="category"

The endpoint returns all products with the requested category (replace "category" with a valid category)

### POST /products/id

This endpoint updates a specific field in the mongoDB database

### DELETE /products/id

This endpoint deletes a document in the mongoDB database

## Rules to set up application

1. Clone source code by running: **npm install**
2. Ensure that you create a folder called **config**
3. Within the **config** folder, create a file called **keys.env**
4. Within the **keys.env** file, create two environment variables
   - **MONGODB_QUERY_STRING** - Assign your Database Connection String to the variable
   - PORT - Assign 8080
5. Run application by running : **npm run dev**
