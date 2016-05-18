/**
 * Created by pawan.mishra on 5/16/2016.
 */

(function(){
  angular.module("ionicApp")
    .directive("mainMenu", mainMenu);

  mainMenu.$inject=["$state"];

  function mainMenu($state){
    var directive ={
      restrict : "E",
      scope :  {
        headerOptions:"="
      },
      controller : mainMenuCtrl,
      controllerAs : "vm",
      bindToController : true,
      templateUrl : 'widgets/mainMenu.directive.html'
    };

    return directive;


    mainMenuCtrl.$inject = [];

    function mainMenuCtrl() {
      console.log("hello main")
      var vm = this;

      vm.yo = function(){
        //console.log("yo "+vm.user.username+" !!")
        $state.go('signin')
      }

      vm.eventPlanner = function(){
        $state.go('eventPlanner')
      }
    }
  }
})()
