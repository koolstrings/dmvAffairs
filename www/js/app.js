angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'allPages/login/sign-in.html',
      controller: 'SignInCtrl as vm'
    })
    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'allPages/forgot-password.html'
    })
    .state('eventPlanner', {
      url: '/Event Planner',
      templateUrl: '/allPages/planner/eventPlanner.html',
      controller: 'EventPlannerCtrl as vm'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'allPages/home.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: '/facts',
      views: {
        'home-tab': {
          templateUrl: 'allPages/facts.html'
        }
      }
    })
    .state('tabs.facts2', {
      url: '/facts2',
      views: {
        'home-tab': {
          templateUrl: 'allPages/facts2.html'
        }
      }
    })
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'allPages/about.html'
        }
      }
    })
    .state('tabs.navstack', {
      url: '/navstack',
      views: {
        'about-tab': {
          templateUrl: 'allPages/nav-stack.html'
        }
      }
    })
    .state('tabs.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          templateUrl: 'allPages/contact.html'
        }
      }
    });


   $urlRouterProvider.otherwise('/sign-in');

})

// .controller('SignInCtrl', function($scope, $state) {
//
//   $scope.signIn = function(user) {
//     console.log('Sign-In', user);
//     $state.go('tabs.home');
//   };
//
// })

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
