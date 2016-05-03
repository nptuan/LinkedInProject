//Initialize

var linkedInApp = angular.module('linkedInApp', []);

linkedInApp.controller('content-controller', ['$scope', '$http',
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
            $scope.editNameShow = function () {
                $scope.editFirstName = $scope.name[0];
                $scope.editLastName = $scope.name[1];
                $scope.showEditName = true;
            };
            $scope.editNameSave = function () {
                $scope.name[0] = $scope.editFirstName;
                $scope.name[1] = $scope.editLastName;
                $scope.showEditName = false;
            };

            $scope.showEditPosition = false;
            $scope.editPositionShow = function () {
                $scope.editPosition = $scope.possition;
                $scope.showEditPosition = true;
            };
            $scope.editPositionSave = function () {
                $scope.possition = $scope.editPosition;
                $scope.showEditPosition = false;
            };

            $scope.showEditLocation = false;
            $scope.editLocationShow = function () {
                $scope.editLocation = $scope.work.location;
                $scope.editIndustry = $scope.work.industry;
                $scope.showEditLocation = true;
            };
            $scope.editLocationSave = function () {
                $scope.work.location = $scope.editLocation;
                $scope.work.industry = $scope.editIndustry;
                $scope.showEditLocation = false;
            };

            $scope.showEditSummary = false;
            $scope.editSummaryShow = function () {
                $scope.editSummary = $scope.summary;
                $scope.showEditSummary = true;
            };
            $scope.editSummarySave = function () {
                $scope.summary = $scope.editSummary;
                $scope.showEditSummary = false;
            };


            $scope.editCurrentShow = function () {
                $('html, body').animate({scrollTop: $('#id-experience').offset().top}, 'slow');
            };

            $scope.editPreviousShow = function () {
                $('html, body').animate({scrollTop: $('#id-experience').offset().top}, 'slow');
            };

            $scope.editEducationTopShow = function () {
                $('html, body').animate({scrollTop: $('#id-education').offset().top}, 'slow');
            };

            $scope.goTop = function () {
                $('html, body').animate({scrollTop: $('#timeline').offset().top}, 'slow');
            };


            $scope.showEditExperience = new Array($scope.experience.length).fill(false);
            $scope.editExperienceCompanyName = new Array($scope.experience.length);
            $scope.editExperienceTitle = new Array($scope.experience.length);
            $scope.editExperienceStartPeriod = new Array($scope.experience.length);
            $scope.editExperienceEndPeriod = new Array($scope.experience.length);
            $scope.editExperienceLocation = new Array($scope.experience.length);
            $scope.editExperienceDescription =new Array($scope.experience.length);

            $scope.editExperienceShow = function(index) {
                $scope.editExperienceCompanyName[index] = $scope.experience[index].companyName;
                $scope.editExperienceTitle[index] = $scope.experience[index].title;
                $scope.editExperienceStartPeriod[index] = $scope.experience[index].startPeriod;
                $scope.editExperienceEndPeriod[index] = $scope.experience[index].endPeriod;
                $scope.editExperienceLocation[index] = $scope.experience[index].location;
                $scope.editExperienceDescription[index] = $scope.experience[index].description;

                $scope.showEditExperience[index] = true;
            };

            $scope.editExperienceSave = function(index) {
                $scope.experience[index].companyName = $scope.editExperienceCompanyName[index];
                $scope.experience[index].title = $scope.editExperienceTitle[index];
                $scope.experience[index].startPeriod = $scope.editExperienceStartPeriod[index];
                $scope.experience[index].endPeriod = $scope.editExperienceEndPeriod[index];
                $scope.experience[index].location = $scope.editExperienceLocation[index];
                $scope.experience[index].description = $scope.editExperienceDescription[index];


                $scope.showEditExperience[index] = false;
            };


            $scope.showEditEducation = new Array($scope.education.length).fill(false);
            $scope.editEducationName = new Array($scope.education.length);
            $scope.editEducationTitle = new Array($scope.education.length);
            $scope.editEducationStartPeriod = new Array($scope.education.length);
            $scope.editEducationEndPeriod = new Array($scope.education.length);

            $scope.editEducationShow = function(index) {
                $scope.editEducationName[index] = $scope.education[index].name;
                $scope.editEducationTitle[index] = $scope.education[index].title;
                $scope.editEducationStartPeriod[index] = $scope.education[index].startPeriod;
                $scope.editEducationEndPeriod[index] = $scope.education[index].endPeriod;

                $scope.showEditEducation[index] = true;
            };

            $scope.editEducationSave = function(index) {
                $scope.education[index].name = $scope.editEducationName[index];
                $scope.education[index].title = $scope.editEducationTitle[index];
                $scope.education[index].startPeriod = $scope.editEducationStartPeriod[index];
                $scope.education[index].endPeriod = $scope.editEducationEndPeriod[index];

                $scope.showEditEducation[index] = false;
            };

            $scope.showEditCauses = new Array($scope.caredCauses.length).fill(false);
            $scope.editCauses = new Array($scope.caredCauses.length);
            $scope.editCausesShow = function (index) {
                $scope.editCauses[index] = $scope.caredCauses[index];
                $scope.showEditCauses[index] = true;
            };
            $scope.editCausesSave = function (index) {
                $scope.caredCauses[index] = $scope.editCauses[index];
                $scope.showEditCauses[index] = false;
            };



            $scope.showEditOrganizations = new Array($scope.caredCauses.length).fill(false);
            $scope.editOrganizations = new Array($scope.caredCauses.length);
            $scope.editOrganizationsShow = function (index) {
                $scope.editOrganizations[index] = $scope.supportedOrganizations[index];
                $scope.showEditOrganizations[index] = true;
            };
            $scope.editOrganizationsSave = function (index) {
                $scope.supportedOrganizations[index] = $scope.editOrganizations[index];
                $scope.showEditOrganizations[index] = false;
            };

        });
    }]);