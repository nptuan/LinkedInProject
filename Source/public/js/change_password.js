/**
 * Created by Nguyễn Phương Tuấn on 15-May-16.
 */
var linkedInApp = angular.module('changePassword', []);
linkedInApp.controller('changePassword-controller', function ($scope) {
    window.sc = $scope;
    $scope.dummyUrl = "https://google.com";

    $scope.username = '';
    $scope.password = '';
    $scope.new_password = '';
    $scope.rePassword = '';
    $scope.error = '';

    $scope.changePassword = function () {
        if ($scope.new_password == $scope.rePassword) {
            var ref = new Firebase('https://1312664-linked-in-project.firebaseio.com/');
            ref.changePassword({
                email       : $scope.username,
                oldPassword : $scope.password,
                newPassword : $scope.new_password
            }, function(error) {
                if (error === null) {
                    $scope.error = "Password changed successfully";
                    window.location = "log_in.html";
                } else {
                    switch (error.code) {
                        case "INVALID_EMAIL":
                            $scope.error = "The specified user account email is invalid.";
                            break;
                        case "INVALID_PASSWORD":
                            $scope.error = "The specified user account password is incorrect.";
                            break;
                        case "INVALID_USER":
                            $scope.error = "The specified user account does not exist.";
                            break;
                        default:
                            $scope.error = error;
                    }
                    $scope.$apply();
                }
            });
        } else {
            $scope.error = "Re-enter Password again";
        }
    };

});