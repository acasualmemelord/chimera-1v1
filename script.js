function submit(){
  var p1 = document.getElementById("p1").value;
  var i1 = document.getElementById("i1").value;
  var a1 = document.getElementById("a1").value;
  var e1 = document.getElementById("e1").value;
  var n1 = document.getElementById("n1").value;
  var m11 = document.getElementById("m11").value;
  var m21 = document.getElementById("m21").value;
  var m31 = document.getElementById("m31").value;
  var m41 = document.getElementById("m41").value;

  var p2 = document.getElementById("p2").value;
  var i2 = document.getElementById("i2").value;
  var a2 = document.getElementById("a2").value;
  var e2 = document.getElementById("e2").value;
  var n2 = document.getElementById("n2").value;
  var m12 = document.getElementById("m12").value;
  var m22 = document.getElementById("m22").value;
  var m32 = document.getElementById("m32").value;
  var m42 = document.getElementById("m42").value;

  var p3 = document.getElementById("p3").value;
  var i3 = document.getElementById("i3").value;
  var a3 = document.getElementById("a3").value;
  var e3 = document.getElementById("e3").value;
  var n3 = document.getElementById("n3").value;
  var m13 = document.getElementById("m13").value;
  var m23 = document.getElementById("m23").value;
  var m33 = document.getElementById("m33").value;
  var m43 = document.getElementById("m43").value;

  var p4 = document.getElementById("p4").value;
  var i4 = document.getElementById("i4").value;
  var a4 = document.getElementById("a4").value;
  var e4 = document.getElementById("e4").value;
  var n4 = document.getElementById("n4").value;
  var m14 = document.getElementById("m14").value;
  var m24 = document.getElementById("m24").value;
  var m34 = document.getElementById("m34").value;
  var m44 = document.getElementById("m44").value;

  var p5 = document.getElementById("p5").value;
  var i5 = document.getElementById("i5").value;
  var a5 = document.getElementById("a5").value;
  var e5 = document.getElementById("e5").value;
  var n5 = document.getElementById("n5").value;
  var m15 = document.getElementById("m15").value;
  var m25 = document.getElementById("m25").value;
  var m35 = document.getElementById("m35").value;
  var m45 = document.getElementById("m45").value;

  var p6 = document.getElementById("p6").value;
  var i6 = document.getElementById("i6").value;
  var a6 = document.getElementById("a6").value;
  var e6 = document.getElementById("e6").value;
  var n6 = document.getElementById("n6").value;
  var m16 = document.getElementById("m16").value;
  var m26 = document.getElementById("m26").value;
  var m36 = document.getElementById("m36").value;
  var m46 = document.getElementById("m46").value;

  document.getElementById("1").innerHTML = p1;
  document.getElementById("2").innerHTML = p2;
  document.getElementById("3").innerHTML = p3;
  document.getElementById("4").innerHTML = p4;
  document.getElementById("5").innerHTML = p5;
  document.getElementById("6").innerHTML = p6;

  document.getElementById("cp").innerHTML = document.getElementById("sortable").children[0].innerHTML;
  document.getElementById("ci").innerHTML = document.getElementById('i'+ document.getElementById("sortable").children[1].children[0].id).value;
  document.getElementById("ca").innerHTML = document.getElementById('a'+ document.getElementById("sortable").children[2].children[0].id).value;
  document.getElementById("ce").innerHTML = document.getElementById('e'+ document.getElementById("sortable").children[3].children[0].id).value;
  document.getElementById("cn").innerHTML = document.getElementById('n'+ document.getElementById("sortable").children[3].children[0].id).value;
  document.getElementById("cm1").innerHTML = document.getElementById('m1'+ document.getElementById("sortable").children[4].children[0].id).value;
  document.getElementById("cm2").innerHTML = document.getElementById('m2'+ document.getElementById("sortable").children[4].children[0].id).value;
  document.getElementById("cm3").innerHTML = document.getElementById('m3'+ document.getElementById("sortable").children[5].children[0].id).value;
  document.getElementById("cm4").innerHTML = document.getElementById('m4'+ document.getElementById("sortable").children[5].children[0].id).value;
}

function exportTeam(){
  document.getElementById("team").innerHTML = document.getElementById("p1").value + " @ " + document.getElementById("i1").value + "\nAbility: " + document.getElementById("a1").value + "\nEVs: " + document.getElementById("e1").value + "\n" + document.getElementById("n1").value + " Nature\n- " + document.getElementById("m11").value + "\n- " + document.getElementById("m21").value + "\n- " + document.getElementById("m31").value + "\n- " + document.getElementById("m41").value + "\n\n" +
                                              document.getElementById("p2").value + " @ " + document.getElementById("i2").value + "\nAbility: " + document.getElementById("a2").value + "\nEVs: " + document.getElementById("e2").value + "\n" + document.getElementById("n2").value + " Nature\n- " + document.getElementById("m12").value + "\n- " + document.getElementById("m22").value + "\n- " + document.getElementById("m32").value + "\n- " + document.getElementById("m42").value + "\n\n" +
                                              document.getElementById("p3").value + " @ " + document.getElementById("i3").value + "\nAbility: " + document.getElementById("a3").value + "\nEVs: " + document.getElementById("e3").value + "\n" + document.getElementById("n3").value + " Nature\n- " + document.getElementById("m13").value + "\n- " + document.getElementById("m23").value + "\n- " + document.getElementById("m33").value + "\n- " + document.getElementById("m43").value + "\n\n" +
                                              document.getElementById("p4").value + " @ " + document.getElementById("i4").value + "\nAbility: " + document.getElementById("a4").value + "\nEVs: " + document.getElementById("e4").value + "\n" + document.getElementById("n4").value + " Nature\n- " + document.getElementById("m14").value + "\n- " + document.getElementById("m24").value + "\n- " + document.getElementById("m34").value + "\n- " + document.getElementById("m44").value + "\n\n" +
                                              document.getElementById("p5").value + " @ " + document.getElementById("i5").value + "\nAbility: " + document.getElementById("a5").value + "\nEVs: " + document.getElementById("e5").value + "\n" + document.getElementById("n5").value + " Nature\n- " + document.getElementById("m15").value + "\n- " + document.getElementById("m25").value + "\n- " + document.getElementById("m35").value + "\n- " + document.getElementById("m45").value + "\n\n" +
                                              document.getElementById("p6").value + " @ " + document.getElementById("i6").value + "\nAbility: " + document.getElementById("a6").value + "\nEVs: " + document.getElementById("e6").value + "\n" + document.getElementById("n6").value + " Nature\n- " + document.getElementById("m16").value + "\n- " + document.getElementById("m26").value + "\n- " + document.getElementById("m36").value + "\n- " + document.getElementById("m46").value + "\n\n";
}

function exportOrder(){
  document.getElementById("order").innerHTML += "\n" + document.getElementById("sortable").children[0].innerHTML + " / " + document.getElementById("sortable").children[1].innerHTML + " / " + document.getElementById("sortable").children[2].innerHTML + " / " + document.getElementById("sortable").children[3].innerHTML + " / " + document.getElementById("sortable").children[4].innerHTML + " / " + document.getElementById("sortable").children[5].innerHTML;
}
