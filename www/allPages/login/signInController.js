/**
 * Created by pawan.mishra on 5/13/2016.
 */
(function(){
  angular
  .module("ionicApp")
  .controller("SignInCtrl", SignInCtrl);

  SignInCtrl.$inject = ['$scope', '$state', '$ionicHistory'];

  /* @ngInject */
  function SignInCtrl($scope, $state, $ionicHistory){
    var vm = this;
    vm.user = {username: "Pawan Mishra" };
    vm.headerOptions = {
      name: "hey!!!!! the name is" +vm.user.username
    }

    console.log("hello")

  }
})()
