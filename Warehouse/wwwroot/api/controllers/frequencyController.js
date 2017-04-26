/*(function () {
    'use strict';

    angular
        .module('app')
        .controller('frequencyController', frequencyController);

    frequencyController.$inject = ['$location'];

    function frequencyController($location) {*/
/* jshint validthis:true */
/* var vm = this;
 vm.title = 'frequencyController';

 activate();

 function activate() { }
}
})();*/

//frequencyController.js
(function () {
    "use strict";

    angular
        .module("warehouse")
        .module("frequencyController", frequencyController);

    function frequencyController($http) {
        var vm = this;
        vm.frequencies = [];

        $http.get("/api/frequencies")
            .then(function (response) {
                //on succes
                angular.copy(response.data, vm.frequencies);
            },
            function (error) {
                //on failure
            })
            .finaly(function () {

            });
    }
})();