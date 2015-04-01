// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var hasClass = [];
   var walkDom = function(node, func) {
      func(node);
      node = node.firstChild;
      while (node) {
        walkDom(node, func);
        node = node.nextSibling;
      }
    }

    var allNodes = document.body;
    walkDom(allNodes, function(node) {
      if (node.nodeType === 1 && node.classList.contains(className)) {
        hasClass.push(node);
      }
    });
  return hasClass; 
};