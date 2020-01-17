// Task 1.
function splitAndMerge(str, sp) {
  return str
    .split("")
    .filter(function(c) {
      return c != " ";
    })
    .join(sp);
}

// Task 2.
function convert(hash) {
  var newArray = [];
  for (key in hash) {
    newArray.push([key, hash[key]]);
  }
  return newArray;
}

// Task 3.
function toCamelCase(string) {
  var newArray = string.split(/[_-]/g);
  for (var i = 1; i < newArray.length; i++) {
    var firstLetter = newArray[i][0];
    newArray[i] = newArray[i].replace(firstLetter, firstLetter.toUpperCase());
  }
  return newArray.join("");
}

// Task 4
function reverse(string) {
  return string
    .split(" ")
    .map(function(word) {
      return word
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
}

// Task 5
function stringExpansion(string) {
  if (string === "") {
    return string;
  } else {
    var symbols = string.split("");
    var newArray = [];
    for (var i = 0; i < symbols.length; i++) {
      if (!parseInt(symbols[i])) {
        newArray.push(symbols[i]);
      } else {
        if (!parseInt(symbols[i + 1])) {
          var j = symbols[i];
          newArray.push(symbols[i + 1].repeat(j));
          i++;
        }
      }
    }
    return newArray.join("");
  }
}

// Version 2 (without for)
function stringExpansion(string) {
  var symbols = string.split("");
  var i = 0;
  var newArray = [];
  function processSingleChar() {
    i < symbols.length &&
      (!parseInt(symbols[i])
        ? (newArray.push(symbols[i]), i++, processSingleChar())
        : processMultipleChar());
  }
  function processMultipleChar() {
    i < symbols.length &&
      !parseInt(symbols[i + 1]) &&
      (newArray.push(symbols[i + 1].repeat(symbols[i])), i++),
      i++,
      processSingleChar();
  }
  processSingleChar();
  return newArray.join("");
}

// Task 6
function largest() {
  return Math.max.apply(null, arguments);
}

function smallest() {
  return Math.min.apply(null, arguments);
}

// Task 7
function transform(arr) {
  return arr.map(function(item) {
    return function() {
      return item;
    };
  });
}

// Task 8
function sum() {
  return Array.prototype.slice.call(arguments).reduce(function(sum, current) {
    return sum + current;
  }, 0);
}

// Task 9
function countDown(num) {
  setTimeout(function run() {
    if (num >= 0) {
      console.log(num--);
      setTimeout(run, 1000);
    }
  }, 1000);
}

// Task 10
Function.prototype.myBind = function(context) {
  var fn = this;
  var rest = Array.prototype.slice.call(arguments, 1);
  return function() {
    var args = Array.prototype.slice.call(arguments);
    return fn.apply(context, rest.concat(args));
  };
};
