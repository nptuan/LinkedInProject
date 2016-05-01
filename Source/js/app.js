//Initialize

var linkedInApp = angular.module('linkedInApp', []);

linkedInApp.controller('content-controller', ['$scope','$http',
    function ($scope, $http) {
        window.sc = $scope;
        $scope.dummyUrl = "https://google.com";
    
        $http.get('https://api.myjson.com/bins/40p2a').success(function (data) {
            //Read model from json data
            $scope.cover = data.cover;
            $scope.avatar = data.avatar;
            $scope.name = data.name;
            $scope.possition = data.possition;
            $scope.work = data.work;
            $scope.isInfluencer = data.isInfluencer;
            $scope.followers = data.followers;
            $scope.profileURL = data.profileURL;
            
            $scope.postsUrl = data.postsUrl;
            $scope.posts = data.posts;
            
            $scope.summary = data.summary;
            
            $scope.experience = data.experience;
            
            $scope.caredCauses = data.caredCauses;
            
            $scope.supportedOrganizations = data.supportedOrganizations;
            
            $scope.skills = data.skills;
            
            $scope.education = data.education;





            $scope.showEditName = false;
            $scope.editNameShow = function() {
                $scope.editFirstName = $scope.name[0];
                $scope.editLastName = $scope.name[1];
                $scope.showEditName = true;
            };
            $scope.editNameSave = function() {
                $scope.name[0] = $scope.editFirstName;
                $scope.name[1] = $scope.editLastName;
                $scope.showEditName = false;
            };

            $scope.showEditPosition = false;
            $scope.editPositionShow = function() {
                $scope.editPosition = $scope.possition;
                $scope.showEditPosition = true;
            };
            $scope.editPositionSave = function() {
                $scope.possition = $scope.editPosition;
                $scope.showEditPosition = false;
            };

            $scope.showEditLocation = false;
            $scope.editLocationShow = function() {
                $scope.editLocation = $scope.work.location;
                $scope.editIndustry = $scope.work.industry;
                $scope.showEditLocation = true;
            };
            $scope.editLocationSave = function() {
                $scope.work.location = $scope.editLocation;
                $scope.work.industry = $scope.editIndustry;
                $scope.showEditLocation = false;
            };
            
        });
    }]);