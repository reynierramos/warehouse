(function () {
    "use strict";

    angular.module("warehouse", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "/api/views/frequency/frequencyView.html",
                controller: "frequencyController",
                controllerAs: "vm"
            });

            $routeProvider.when("/frequency/:id", {
                templateUrl: "/api/views/frequency/frequencyEdit.html",
                controller: "frequencyController",
                controllerAs: "vm"
            });

            //$routeProvider.when

            $routeProvider.otherwise({ redirectTo: "/" });
        });
})();