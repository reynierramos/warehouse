(function () {
    "use strict";

    angular.module("warehouse", ["appControls", "ngRoute"])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    controller: "frequencyController",
                    controllerAs: "vm",
                    templateUrl: "/api/views/frequency/frequenciesView.html"
                });

            //$routeProvider
            //    .when("/frequencies", {
            //        controller: "frequencyController",
            //        controllerAs: "vm",
            //        templateUrl: "/api/views/frequency/frequencyEdit.html"
            //    });

            $routeProvider.otherwise({ redirectTo: "/" });
            //$locationProvider.html5Mode(true);
        });
})();