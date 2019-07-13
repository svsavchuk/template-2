function greeting(time) {
  if (time < 10) {
    return ("good morning");
  } else if (time < 20) {
    return ("good day");
  } else {
    return("good evening");
  }
};


function colorCode(color) {
  if (color == 1) {
    return "red";
  } else if (color == 2) {
    return ("blue");
  } else {
    return ("other color")
  }
}

var originalArr = [1,2,3]
var resultArr = [];
function double(array) {
  for (var i = 0; i < array.length; i++) {
    resultArr.push(array[i]*2);
  }
  return resultArr;
}

arr = []
function createList(number) {
for (var i = number; i > 0; i--) {
  arr.push(i);
}
return arr;
}

var arr = [];
var counter = 0;

while (counter < 10) {
  arr.push(counter);
  counter++;
}

for (var i = 0; i<arr.length; i++) {
  if (arr[i] === 55) {
    break;
  }
  arr[i] = arr[i]-1;
}

var result = [];
for (i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    result.push(i);

function greet(name) {
  name = name || "Your name here";
  console.log("hello "+name);
}
