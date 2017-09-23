"use strict";
 eventsApp.controller("EventController",

     function EventController($scope) {
        $scope.event = {
            name: "Daniel Mangowi AngularJS",
            location: {
                address: "VIA Kamt",
                city: "Horsens",
                postcode: "8000",
                province: "Central Denmark"
            },
            date: "10/09/2017 developer",
            time: '10:45 pm',
            imagePath: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: "Intro to AngularJS",
                    creatorName: "Daniel Mangowi",
                    level: "Beginner",
                    duration: '1 hour',
                    abstract: 'You will learn about angular how bla bla'
                },
                {
                    name: "Get work done",
                    creatorName: "Daniel Mangowi",
                    level: "Intermediate",
                    duration: '45 hour',
                    abstract: 'We get into a project and we will learn about angular how bla bla'
                },
                {
                    name: "Directives Master",
                    creatorName: "Daniel Mangowi",
                    level: "Advanced",
                    duration: '1 hour',
                    abstract: 'You will learn about angular how bla bla'
                },
                {
                    name: "AngularJS or React",
                    creatorName: "Daniel Mangowi",
                    level: "ALL",
                    duration: '1 hour',
                    abstract: 'We wil explore more into history'
                },
                {
                    name: "Scope is always there",
                    creatorName: "Daniel Mangowi",
                    level: "Advanced",
                    duration: '1 hour',
                    abstract: 'We will look  on how scope work and see what you can do with'
                },
                {
                    name: "YGNT",
                    creatorName: "Daniel Mangowi",
                    level: "Beginner",
                    duration: '12 hour',
                    abstract: 'You are not going to need it'
                }
            ]
        };
});