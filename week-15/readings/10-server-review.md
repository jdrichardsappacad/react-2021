# Server Review (Recall)

In this article, you will review:

- What a server is
- What the role of a server is in a full stack application

## What is a Server?

A **server** is a hardware or software that pushes and pulls data across
a network. A server's purpose is to send data to a client. A client can request
data from a server, and the server processes that request and responds with the
desired data.

## Role of a Server in a full stack Application

A full stack application is a Web application that has a frontend client and
a backend server. The frontend client requests web pages or data from the
backend server. The backend server sends the web pages or data to the
frontend client when requested.

The frontend client in a full stack application is responsible for displaying
web pages to a user.

Backend servers provide many functionalities in a full stack application. Some
functionalities include:

- Send the requested web pages
- Handle email messages
- Send files
- Store and send data in a database
- Process data
- Handle web traffic

Sometimes, there are multiple servers in a full stack application to spread out
the different roles and responsibilities. For example, there could be a server
for sending web pages to the frontend client. That server could request data
from a server storing data in a database.

## Usage with React and Redux

For the upcoming solo project, you'll create a full stack application that
utilizes React and Redux in the frontend and Express in the backend. In this
case the Express backend server will be used to store and send data in
a database through API routes, and eventually, send files to the client when
your application is in production and being served from Heroku or another
application platform.

## What you've learned

You learned that

- a server is a hardware or process that sends data through a network a server
- can have many responsibilities in a full stack application, such as sending
  web pages and storing and processing data
- a full stack application can have more than one server
