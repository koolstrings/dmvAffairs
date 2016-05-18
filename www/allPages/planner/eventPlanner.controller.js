/**
 * Created by pawan.mishra on 5/16/2016.
 */

(function(){
  angular
    .module("ionicApp")
    .controller("EventPlannerCtrl", EventPlannerCtrl);

  EventPlannerCtrl.$inject = ['$scope', '$state', '$ionicHistory'];

  /* @ngInject */
  function EventPlannerCtrl($scope, $state, $ionicHistory){
    var vm = this;
    vm.user = {username: "Pawan Mishra" };
    vm.choice="";
    vm.headerOptions = {
      name: "hey!!!!! the name is" +vm.user.username
    }

    vm.yo = function(){
      console.log("yo "+vm.user.username+" !!")
    }

    vm.eventPlanner = function(){
      $state.go(eventPlanner)
    }



    console.log("hello")

  }
})()
