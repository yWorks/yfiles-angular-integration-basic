# How to integrate yFiles into an Angular application

This is a step-by-step description of how to add a yFiles graph component to a basic Angular application.

TL;DR Add yFiles as a dependency in the `package.json` and start importing yFiles classes in your project.

## Running the CLI

Run the Vue-Cli with `> ng new yfiles-angular-integration-basic` and select following options:

- `? Would you like to add Angular routing?` No
- `? Which stylesheet format whould you like to use?` CSS

This creates a basic Angular project.

## Add yFiles as a dependency

Adding yFiles as a dependency is as easy as installing an external library from the npm registry:

1. Add yFiles for HTML as npm dependency to the created project:

   - If you have a fresh yFiles for HTML package, you need to prepare the library package first by running `npm install` in the
     package folder. This creates the development library and a tarball that can be installed as npm dependency in
     other projects. See also [Working with the yFiles npm Module](https://docs.yworks.com/yfileshtml/#/dguide/yfiles_npm_module#yfiles_npm_module).

     Note: This sample project runs `npm install` as `preinstall` script in the `package.json`.

   - Reference the packed library in the `package.json` of the project:
     ```
     "dependencies": {
       ...
       "yfiles": "../yFiles-for-HTML-Complete-2.3.0.2-Evaluation/lib-dev/es-modules/yfiles-23.0.2-eval-dev.tgz"
     },
     ```

2. Now install the newly added dependency with `npm install`.
3. Include `yfiles.css`, which is an integral part of yFiles for HTML. For example add `@import '~yfiles/yfiles.css';'` to the global styles in `styles.css`.

After installing the dependency, you can import classes from `yfiles` in your project. Since yFiles is installed as proper npm dependency, IDEs provide full code-completion and automatic imports out of the box to easily work with the library.

## Integrate a basic yFiles graph component

With the yFiles dependency, you can easily create a new Angular component that contains a yFiles GraphComponent.

1. Run `ng generate component graph-component` to scaffold a new Angular component.
2. Then add a container `div` in the `graph-component.component.html` that hosts the yFiles GraphComponent and specify a size in `graph-component.component.css` for it.
3. In `graph-component.component.ts`, instantiate a new GraphComponent in the container `div` with editing capabilities
   and a basic sample graph. See the contents of `/src/app/graph-component/graph-component.component.ts` in this repository for the full implementation.

   Also, make sure to configure your `license.json` for the library (see `graph-component.component.ts`).

4. Add the new component to the `/src/app/app.component.html` that was created by the Angular CLI.

And that's it. Run `npm run start` to serve the application at [http://localhost:4200/](http://localhost:4200/) with a basic yFiles component.
