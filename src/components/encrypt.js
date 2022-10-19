function encrypter(string) {
  const fullArray = [
    " ",
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "K",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "W",
    "X",
    "Y",
    "Z",
    "k",
  ];
  var encryptedArray = [];
  var arr = [];
  var trimmedString = string.trim();
  for (let i = 0; i < trimmedString.length; i++) {
    arr.push(string[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < fullArray.length; j++) {
      if (arr[i] === fullArray[j]) {
        j++;
        var en = fullArray[j];
        encryptedArray.push(en);
      }
    }
  }
  return encryptedArray.join("");
}

export default encrypter;
