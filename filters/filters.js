
angular.module('raysapp.filters', [])
    .filter('reverse', function () {
        return function (inp) {
            return inp.split('').reverse().join('');
        };
    })
    .filter('country', function () {
        return function (inp, scope) {
            return scope.hashmap[inp];
        };
    });
