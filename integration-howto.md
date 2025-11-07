# How to integrate yFiles into an Angular application

This is a step-by-step description of how to add a yFiles graph component to a basic Angular application.

TL;DR Add `yfiles` as a dependency in the `package.json`,
[include your license](https://docs.yworks.com/yfileshtml/#/dguide/licensing#_general_concept),
and start importing yFiles classes in your project.

## Running the CLI

Run @angular/cli with `> ng new yfiles-angular-integration-basic` and select the following options:

- `? Would you like to add Angular routing?` No
- `? Which stylesheet format whould you like to use?` CSS

This creates a basic Angular project.

## Add yFiles as a dependency

Adding yFiles as a dependency is almost as easy as installing an external library from the npm registry:

1. Add yFiles for HTML as npm dependency to the created project, for example, like this:

   ```
   "dependencies": {
     ...
     "@yfiles/yfiles": "../yFiles-for-HTML-Complete-3.0.0.4-Evaluation/lib/yfiles-30.0.4+eval-dev.tgz"
   },
   ```

2. Install the newly added dependency with `npm install`.

3. Include your yFiles license by copying the `license.json` file into your project. For more options,
   see the [developer's guide](https://docs.yworks.com/yfileshtml/#/dguide/licensing#_general_concept)

After installing the dependency, you can import classes from `yfiles` in your project. Since yFiles
is installed as proper npm dependency, IDEs provide full code-completion and automatic imports out
of the box to easily work with the library.

## Integrate a basic yFiles graph component

With the yFiles dependency, you can easily create a new Angular component that contains a yFiles GraphComponent.

1. Run `ng generate component graph-component` to scaffold a new Angular component.
2. Then add a container `div` in the `graph-component.component.html` that hosts the yFiles GraphComponent and specify a size in `graph-component.component.css` for it.
3. In `graph-component.component.ts`, instantiate a new GraphComponent in the container `div` with editing capabilities
   and a basic sample graph. See the contents of `/src/app/graph-component/graph-component.component.ts` in this repository for the full implementation.

   Make sure to configure your license data as described above (see `graph-component.component.ts`, too).

4. Add the new component to the `/src/app/app.component.html` that was created by the Angular CLI.

And that's it. Run `npm run start` to serve the application at [http://localhost:4200/](http://localhost:4200/) with a basic yFiles component.
