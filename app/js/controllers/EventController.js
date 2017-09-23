"use strict";
 eventsApp.controller("EventController",

     function EventController($scope) {

        $scope.snippet = '<span style="color: red;">hi there from ng-bind-html</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: "red"};
        $scope.myclass = "blue";
        $scope.buttonDisable = true;
        $scope.sortOrder = "name";
         $scope.sortOrder = "-upVoteEvent";

         $scope.event = {
            name: "Daniel Mangowi AngularJS",
            location: {
                address: "VIA Kamt",
                city: "Horsens",
                postcode: "8000",
                province: "Central Denmark"
            },
            date: "10/09/2017",
            time: '10:45 pm',
            imagePath: 'img/angularjs-logo.png',
             jsonfiltered:{
                 name: "Intro to AngularJS",
                 creatorName: "Daniel Mangowi",
                 level: "Beginner",
                 duration: '1 hour',
                 abstract: 'You will learn about angular how bla bla',
                 upVoteEvent: 0
             },
            sessions: [
                {
                    name: "Intro to AngularJS",
                    creatorName: "Daniel Mangowi",
                    level: "Beginner",
                    duration: '1 hour',
                    abstract: 'You will learn about angular how bla bla',
                    upVoteEvent: 0

                },
                {
                    name: "Get work done",
                    creatorName: "Daniel Mangowi",
                    level: "Intermediate",
                    duration: '45 hour',
                    abstract: 'We get into a project and we will learn about angular how bla bla',
                    upVoteEvent: 0

                },
                {
                    name: "Directives Master",
                    creatorName: "Daniel Mangowi",
                    level: "Advanced",
                    duration: '1 hour',
                    abstract: 'You will learn about angular how bla bla',
                    upVoteEvent: 0

                },
                {
                    name: "AngularJS or React",
                    creatorName: "Daniel Mangowi",
                    level: "ALL",
                    duration: '1 hour',
                    abstract: 'We wil explore more into history',
                    upVoteEvent: 0

                },
                {
                    name: "Scope is always there",
                    creatorName: "Daniel Mangowi",
                    level: "Advanced",
                    duration: '1 hour',
                    abstract: 'We will look  on how scope work and see what you can do with',
                    upVoteEvent: 0

                },
                {
                    name: "YGNT",
                    creatorName: "Daniel Mangowi",
                    level: "Beginner",
                    duration: '12 hour',
                    abstract: 'You are not going to need it',
                    upVoteEvent: 0
                }
            ]
        };

        $scope.upVoteSession = function (session) {
            session.upVoteEvent++;
        };
         $scope.downVoteSession = function (session) {
             session.upVoteEvent--;
         };
});