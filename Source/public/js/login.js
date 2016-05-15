/**
 * Created by Nguyễn Phương Tuấn on 15-May-16.
 */
var linkedInApp = angular.module('logIn', []);
linkedInApp.controller('login-controller', function ($scope) {
    window.sc = $scope;
    $scope.dummyUrl = "https://google.com";
    
    $scope.username = '';
    $scope.password = '';
    $scope.error = '';
    
    $scope.logIn = function () {
        var ref = new Firebase('https://1312664-linked-in-project.firebaseio.com/');
        ref.authWithPassword({
            email    : $scope.username,
            password : $scope.password
        }, function(error, authData) {
            if (error) {
                switch (error.code) {
                    case "INVALID_EMAIL":
                        $scope.error = "The specified user account email is invalid.";
                        break;
                    case "INVALID_PASSWORD":
                        $scope.error = "The specified user account password is incorrect.";
                        break;
                    case "INVALID_USER":
                        $scope.error = "The specified user account does not exist. Please register.";
                        break;
                    default:
                        $scope.error = "Error logging user in:" + error;
                }
                $scope.$apply();
            } else {
                window.location = "index.html";
            }
        });
    };

});