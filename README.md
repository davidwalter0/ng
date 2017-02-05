Trick:

Generate tags table, default is a deprecated/breaking key word

    find -iname '*.ts' -print0|xargs -0 etags 
    emacs M-x tags-query-replace <ENTER> \(export[ *]\)\(default\)\([ *].*\) <ENTER> \1 \3
    


# Skeleton Angular App

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



```
git clone git@github.com:davidwalter0/ng
cd ng
ln -s /path/to/resource/node_modules node_modules

# Depending on how much work needs to be done / how much angular
# config is in place the steps vary ]
# copy 
# If src directory has most of the components for angular
mv src src.orig
ls -s /path/to/apps/src src
cd src
cp -rPp ../src.orig/environment ./environment/
cp -rPp ../src.orig/assets      ./assets/

mv package.json package.json.orig
mv systemjs.config.js systemjs.config.js.orig

```

You man need to comment out items like these to avoid duplicate and
conflicting versions

```
  <!-- <script src="node_modules/core-js/client/shim.min.js"></script> -->
  <!-- <script src="node_modules/zone.js/dist/zone.js"></script> -->

  <!-- <script src="node_modules/typescript/lib/typescript.js"></script> -->
  <!-- <script src="node_modules/systemjs/dist/system.src.js"></script> -->
  <!-- <script src="systemjs.config.js"></script> -->
  <!-- <script> -->
  <!--   System.import('app').catch(function (err) {console.error(err);}); -->
  <!-- </script> -->

```
