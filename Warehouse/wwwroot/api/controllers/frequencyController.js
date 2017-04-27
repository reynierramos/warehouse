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

        vm.newFrequency = {};

        vm.Close = function () {
            $("#freqModal").modal("hide");
        };

        vm.addFrequency = function () {
            $http.post("/api/frequencies", vm.newFrequency)
                .then(function (response) {
                    //on success
                    vm.frequencies.push(response.data);
                    vm.newFrequency = {};
                },
                function (error) {
                    //on failure
                })
                .finally(function () {
                });
        };
    }
})();