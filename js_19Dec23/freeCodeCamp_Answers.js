// Golf
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if ((strokes = 1)) return names[0];
  else if (strokes - par <= -2) return names[1];
  else if (strokes - par === -1) return names[2];
  else if (strokes === par) return names[3];
  else if (strokes - par === 1) return names[4];
  else if (strokes - par === 2) return names[5];
  else return names[6];
}

console.log(golfScore(5, 4));
// End

// Card Count
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
// End

// Dunno
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  return result;
}

phoneticLookup("charlie");
// End

// Testing Objects for Properties
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
// End

// Next?
