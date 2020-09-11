# JWT-Authentication

This is a NodeJS app that implements a basic username and password authentication with JWT

## Available APIs

<h2>User APIs:</h2>

```POST /auth/register || /auth/login```

<h3>You can do a POST to /auth/register to create a new user.</h3>

The body must have:
<ul>
  <li><b>username:</b> The username</li>
  <li><b>password:</b> The password</li>
  <li><b>confirm-password:</b> The password confirmation</li>
</ul> 

<h3>You can do a POST to /auth/login to log a user in.</h3>

The body must have:
<ul>
  <li><b>username:</b> The username</li>
  <li><b>password:</b> The password</li>
</ul>

```GET /posts || /users```: for testing purpose

<h3>You can do a GET /posts to get all posts.</h3>

The headers must have:
<ul>
  <li><b>Authorization:</b> bearer user_token</li>
</ul>

<h3>You can do a GET /users to get all users.</h3>

The headers must have:
<ul>
  <li><b>Authorization:</b> bearer user_token</li>
</ul>

### Prerequisites

You must install <a href="https://nodejs.org/en/download/">node.js</a> in your machine

### Running it

Clone the repository, run npm install and then run the server: 
<ul>
  <li>
  <b>on development mode :</b> 
  
  ```npm run dev```
  </li>
  <li>
  <b>on production mode :</b> 
  
  ```npm run start```</li>
</ul>

You can change the PORT or the ACCESS_TOKEN_SECRET on ```/config/.env```

## Running the tests

<h4>Use REST Client extension</h4>
if you are using vs code install REST Client extension and try to use the Api endpoints in

```/requests.rest``` file
<hr>
<h4>Use Postman</h4>
The Collaboration Platform for API Development, it provides a powerful GUI platform to make your API development faster & easier

## Authors

* **Hamza Ghenimi** - [JWT-Authentication](https://github.com/hamzagh1998/JWT-Authentication)


