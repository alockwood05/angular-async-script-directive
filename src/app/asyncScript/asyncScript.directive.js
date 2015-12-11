export function AsyncScriptDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      src: '@',
      /**
       * function to handle done state
       * @param {string} script     - the script loaded
       * @param {string} textStatus - the status
       * */
      done: '=?',
      /**
       * function to handle error
       * @param {object} jqxhr    - jquery object
       * @param {object} settings
       * @param {exception} e     - the error
       */
      fail: '=?'
    },
    link: (scope) => {
      console.log('src', scope.src);
      console.log($.getScript);
      $.getScript(scope.src, function (){console.log(arguments)})
        .done(function(script, textStatus) {
          console.log('loaded', script);
          scope.$emit('asyncScript:done', {src: scope.src});
          scope.done && scope.done(script,textStatus);
        })
        .fail(function (jqxhr, settings, e) {
          console.log('fail', arguments);
          scope.$emit('asyncScript:fail', {src: scope.src, error: e});
          scope.fail && scope.fail(jqxhr, settings, e);
        });
    }
  };

  return directive;
}
