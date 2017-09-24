"use strict";

eventsApp.controller("EditEventController",
    function EditEventController($scope) {
        $scope.saveEvent = function (data) {
            window.alert("event " + data.name + " saved");

        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };
    }
);