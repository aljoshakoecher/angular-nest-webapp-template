<h1 align="center">Angular-Nest-Webapp-Template</h1>
<p align="center">
	<img height="75px" src="https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667">
	&emsp;&emsp;&emsp;
	<img height="75px" src="https://github.com/angular/angular/raw/master/aio/src/assets/images/logos/angular/angular.png">
	&emsp;&emsp;&emsp;
    <img height="75px" src="https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67">
</p>
<p align="center">
	<b>A template repository you can use to start developing your own web application</b></br>
	* Starter template for an admin-style web application</br>
	* Monorepo with shared code that can be used in both frontend and backend</br>
	* NestJS backend with an example route to get you started</br>
	* Angular frontend using pure Bootstrap (no other dependencies)</br>
	</ul>
</p>
<hr>

## How to run

### Development setup
It's best to open two terminals. Use one to run the backend and the other one for the frontend.
- To run the backend, open a terminal inside the `backend` directory and run `npm run start:dev`. The backend will run on port 3000.
- To run the frontend, open a terminal inside the `frontend` directory and run `npm run start:dev`. The frontend will run on a local angular development server. Your browser shoould be automatically opend, if not go to http://localhost:4200/ (Note that there is no login. You can just click "login" with or without any credentials)

### Debug setup
*Documentation coming soon*

### Build for production
*Documentation coming soon*

## Directory structure
- backend: A Nest JS application containing all your backend services and business logic
  - All backend dependencies have to be put inside the separate package.json inside the backend folder
  - All API routes are inside `backend/src/routes`

- frontend: An angular application
  - All backend dependencies have to be put inside the separate package.json inside the frontend folder
  - Everything related to the basic layout should stay inside `frontend/src/app/layout`
  - All your modules with their components (.ts, .html, and .scss) should be put in `frontend/src/app/modules`
  - All code that's not part of one modules but is instead used by more than one module (e.g. your services, pipes, interceptors) should be put inside `frontend/src/app/shared`
  - Everything static (e.g. images) belongs inside `frontend/src/app/assets`
  - Angular environment definitions are kept in `frontend/src/app/environments`

- shared: You can put all classes / interfaces which you want to share between backend and frontend in this folder

## How to make it your own
This repository acts as a basic starting point to spare you some efforts and help you to get started quickly. The following two sections describe how you can create you own web application from this repository.

### Extend the frontend
Basic instructions on how to add your own modules to the frontend:
1. Create a folder for your module inside `frontend/src/app/modules`
2. Inside that folder, implement your Angular module with all its components, maybe its own router and whatever you need
3. Add your module to the list of links in the sidebar. To do so, you need to do a couple of things:
	- Inside `frontend/src/app/layout/sidebar/sidebar.component.html`: Copy and paste one of the existing links (complete a-tag from `<a [routerLinkActive]...` to `</a>` with your own contents (i.e. router-link, link text, font-awesome icon)
	- Inside `frontend/src/app/layout/layout-routing.module.ts`: Add your module route to one of the child routes by copying one of the existing ones. Make sure that the path matches your router link of the previous step and ensure that the path to your module file is correct.
4. Add your own services: As services are typically used in more than one module, they should be put inside the `frontend/src/app/modules/shared` directory.

### Add your own modules to the backend
As NestJS' modular approach and the way to handle things like routing and dependency injection is pretty similar to Angular, extending the backend is similar to extending the frontend. To add additional routes, you can simply:
1. Open a terminal inside the routes folder and run `nest g module <yourModuleName>`. This will create a folder and a module inside the routes folder
2. While still inside the routes folder, add a controller by executing `nest g controller <yourControllerName>`. This will generate you a controller.
3. Repeat #2 for a service: `nest g service <yourServiceName>`
4. You should be set up with your new backend route and can start implementing your logic. Make sure to import your module inside the imports of your app.module.ts  
