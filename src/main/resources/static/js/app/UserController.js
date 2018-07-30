'use strict';

angular.module('crudApp').controller('UserController',
    ['UserService', '$scope',  function( UserService, $scope) {

        var self = this;
        self.user = {};
        self.searchContext = {};
        self.users=[];

        self.submit = submit;
        self.getAllUsers = getAllUsers;
        self.createUser = createUser;
        self.updateUser = updateUser;
        self.removeUser = removeUser;
        self.editUser = editUser;
        self.reset = reset;
        self.resetSearch = resetSearch;
        self.searchSD = searchSD;

        self.successMessage = '';
        self.errorMessage = '';
        self.successSearchMessage = '';
        self.errorSearchMessage = '';
        self.done = false;

        function submit() {
            console.log('Submitting');
            if (self.user.id === undefined || self.user.id === null) {
                console.log('Saving New User', self.user);
                createUser(self.user);
            } else {
                updateUser(self.user, self.user.id);
                console.log('User updated with id ', self.user.id);
            }
        }

        function createUser(user) {
            console.log('About to create user');
            UserService.createUser(user)
                .then(
                    function (response) {
                        console.log('User created successfully');
                        self.successMessage = 'User created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.user={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating User');
                        self.errorMessage = 'Error while creating User: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateUser(user, id){
            console.log('About to update user');
            UserService.updateUser(user, id)
                .then(
                    function (response){
                        console.log('User updated successfully');
                        self.successMessage='User updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating User');
                        self.errorMessage='Error while updating User '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeUser(id){
            console.log('About to remove User with id '+id);
            UserService.removeUser(id)
                .then(
                    function(){
                        console.log('User '+id + ' removed successfully');
                        self.successMessage='User '+ id +' removed successfully';
                        self.errorMessage='';
                    },
                    function(errResponse){
                        console.error('Error while removing user '+id +', Error :'+errResponse.data);
                        self.successMessage='';
                        self.errorMessage='Error while removing User '+id;
                    }
                );
        }


        function getAllUsers(){
            return UserService.getAllUsers();
        }

        function editUser(id) {
            self.successMessage='';
            self.errorMessage='';
            UserService.getUser(id).then(
                function (user) {
                    self.user = user;
                },
                function (errResponse) {
                    console.error('Error while removing user ' + id + ', Error :' + errResponse.data);
                }
            );
        }

        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.user={};
            $scope.myForm.$setPristine(); //reset Form
        }

        function resetSearch(){
            self.successSearchMessage='';
            self.errorSearchMessage='';
            self.searchContext={};
            $scope.mySearchForm.$setPristine(); //reset Form
        }

        function searchSD() {
            console.log('Searching');
            console.log('skills='+self.searchContext.skills);

            UserService.search(self.searchContext.skills)
            .then(
                function (response){
                    console.log('Found users with skills: ', self.searchContext.skills);
                    self.successSearchMessage='User found successfully with skills:'+self.searchContext.skills;
                    self.errorSearchMessage='';
                },
                function(errResponse){
                    console.error('Error while searching Users with skills:'+ self.searchContext.skills);
                    self.errorSearchMessage='Error while searching Users '+errResponse.data;
                    self.successSearchMessage='';
                });

        }
    }

    ]);