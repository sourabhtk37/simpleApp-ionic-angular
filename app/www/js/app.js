angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('About', {
      url: '/',
      templateUrl: 'views/About/About.html',
      controller: 'AboutCtrl'
    })
    .state('Skills', {
       
        url: '/Skills',
        abstract:true,
        templateUrl: 'views/Skills/Skills.html'
    })
    .state('Skills.frontend',{

      url:'/frontend',
      views: {
        'frontend': {
          templateUrl: 'views/Skills/frontend.html'
        }
      }
    })
    .state('Skills.backend',{

      url:'/backend',
      views: {
        'backend': {
          templateUrl: 'views/Skills/backend.html'
        }
      }
    })
   .state('Skills.testing',{

      url:'/testing',
      views: {
        'testing': {
          templateUrl: 'views/Skills/testing.html'
        }
      }
   })
    .state('social', {

        url: '/social',
        templateUrl:'views/social/social.html'

    })
    .state('hobbies', {

        url: '/hobbies',
        templateUrl:'views/hobbies/hobbies.html'

    })

    .state('eduation', {

        url: '/education',
        templateUrl:'views/education/education.html'
    })

    .state('/laurels', {

        url: '/laurels',
        templateUrl:'views/Skills/laurels.html'

    })

  $urlRouterProvider.otherwise('/');
})

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


})


