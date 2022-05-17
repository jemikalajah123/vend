# Vend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Application hosted url

This client-side app is hosted on netlify. Click here to go there (https://vend-philip.netlify.app).


## Development server

Run `ng serve` for a dev server. Navigate to (http://localhost:4200/). The application will automatically reload if you change any of the source files.

## Running as Docker Container

**From within the project directory run the following:**

```
npm run docker:bash
```

to build image and container for app

when this is done, app will basically start on port `4200`.

### Viewing the running ports

Open a new terminal window and run the following command:

```
docker ps
```

You will be given a printout showing your running containers. Part of the printout should contain something like this:

```
.....   0.0.0.0:4200->4200/tcp, vend

```

This tells you that the various machines exist "locally" at 0.0.0.0 and that the exposed service port have been mapped to port 50420000.

## Development server using Docker

Run `docker-compose up` for a dev server. Navigate to (http://localhost:4200/. The application will automatically reload if you change any of the source files.

### Stopping Container

To stop the docker development environment, issue the following command from the project root:

```
npm run docker:down
```

This will stop all the container and related to this project.

### Starting Container

To start the docker development environment another time run:

```
npm run docker:up
```

This will start the container again

### View the Home Page

To load the welcome message of the app, visit the url below in a browser:

    http://0.0.0.0:4200

Thus your adventure begins... The project is up and running.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
