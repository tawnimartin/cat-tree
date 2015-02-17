$(function (){

  $.ajax("data.json", {

  success: function(data){

    var tree = buildTree(data);

    console.log("data", data);

    $("body").html(tree);

  }

 });

});

var buildTree = function(data){

var $rootUl

$rootUl = $("<ul />");

_.each(data, function (item) {
  var $innerUl, $innerLi;

  $rootLi = $("<li />");
  
  $rootLi.append("<span>" + item.name + "</span>");

  $rootUl.append($rootLi);

  if(item.children){

    innerData = item.children;
      
    $innerUl = $("<ul />");
     
    _.each(innerData, function  (innerItem){

    $innerLi = $("<li />");

    $innerLi.append("<span>" + innerItem.name + "</span>");

    $innerUl.append($innerLi);

  });

  console.log("inner li", $innerLi[0]);

  $rootLi.append($innerUl);

  }

});

return $rootUl;

};