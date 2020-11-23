// 1. Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// ///Input               Output
//  "abc#d##c"           "ac"
// "abc##d######"      ""


//-------------------------------------------------------Method 1-----------------------

const BackSpace = (str) => {
  str = str.split("");

  for (i = 0; i < str.length; ) {
    if (str[i] == "#") {
      str.splice(i - 1, 2);
      i = i - 2;
    } else {
      i = i + 1;
    }
  }
  return str;
};
console.log(BackSpace("abc#d#c"));

//--------------------------------------------------------------- Method -2 ---------------------
const BackSpace = (str) => {
  let count = 0;
  let str2 = str.split("");
  str2.forEach((i) => i == "#" && count++);
  for (i = 0; i < count; i++) {
    let ind = str2.indexOf("#");
    str2.splice(ind - 1, 2);
  }
  return str2;
};

console.log(BackSpace("abc#d#c"));

//------------------------------------------------------------------- Method 3 ----------------------
const BackSpace = (str) => {
  let str2 = str.split("");
  str2.filter((i) => i == "#").forEach((i) => {
      let ind = str2.indexOf("#");
      str2.splice(ind - 1, 2);
    });
  return str2;
};
console.log(BackSpace("abc#d#c"));
