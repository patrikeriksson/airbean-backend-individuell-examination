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

### Menu
URL: /menu <br>
Method: GET <br>
Description: This endpoint returns the entire menu.


### About
URL: /about <br>
Method: GET <br>
Description: This endpoint returns information about the company.


### User
URL: /user/register <br>
Method: POST <br>
Description: This endpoint allows a new user to register.

URL: /user/login <br>
Method: POST <br>
Description: This endpoint allows a user to log in.

URL: /user/logout <br>
Method: POST <br>
Description: This endpoint allows a user to log out.


### Cart
URL: /cart <br>
method: POST <br>
Description: this endpoint allow a user to add an item to their cart.

URL: /cart <br>
method: GET <br>
Description: this endpoint returns the current contents of the cart along with the total price.

URL: /cart/:id <br>
method: DELETE <br>
Description: This endpoint allows a user to remove an item from their cart by specifying the item's ID in the URL.


### Order
URL: /order <br>
Method: POST <br>
Header: Authorization: Bearer token <br>
Description: This endpoint allows authenticated users to create a new order.

URL: /order/user/:userId <br>
Method: GET <br>
Description: This endpoint shows a list of all your orders, and the total sum. 

URL: /order/:orderId <br>
Method: GET <br>
Description: This endpoint shows the status of a specific order.

### Admin
URL: /admin/login <br>
Description: Signs you in as admin. <br>
Use this user for testing:
```
{
	"username": "admin",
	"password": "admin"
}
```

URL: /admin/product <br>
Method: POST <br>
Description: Adds a new product to the menu.

URL: /admin/product <br>
Method: PUT <br>
Description: Use this endpoint to update a product on the menu.

URL: /admin/product <br>
Method: DELETE <br>
Description: Use this endpoint to delete a product from the menu.

URL: /admin/promotion <br>
Method: POST <br>
Description: Creates a new promotional offer.

URL: /admin/promotion <br>
Method: DELETE <br>
Description: Deletes a promotional offer.


### Security
All endpoints that require authentication use JWT (JSON Web Token) to secure the API. <br>
Send the JWT token in the Authorization header with each request that requires authentication.


### Contributors:
Linnea Sjöholm <br>
Patrik Eriksson <br>
Lina Persson Signell <br>
Jens Alm <br>
Victoria Sten Åsenius <br>
