//Initialize

var linkedInApp = angular.module('linkedInApp', []);

linkedInApp.controller('content-controller', ['$scope','$http',
    function ($scope, $http) {
        window.sc = $scope;
        $scope.dummyUrl = "https://google.com";
    
        $http.get('https://api.myjson.com/bins/2sjy8').success(function (data) {
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

            $scope.showEditSummary = false;
            $scope.editSummaryShow = function() {
                $scope.editSummary = $scope.summary;
                $scope.showEditSummary = true;
            };
            $scope.editSummarySave = function() {
                $scope.summary = $scope.editSummary;
                $scope.showEditSummary = false;
            };


            $scope.editCurrentShow = function() {
                $('html, body').animate({ scrollTop: $('#id-experience').offset().top }, 'slow');
            };

            $scope.editPreviousShow = function() {
                $('html, body').animate({ scrollTop: $('#id-experience').offset().top }, 'slow');
            };

            $scope.editEducationShow = function() {
                $('html, body').animate({ scrollTop: $('#id-education').offset().top }, 'slow');
            };




            $scope.showEditExperience = new Array($scope.experience.length).fill(false);
            $scope.editExperience = $scope.experience;
            $scope.editExperienceShow = function(index) {
                $scope.editExperience[index].companyName = $scope.experience[index].companyName;
                $scope.editExperience[index].title = $scope.experience[index].title;
                $scope.editExperience[index].startPeriod = $scope.experience[index].startPeriod;
                $scope.editExperience[index].endPeriod = $scope.experience[index].endPeriod;
                $scope.editExperience[index].location = $scope.experience[index].location;
                $scope.editExperience[index].description = $scope.experience[index].description;

                $scope.showEditExperience[index] = true;
            };

            $scope.editExperienceSave = function(index) {
                $scope.experience[index].companyName = $scope.editExperience[index].companyName;
                $scope.experience[index].title = $scope.editExperience[index].title;
                $scope.experience[index].startPeriod = $scope.editExperience[index].startPeriod;
                $scope.experience[index].endPeriod = $scope.editExperience[index].endPeriod;
                $scope.experience[index].location = $scope.editExperience[index].location;
                $scope.experience[index].description = $scope.editExperience[index].description;


                $scope.showEditExperience[index] = false;
            };




            $scope.showEditEducation = new Array($scope.education.length).fill(false);
            $scope.editEducation = $scope.education;
            $scope.editEducationShow = function(index) {
                $scope.editEducation[index].name = $scope.education[index].name;
                $scope.editEducation[index].title = $scope.education[index].title;
                $scope.editEducation[index].startPeriod = $scope.education[index].startPeriod;
                $scope.editEducation[index].endPeriod = $scope.education[index].endPeriod;

                $scope.showEditEducation[index] = true;
            };

            $scope.editEducationSave = function(index) {
                $scope.education[index].name = $scope.editEducation[index].name;
                $scope.education[index].title = $scope.editEducation[index].title;
                $scope.education[index].startPeriod = $scope.editEducation[index].startPeriod;
                $scope.education[index].endPeriod = $scope.editEducation[index].endPeriod;

                $scope.showEditEducation[index] = false;
            };

        });
    }]);