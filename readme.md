# fullstack: Nginx, VueJS and Express

I am working on this to easily be able to get started with a containerized stack using Nginx to serve the VueJS application as well as having Express running in the background to handle backend tasks.

### What's included
- Nginx v 1.13.10 server with /api reverse proxy to Express
- VueJS  
- Node v6

## Development Mode
Start in development mode with `docker-compose -f docker-compose.dev.yaml up --build` create three containers. First we will
start nginx to proxy requests. A container running `webpack-dev-server` will handle default requests. Finally, a container 
running NodeJS and Express will handle requests to `/api`.


## Production Mode
Start in "production" mode with `docker-compose up --build` create three containers. First we will
start nginx to proxy requests. A container will bundle the static site by calling `yarn build`. Finally, a container 
running NodeJS and Express will handle requests to `/api`.
