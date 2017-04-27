//frequencyController
(function () {
    "use strict";

    angular
        .module("warehouse")
        .controller("frequencyController", frequencyController);

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
            .finally(function () {

            });
    }
})();