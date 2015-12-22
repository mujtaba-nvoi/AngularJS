(function () {

angular.module('app').service('logger',BookAppLogger);

function LoggerBase(){ console.log("This is Logger Base.");}

LoggerBase.prototype.output =function(message){

	console.log('Logger Base :' + message);
};

function BookAppLogger()
{
	LoggerBase.call(this);
	this.logbook = function(book){
		console.log('Book :' + book.title);
	};
}

BookAppLogger.prototype = Object.create(LoggerBase.prototype);

}());