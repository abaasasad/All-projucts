function triangleType() {
  var sides = []
  sides.push(document.getElementById("A").value);
  sides.push(document.getElementById("B").value);
  sides.push(document.getElementById("C").value);

  var one = sides[0]
  var two = sides[1]
  var three = sides[2]

  if (one >= two + three || two >= one + three || three >= two + one) {
    output.innerHTML = ("This is NOT a triangle.");
  } else if (one === two && one !== three || one !== two && one === three || two === three && two !== one) {
    output.innerHTML = ("This is an isosceles triangle.");
  } else if (one === two && two === three) {
    output.innerHTML = ("This is an equilateral triangle.");
  } else if (one == two && one !== three && two !== three) {
    output.innerHTML = ("This is a scalene triangle.");
  }
}
