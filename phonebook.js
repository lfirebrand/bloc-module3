var phoneBook = [
  {
    name: "Jenny",
    number: 4028675309,
  },
  {
    name: "Barack",
    number: 4021234567,
  },
  {
    name: "Lexi",
    number: 4026174510
  }
];

function findNumber(name, phonenumber) {
  for (var i=0; i < phoneBook.length; i++) {
    if (phoneBook.name[i] == name || phoneBook.number[i] == phonenumber) {
      return name + " can be reached at " + phonenumber;
  }
    return "Entry not found";
  }
}

findNumber("Barack", "");
