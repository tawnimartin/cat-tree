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

        //a level
        if(innerItem.children) {

        newInnerData = innerItem.children;

        //console.log("newInnerData: ", newInnerData);

        $newinnerUl = $("<ul />");

        _.each(newInnerData, function (newinnerItem){

           //console.log("newinnerItem: ", newinnerItem);

          $newinnerLi = $("<li />");

          $newinnerLi.append("<span>" + newinnerItem.name + "</span>");

          $newinnerUl.append($newinnerLi);

            //a level
            if(newinnerItem.children) {

            moreInnerData = newinnerItem.children;

            $anotherinnerUl = $("<ul />");

            _.each(moreInnerData, function (anotherinnerItem){

               $anotherinnerLi = $("<li />");

               $anotherinnerLi.append("<span>" + anotherinnerItem.name + "</span>");

               $anotherinnerUl.append($anotherinnerLi);

                //a level
                if(anotherinnerItem.children) {

                lastInnerData = anotherinnerItem.children;

                $lastinnerUl = $("<ul />");

                _.each(lastInnerData, function (lastinnerItem){

                   $lastinnerLi = $("<li />");

                   $lastinnerLi.append("<span>" + lastinnerItem.name + "</span>");

                   $lastinnerUl.append($lastinnerLi);

                });

                $anotherinnerLi.append($lastinnerUl);

              }


            });

            $newinnerLi.append($anotherinnerUl);

          }

        });

        $innerLi.append($newinnerUl);

      }

    });

  //console.log("inner li", $innerLi[0]);

  $rootLi.append($innerUl);

  }

});

return $rootUl;

};