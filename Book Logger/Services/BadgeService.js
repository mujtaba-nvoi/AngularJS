(function(){

angular.module('app').value('badgeService',{retrieveBadge:retrieveBadge});

function retrieveBadge(minutesRead)
{
	var badge = null;

	switch(true)
	{
		case(minutesRead >5000):
		badge = 'Book Worm';
		break;
		case(minutesRead >2500):
		badge = 'Page Turner';
		break;
	    case(minutesRead >1500):
		badge = 'Try Harder';
		break;
		default:
		badge= "Getting Started";
	}

	return badge;
}

})();