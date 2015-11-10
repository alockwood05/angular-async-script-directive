# angular-dynamic-modules
Experimentation with angular to get modules to load on the fly / lazy.
Writing in here is some thoughts outloud, exuse any typos or incomplete thoughts,
occassionally the thoughts don't make it all the way to the keyes when I'm
whipping through a demo project of my own.  Welcome to the playground :).

## What do I want this app to look like?
The goal of this app is going to be to demonstrate a directive that
will enable a directive module to be loaded asynch.  This will allow for
components to be developed and deployed and separately from the main application.
This architecture will support larger applications that are built in a micro services context.

## Starting place

### New frameworks for me, so bear with me

This is my first sandbox for playing with a few different javascript tools.
I initialized the project with [yo gulp-angular](https://github.com/Swiip/generator-gulp-angular)
and now I have some new technology I get to figure out while working on this  proof of concept.

### Require.js first time (stand alone and with angular)

The project, in addition to using **angular** and **gulp** is using **require.js** for loading js
asynch making clean dependency management.  Which I haven't used before.

### What I am working with to start

- Redunant but clear file naiming
    - *main/main.controller.js* naming for the main controller
    - supports relatively clean separation, and naming,
    - probably wouldn't be good for a large heirarchical file stucture
    - easy to find files if you use an editor that prefers file name searching

- boot strapping the angular application through one index module
    - using requirejs the index module wires up all of the components, incuding globals, into
      one application
    - the one application is then initialized via angular's ng-app module
    - this method is good for a simple application
    - though requires everything to go through one app before load, so dependencies would be blocking

## Thinking through a plan to achieve my goal

I like to start with the clean usecase I want to end up with.  I hope to be able to have a
framework inplace that will allow me to add self contained directives to a page.
It might look like this:

    <lazy widget="testModule"></lazy>

Would load the module from a url `"http://my.domain.com/testModule.js"`
and apply the directive to the *lazy* element.

### Tech requirements

- utilze caching so you don't lazy load x2
- allow passing in of variables

## Tech Flow

1. define `lazy` directive
2. lazy directive would check for the directive whcih will (for now) be the tag name
3. if already loaded would do nothing and let angular handle the directive as normal
4. Lazy would pint an endpoint to get the directive module, register it and compile the directive

## Links and resources

- [Ben Nadel's post about lazy loading apps](http://www.bennadel.com/blog/2553-loading-angularjs-components-after-your-application-has-been-bootstrapped.htm)
- [IFY I/O blog: Lazy Loading In AngularJS](http://ify.io/lazy-loading-in-angularjs/)


