// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringified = "";
  if (typeof obj === 'string') {
    stringified += '"'+ obj +'"';
  } else if (typeof obj === 'number') {
    stringified += obj.toString();
  } else if (typeof obj === 'boolean') {
    stringified += obj.toString();
  } else if (obj === null) {
    stringified += 'null';
  }
  else if(typeof obj === 'object') {
    if (Array.isArray(obj)) {
      stringified += '[';
      for (var i; i < obj.length; i++) {
        stringifyJSON(obj[i]);
        if (i < obj.length -1) {
          stringified += ',';
        }
      }
      stringified +=']';
    } else {
      stringified += '{';
      for (var key in obj) {
        stringifyJSON(key);
        stringified += ":";
        stringifyJSON(obj[key]);
        stringified += ",";
      }
      stringified.slice(0,-1);
      stringified += '}';
    }
  }
  return stringified;
};
