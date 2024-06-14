# Airbean API


## The assignment:

"In this group project, you will create an API for the web app Airbean where users can order coffee and have it delivered by drone (drones are not included in the assignment). Note: You do not need to create any frontend; your task is only the backend."

## Start up the project:

1. Clone the repo:
```sh 
git https://github.com/patrikeriksson/airbean-backend-individuell-examination.git
```

2. Navigate to the project:
```sh
cd airbean-backend-individuell-examination
```

3. Ensure you have Node.js installed, then install dependecies:
```sh
npm install
```

4. Run the application:
```sh
npm run dev
```

5. To test out the application, use Insomnia or Postman.

# API documentation

## Base URL:
http://localhost:8000

## Endpoints:

### 1.
URL: /menu
Method: GET
Description: This endpoint returns the entire menu.


### 2.
URL: /about
Method: GET
Description: This endpoint returns information about the company.


### 3.
URL: /order
Method: POST
Header: Authorization: Bearer <token>
Description: This endpoint allows authenticated users to create a new order.

URL: /order/user/:userId
Method: GET
Description: This endpoint shows a list of all your orders, and the total sum.

URL: /order/:orderId
Method: GET
Description: This endpoint shows the status of a specific order.


### 4.
/user

URL: /user/register
Method: POST
Description: This endpoint allows a new user to register.

URL: /user/login
Method: POST
Description: This endpoint allows a user to log in.

URL: /user/logout
Method: POST
Description: This endpoint allows a user to log out.


### 5.
URL: /cart
method: POST
Description: this endpoint allow a user to add an item to their cart.

URL: /cart
method: GET
Description: this endpoint returns the current contents of the cart along with the total price.

URL: /cart/:id
method: DELETE
Description: This endpoint allows a user to remove an item from their cart by specifying the item's ID in the URL.




### Security
All endpoints that require authentication use JWT (JSON Web Token) to secure the API

. Send the JWT token in the Authorization header with each request that requires authentication.


### Contributors:
Linnea Sjöholm
Patrik Eriksson
Lina Persson Signell
Jens Alm
Victoria Sten Åsenius
