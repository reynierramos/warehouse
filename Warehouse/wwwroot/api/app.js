(function () {
    "use strict";

    angular.module("warehouse", ["ngRoute", "appControls"])
        .config(function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "/api/views/frequency/frequenciesView.html",
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