(function() {
  'use strict';

  /*
  *
  * How to add a component
  * ----------------------
  * 1) Add component name to 'components'
  * 2) Add state to $stateProvider
  * 
  */
  

  var components    = new Array(),
      routes        = new Object(),
      componentsDir = new String();

  componentsDir = '../components/';

  // define components here
  components    = [ 
                    'contactUs', 
                    'faqs',
                    'libraryDetail',
                    'libraryTop',
                    'registration',
                    'siteTop',
                    'studyListening',
                    'studyShadowing',
                    'studySpeaking',
                    'studyTop',
                    'studyWriting',
                    'userAccount',
                    'userHome'
                  ];

  for (var i = 0; i < components.length; i++) {

    Object.defineProperty(routes, components[i], {
      value: [
        componentsDir + components[i] + '/' + components[i] + '.html',
        components[i] + 'Ctrl'
      ]
    })

  };

  angular
    .module('angularApp')
    .config(function($stateProvider, $urlRouterProvider) {

      // add state for defined component
      $stateProvider
        .state('siteTop', {
          url: '/',
          templateUrl: routes.siteTop[0],
          controller: routes.siteTop[1],
        })
        .state('contactUs', {
          url: '/contactus',
          templateUrl: routes.contactUs[0],
          controller: routes.contactUs[1]
        })
        .state('faqs', {
          url: '/faqs',
          templateUrl: routes.faqs[0],
          controller: routes.faqs[1]
        })
        .state('libraryDetail', {
          url: '/libraryDetail',
          templateUrl: routes.libraryDetail[0],
          controller: routes.libraryDetail[1]
        })
        .state('libraryTop', {
          url: '/libraryTop',
          templateUrl: routes.libraryTop[0],
          controller: routes.libraryTop[1]
        })
        .state('registration', {
          url: '/registration',
          templateUrl: routes.registration[0],
          controller: routes.registration[1]
        })
        .state('studyListening', {
          url: '/studyListening',
          templateUrl: routes.studyListening[0],
          controller: routes.studyListening[1]
        })
        .state('studyShadowing', {
          url: '/studyShadowing',
          templateUrl: routes.studyShadowing[0],
          controller: routes.studyShadowing[1]
        })
        .state('studySpeaking', {
          url: '/studySpeaking',
          templateUrl: routes.studySpeaking[0],
          controller: routes.studySpeaking[1]
        })
        .state('studyTop', {
          url: '/studyTop',
          templateUrl: routes.studyTop[0],
          controller: routes.studyTop[1]
        })
        .state('studyWriting', {
          url: '/studyWriting',
          templateUrl: routes.studyWriting[0],
          controller: routes.studyWriting[1]
        })
        .state('userAccount', {
          url: '/userAccount',
          templateUrl: routes.userAccount[0],
          controller: routes.userAccount[1]
        })
        .state('userHome', {
          url: '/userHome',
          templateUrl: routes.userHome[0],
          controller: routes.userHome[1]
        })

      // .state('comments', {
      //   url: '/tasks/:task_id/comments',
      //   templateUrl: 'components/detail/detail.html',
      //   controller: 'detailCtrl',
      //   resolve: {
      //     auth: confirmLoggedIn
      //   }
      // })

      $urlRouterProvider.otherwise('/');

    })

})();