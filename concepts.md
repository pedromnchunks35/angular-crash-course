# Concepts
- Components,Services
- Directive,Pipes
- Data-Binding,Event Handlers
- Http Module,Forms module
- Routing and Animations
- Testing and building for production

# App route
- App route in index.html is what creates everything

# Components
- Components are each part of the application
- The AppComponent is the angular high level one, we build over it
- Example of components is like a button or something that we create ourselves
- Every component has the @Component tag and has always a flag
- The main component is [here](./crash-course/src/app/app.component.ts) (we will be 
describing each component there with comments)
## Create a component
```
ng generate component <COMP NAME>
```
- we can specify a place like
```
ng generate component <path>/comp-name
```
# Data Binding
- How we display the data in a page
- How do we make it update dynamically
- Signals
- See the [parent](./crash-course/src/app/components/parent/parent.component.ts)

# Event Listeners in Angular
- We can leverage events very easily in react
- We can see this in [child](./crash-course/src/app/components/child/child.component.ts)

# Routing in Angular
- To navigate throw the application using links
- Only loads what is needed
- We use routeOutlet in the initial path '', otherwise it will not resolve correctly
- An example is [here](./crash-course/src/app/app.routes.ts) with the starting component
being the one that exists in index.html by default: the [app component](./crash-course/src/app/app.component.ts)
- To create links between pages we will create a link in the path which is '', meaning it will be the root
- Check the imports of this component, because there will be a RouteLink there

# Services in Angular
- This is from where the data comes from
- We should make http request here as well
## Create a service
```
ng generate service <path>/<service-name>
```
- It creates stuff with @Injectable in it
- To use this, we go to a component and add `providers` in the @Component.. see it in [child](./crash-course/src/app/components/child/child.component.ts)
- If the service has `providedIn: 'root'` we dont need to add it in providers and its available everywhere supposedly
- Easy example without http call can be found at [child](./crash-course/src/app/components/child/child.component.ts) with service [some service](./crash-course/src/app/services/some-service.service.ts)
## For HttpClient
- Provide an http client in the [config](./crash-course/src/app/app.config.ts)
- Then you have an example in [http component](./crash-course/src/app/components/http-example/http-example.component.ts)

# Directives Angular
- conditions in the html
- examples of this are `*ngIf` (not show if something) 
- There is also @if()
- @Directive its an extension of this where we can change components using this condition

# Angular Pipes
- Pipes are like streams from java 
- We can check all kind of pipes in the angular documentation
- We can implement our own pipe by generating a pipe and implement a pipeTransform in it
