/* eslint es6:true */
export function LazyDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: (test) => {
    }
  };

  return directive;
}
