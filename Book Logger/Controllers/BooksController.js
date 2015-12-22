(function(){

angular.module('app')
.controller('BooksController',BooksController);

function BooksController(books,dataService,logger,badgeService)
{
	var vm  = this ;
	vm.appName = books.appName;
    vm.message = dataService.getAllBooks();
    //alert(vm.message);
    vm.allreader =  dataService.getAllReaders();
    vm.getbadge = badgeService.retrieveBadge;



    logger.output('Books Controller is created');
}

}());