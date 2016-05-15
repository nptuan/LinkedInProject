/**
 * Created by Nguyễn Phương Tuấn on 15-May-16.
 */
var linkedInApp = angular.module('register', []);
linkedInApp.controller('register-controller', function ($scope) {
    window.sc = $scope;
    $scope.dummyUrl = "https://google.com";

    $scope.username = '';
    $scope.password = '';
    $scope.rePassword = '';
    $scope.error = '';

    $scope.register = function () {
        if ($scope.password == $scope.rePassword) {
            var ref = new Firebase('https://1312664-linked-in-project.firebaseio.com/');
            ref.createUser({
                email    : $scope.username,
                password : $scope.password
            }, function(error, userData) {
                if (error) {
                    $scope.error = "Error creating user:" + error;
                    $scope.$apply();
                } else {
                    $scope.error = "Successfully created user account with uid: " + userData.uid;
                    window.location = "log_in.html";
                }
            });
        } else {
            $scope.error = "Re-enter Password again";
        }
    };

});