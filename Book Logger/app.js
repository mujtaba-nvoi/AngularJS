(function(){

	var app = angular.module('app',[]);

	app.provider('books',function(){

		this.$get= function(bookAppConstants){

			var appName = bookAppConstants.APP_TITLE;
			var appDesc = bookAppConstants.APP_DESCRIPION;
			var version = bookAppConstants.APP_VERSION;

			if(includeVersionInTitle)
			{
				appName = appName+=' <<<<  '+version+'  >>>>';
			}

			return {
				appName : appName,
				appDesc : appDesc
			};
		};

var includeVersionInTitle = false;
this.setIncludeVersionInTitle = function (value) {
	includeVersionInTitle = value;
};

	});

app.config(function (booksProvider,bookAppConstants) {
	booksProvider.setIncludeVersionInTitle(false);
	console.log("APP_AUTHOR : " +bookAppConstants.APP_AUTHOR);
	console.log("APP_VENDOR : "+bookAppConstants.APP_VENDOR);

});



}());