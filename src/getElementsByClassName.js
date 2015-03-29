// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var hasClass = [];
  var childNodes = document.body.childNodes;
  var i = childNodes.length -1;
  var recursiveCheck = function(n) { 
    if (n === 0) {
      return hasClass;
    } else {
      if (childNodes[n].nodeType === 1 && childNodes[n].classList.contains(className)) {
        hasClass.push(childNodes[n].outerHTML);
      }
      return recursiveCheck(n-1);
    }
  }
  recursiveCheck(i);
};
