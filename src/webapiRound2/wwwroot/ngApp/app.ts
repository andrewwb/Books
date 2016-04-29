namespace webapiRound2 {

    angular.module('webapiRound2', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: webapiRound2.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/about.html',
                controller: webapiRound2.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('bookList', {
                url: '/books',
                templateUrl: '/ngApp/bookList.html',
                controller: webapiRound2.Controllers.BookListController,
                controllerAs: 'controller'
            })
            .state('bookCreate', {
                url: '/books/create',
                templateUrl: '/ngApp/bookCreate.html',
                controller: webapiRound2.Controllers.BookCreateController,
                controllerAs: 'controller'
            })
            .state('bookEdit', {
                url: '/books/edit/:id',
                templateUrl: '/ngApp/bookCreate.html',
                controller: webapiRound2.Controllers.BookEditController,
                controllerAs: 'controller'
            })
            .state('bookDetails', {
                url: '/books/:id',
                templateUrl: '/ngApp/bookDetails.html',
                controller: webapiRound2.Controllers.BookDetailsController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}
