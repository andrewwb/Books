namespace webapiRound2.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class BookListController {

        public books;

        constructor(private $http: ng.IHttpService, public $stateParams: ng.ui.IStateParamsService) {

            $http.get('/api/books')
                .then((response) => { // on success
                    this.books = response.data;
                })
                .catch((response) => { // on failure
                    console.log(response);
                });
        }
    }

    export class BookDetailsController {
        public book;

        constructor(private $http: ng.IHttpService, private $stateParams) {
            $http.get('/api/books/' + $stateParams.id).then((responce) => {
                this.book = responce.data;
            });
        }
    }

    export class BookCreateController {

        public book;
        public errors;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) { }

        public saveBook(): void {
            this.$http.post('/api/books', this.book)
                .then((response) => {
                    this.$state.go('bookList');
                })
                .catch((response) => {
                    this.errors = response.data;
                });
        }
    }

    export class BookEditController {

        public book;
        public errors;

        constructor(private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            $http.get(`/api/books/${$stateParams['id']}`)
                .then((response) => {
                    this.book = response.data;
                })
                .catch((response) => {
                    console.log(response);
                });
        }

        public saveBook(): void {
            this.$http.put(`/api/books/${this.$stateParams['id']}`, this.book)
                .then((response) => {
                    this.$state.go('bookList');
                })
                .catch((response) => {
                    this.errors = response.data;
                });
        }
    }
}
