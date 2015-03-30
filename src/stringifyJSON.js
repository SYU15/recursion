// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"'+ obj +'"';
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'undefined') {
    return;
  } else if (typeof obj === 'function') {
    return;
  }
  else if(typeof obj === 'object') {
    var stringified = '';
    if (Array.isArray(obj)) {
      stringified += '[';
      for (var i = 0; i < obj.length; i++) {
        stringified += stringifyJSON(obj[i]) + ',';
        // if (i < obj.length -1) {
        //   stringified += ',';
        // }
      }
      if (obj.length > 0) {
      stringified = stringified.slice(0,-1);
      }
      stringified +=']';
    } else {
      stringified += '{';
      for (var key in obj) {
        if (typeof obj[key] != 'function' && typeof obj[key] != 'undefined') {
        stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      if (stringified.length > 1) {
        stringified = stringified.slice(0,-1);
      }
      stringified += '}';
    }
    return stringified;
  }
};
