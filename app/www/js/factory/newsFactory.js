angular.module("feedMe")
.factory("newsFactory",function($http,$q)
	{

var getNews=function()
{

var deffered=$q.defer();

$http({

method:"GET",
contentType:"application/json",
url:https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
}).then(function(response)
{
	console.log("from heckernew i got :",response);
}).error(function(params)
{
	console.log("error is ",params);
})

}


return{

	getNews:getNews
}

	});