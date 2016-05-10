//Initialize
var linkedInApp = angular.module('linkedInApp', []);
linkedInApp.controller('content-controller', function ($scope) {
    window.sc = $scope;
    $scope.dummyUrl = "https://google.com";

    $scope.cover = '';
    $scope.avatar = '';
    $scope.name = '';
    $scope.position = '';
    $scope.work = '';
    $scope.isInfluencer = '';
    $scope.followers = '';
    $scope.profileURL = '';
    $scope.postsUrl = '';
    $scope.posts = '';
    $scope.summary = '';
    $scope.experience = '';
    $scope.caredCauses = '';
    $scope.supportedOrganizations = '';
    $scope.skills = '';
    $scope.education = '';
    $scope.project = '';

    //Read model from json data
    var myDataRef = new Firebase('https://intense-torch-8960.firebaseio.com/')

    myDataRef.on("value", function(snapshot) {
        var data = snapshot.val().data;
        $scope.cover = data.cover;
        $scope.avatar = data.avatar;
        $scope.name = data.name;
        $scope.position = data.position;
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
        $scope.project = data.project;
        $scope.$apply();
    });


    $scope.showEditName = false;
    $scope.editNameShow = function () {
        $scope.editFirstName = $scope.name[0];
        $scope.editLastName = $scope.name[1];
        $scope.showEditName = true;
    };
    $scope.editNameSave = function () {
        $scope.name[0] = $scope.editFirstName;
        $scope.name[1] = $scope.editLastName;


        var nameRef = new Firebase('https://intense-torch-8960.firebaseio.com/data/name');
        nameRef.update([
            $scope.editFirstName,
            $scope.editLastName
        ]);


        $scope.showEditName = false;
    };

    $scope.showEditPosition = false;
    $scope.editPositionShow = function () {
        $scope.editPosition = $scope.position;
        $scope.showEditPosition = true;
    };
    $scope.editPositionSave = function () {
        $scope.position = $scope.editPosition;

        var positionRef = new Firebase('https://intense-torch-8960.firebaseio.com/data');
        positionRef.update(
            {"position" : $scope.editPosition}
        );

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

        var workRef = new Firebase('https://intense-torch-8960.firebaseio.com/data/work');
        workRef.update(
            {
                "location": $scope.editLocation,
                "industry": $scope.editIndustry
            }
        );

        $scope.showEditLocation = false;
    };

    $scope.showEditSummary = false;
    $scope.editSummaryShow = function () {
        $scope.editSummary = $scope.summary;
        $scope.showEditSummary = true;
    };
    $scope.editSummarySave = function () {
        $scope.summary = $scope.editSummary;

        var summaryRef = new Firebase('https://intense-torch-8960.firebaseio.com/data');
        summaryRef.update(
            {"summary" : $scope.editSummary}
        );

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

    $scope.showAddExperience = false;
    $scope.addExperienceShow = function() {
        $scope.Experience = {   companyName: "",
            title: "",
            startPeriod: "",
            endPeriod: "",
            duration:"",
            location: "",
            description: ""};
        $scope.showAddExperience = true;
    };

    $scope.addExperienceSave = function() {
        $scope.experience.push($scope.Experience);

        var experienceRef = new Firebase('https://intense-torch-8960.firebaseio.com/data/experience');
        experienceRef.push($scope.Experience);

        $scope.showAddExperience = false;
    };


    $scope.showEditSkills = new Array($scope.skills.length).fill(false);
    $scope.editSkillsName = new Array($scope.skills.length);
    $scope.editSkillsEndorsers = new Array($scope.skills.length);

    $scope.editSkillsShow = function(index) {
        $scope.editSkillsName[index] = $scope.skills[index].name;
        $scope.editSkillsEndorsers[index] = $scope.skills[index].endorsers;

        $scope.showEditSkills[index] = true;
    };

    $scope.editSkillsSave = function(index) {
        $scope.skills[index].name = $scope.editSkillsName[index];
        $scope.skills[index].endorsers = $scope.editSkillsEndorsers[index];


        $scope.showEditSkills[index] = false;
    };

    $scope.showAddSkills = false;
    $scope.addSkillsShow = function() {
        $scope.Skill = {name: "", endorsers: ""};
        $scope.showAddSkills = true;
    };

    $scope.addSkillsSave = function() {
        $scope.skills.push($scope.Skill);

        var skillsRef = new Firebase('https://intense-torch-8960.firebaseio.com/data/skills');
        skillsRef.push($scope.Skill);

        $scope.showAddSkills = false;
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

    $scope.showAddEducation = false;
    $scope.addEducationShow = function() {
        $scope.Education = {    name: "",
            url: "",
            logo: "",
            title: "",
            startPeriod: "",
            endPeriod: ""};
        $scope.showAddEducation = true;
    };

    $scope.addEducationSave = function() {
        $scope.education.push($scope.Education);

        var educationRef = new Firebase('https://intense-torch-8960.firebaseio.com/data/education');
        educationRef.push($scope.Education);

        $scope.showAddEducation = false;
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

    $scope.showEditProject = new Array($scope.project.length).fill(false);
    $scope.editProjectName = new Array($scope.project.length);
    $scope.editProjectPosition = new Array($scope.project.length);
    $scope.editProjectYear = new Array($scope.project.length);
    $scope.editProjectDuration = new Array($scope.project.length);
    $scope.editProjectDetail = new Array($scope.project.length);
    $scope.editProjectShow = function(index) {
        $scope.editProjectName[index] = $scope.project[index].name;
        $scope.editProjectPosition[index] = $scope.project[index].position;
        $scope.editProjectYear[index] = $scope.project[index].year;
        $scope.editProjectDuration[index] = $scope.project[index].duration;
        $scope.editProjectDetail[index] = $scope.project[index].detail;
        $scope.showEditProject[index] = true;
    };

    $scope.editProjectSave = function(index) {
        $scope.project[index].name = $scope.editProjectName[index];
        $scope.project[index].position = $scope.editProjectPosition[index];
        $scope.project[index].year = $scope.editProjectYear[index];
        $scope.project[index].duration = $scope.editProjectDuration[index];
        $scope.project[index].detail = $scope.editProjectDetail[index];
        $scope.showEditProject[index] = false;
    };

    $scope.showAddProject = false;
    $scope.addProjectShow = function() {
        $scope.Project = {      name: "",
            logo: "",
            position: "",
            year: "",
            duration: "",
            detail: ""};
        $scope.showAddProject = true;
    };

    $scope.addProjectSave = function() {
        $scope.project.push($scope.Project);

        var projectRef = new Firebase('https://intense-torch-8960.firebaseio.com/data/project');
        projectRef.push($scope.Project);

        $scope.showAddProject = false;
    };

    $scope.deleteExperience = function (index) {
        $scope.experience.splice(index, 1);
    };
    $scope.deleteEducation = function (index) {
        $scope.education.splice(index, 1);
    };
    $scope.deleteProject = function (index) {
        $scope.project.splice(index, 1);
    };
    $scope.deleteOrganizations = function (index) {
        $scope.supportedOrganizations.splice(index, 1);
    };
    $scope.deleteCauses = function (index) {
        $scope.caredCauses.splice(index, 1);
    };
    $scope.deleteSkills = function (index) {
        $scope.skills.splice(index, 1);
    };
});