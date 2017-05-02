//loadingControls
(function () {
    "use strict"

    angular
        .module("appControls", [])
        .directive("waitCursor", waitCursor);

    function waitCursor() {
        return {
            scope: {
                show: "=displayWhen"
            },
            restrict: "E",
            templateUrl: "/api/views/waitCursor.html"
        };
    }
})();