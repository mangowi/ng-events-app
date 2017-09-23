"use strict";
 eventsApp.controller("EventController",

     function EventController($scope) {
        $scope.event = {
            name: "Daniel Mangowi",
            location: "Horsens",
            work: "Software developer"
        };
});