//frequencyController
(function () {
    "use strict";

    angular
        .module("warehouse")
        .controller("frequencyController", frequencyController);

    function frequencyController($http) {
        var vm = this;
        vm.frequencies = [];
        vm.errorMessage = "";
        vm.isBusy = true;

        $http.get("/api/frequencies")
            .then(function (response) {
                //on succes
                angular.copy(response.data, vm.frequencies);
            },
            function (error) {
                //on failure
                vm.errorMessage = "Failed to load data: " + error;
            })
            .finally(function () {
                vm.isBusy = false;
            });

        vm.newFrequency = {};

        vm.Close = function () {
            $("#freqModal").modal("hide");
        };

        vm.addFrequency = function () {
            vm.isBusy = true;
            $http.post("/api/frequencies", vm.newFrequency)
                .then(function (response) {
                    //on success
                    vm.frequencies.push(response.data);
                    vm.newFrequency = {};
                },
                function (error) {
                    //on failure
                    vm.errorMessage = "Failed to save new Frequency";
                })
                .finally(function () {
                    vm.isBusy = false;
                });
        };

        //$http.get("/api/frequencies", id)
        //    .then(function (response) {
        //        vm.frequencies.
        //    })
    }
})();