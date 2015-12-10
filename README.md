# angular-async-script-directive
Experimentation with angular to get mini js apps to load on the fly.  
Starting off with proof of concept, non-angular apps/javascript bits.  

Writing in here is some thoughts outloud, exuse any typos or incomplete thoughts,
occassionally the thoughts don't make it all the way to the keyes when I'm
whipping through a demo project of my own.  Welcome to the playground :).


## Goal

Load a mini app within an angular app via an angular directive.


## Tech Flow
### Phase 1 POC
1. Reference the new `async-script` directive
2. Have the `src` attribute be the script it is getting
3. inject script via creating a script dom element, 

### Phase 2 Cleanup
- ensure smart caching. 
- explore passing data into the script from the container application

## Links and resources
- [async script loading](http://www.html5rocks.com/en/tutorials/speed/script-loading/)
- [Ben Nadel's post about lazy loading apps](http://www.bennadel.com/blog/2553-loading-angularjs-components-after-your-application-has-been-bootstrapped.htm)
- [IFY I/O blog: Lazy Loading In AngularJS](http://ify.io/lazy-loading-in-angularjs/)



---------------------------


*Misc

- New frameworks for me, so bear with me

  This is my first sandbox for playing with a few different javascript tools.
  I initialized the project with [yo gulp-angular](https://github.com/Swiip/generator-gulp-angular)
  and now I have some new technology I get to figure out while working on this  proof of concept.

- Require.js first time (stand alone and with angular)

  The project, in addition to using **angular** and **gulp** is using **require.js** for loading js
  asynch making clean dependency management.  Which I haven't used before.

- What I am working with to start

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
