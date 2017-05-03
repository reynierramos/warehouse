﻿//frequencyController
(function () {
    "use strict";

    angular
        .module("warehouse")
        .controller("frequencyController", frequencyController);

    function frequencyController($http, $routeParams) {
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

        if ($routeParams.id) {
            vm.id = $routeParams.id;
            vm.frequency = {};

            $http.get("/api/frequencies/" + vm.id)
                .then(function (response) {
                    //on success
                    angular.copy(response.data, vm.frequency);
                },
                function (error) {
                    //on failure
                })
                .finally(function () {
                });
        }

        vm.updateFrequency = function () {
            vm.editFrequency = {
                "id": $routeParams.id,
                "value": angular.element("#value").val()
            };
            $http.put("/api/frequencies/", vm.editFrequency)
                .then(function (response) {
                    $location.path("/");
                },
                function (error) {
                    
                })
                .finally(function () {
                });
        }
    };
})();