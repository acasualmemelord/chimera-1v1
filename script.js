var chimeraNumber = 0;

function submit(){
  document.getElementById("cp").innerHTML = document.getElementById("sortable").children[0].children[0].value;
  document.getElementById("ci").innerHTML = document.getElementById("sortable").children[1].children[1].value;
  document.getElementById("ca").innerHTML = document.getElementById("sortable").children[2].children[2].value;
  document.getElementById("ce").innerHTML = document.getElementById("sortable").children[3].children[3].value;
  document.getElementById("cn").innerHTML = document.getElementById("sortable").children[3].children[4].value;
  document.getElementById("cm1").innerHTML = document.getElementById("sortable").children[4].children[5].value;
  document.getElementById("cm2").innerHTML = document.getElementById("sortable").children[4].children[6].value;
  document.getElementById("cm3").innerHTML = document.getElementById("sortable").children[5].children[7].value;
  document.getElementById("cm4").innerHTML = document.getElementById("sortable").children[5].children[8].value;

  document.getElementById("chimeraMon").src = "http://play.pokemonshowdown.com/sprites/xyani/" + document.getElementById("sortable").children[0].children[0].value.toLowerCase() + ".gif";
}

function importTeam(){
  var team = document.getElementById("paste").value.split("\n\n");
  var i = 0;
  for(var j = 0; j < 6; j ++){
    try{
      document.getElementById("sortable").children[j].children[0].value = team[j].substring(0, team[j].indexOf("@") - 1);
      i = team[j].indexOf("@") + 2;
      document.getElementById("sortable").children[j].children[1].value = team[j].substring(i, team[j].indexOf("\n") - 2);
      i = team[j].indexOf("\n") + 2;
      document.getElementById("sortable").children[j].children[2].value = team[j].substring(i + 8, team[j].indexOf("\n", i));
      i = team[j].indexOf("\n", i + 1) + 6;
      document.getElementById("sortable").children[j].children[3].value = team[j].substring(i, team[j].indexOf("\n", i));
      i = team[j].indexOf("\n", i + 1);
      document.getElementById("sortable").children[j].children[4].value = team[j].substring(i, team[j].indexOf("\n", i + 1) - 9);
      i = team[j].indexOf("\n", i + 1) + 3;
      document.getElementById("sortable").children[j].children[5].value = team[j].substring(i, team[j].indexOf("\n", i + 1));
      i = team[j].indexOf("\n", i + 1) + 3;
      document.getElementById("sortable").children[j].children[6].value = team[j].substring(i, team[j].indexOf("\n", i + 1));
      i = team[j].indexOf("\n", i + 1) + 3;
      document.getElementById("sortable").children[j].children[7].value = team[j].substring(i, team[j].indexOf("\n", i + 1));
      i = team[j].indexOf("\n", i + 1) + 3;
      document.getElementById("sortable").children[j].children[8].value = team[j].substring(i, team[j].indexOf("  ", i + 1));
    }catch(err){
      alert("Your team paste was found to be invalid. Perhaps a typo?")
      break;
    }
  }
}

function exportTeam(){
  document.getElementById("paste").value = document.getElementById("sortable").children[0].children[0].value + " @ " + document.getElementById("sortable").children[0].children[1].value +
                                              "\nAbility: " + document.getElementById("sortable").children[0].children[2].value +
                                              "\nEVs: " + document.getElementById("sortable").children[0].children[3].value +
                                              "\n" + document.getElementById("sortable").children[0].children[4].value +
                                              " Nature\n- " + document.getElementById("sortable").children[0].children[5].value +
                                              "\n- " + document.getElementById("sortable").children[0].children[6].value +
                                              "\n- " + document.getElementById("sortable").children[0].children[7].value +
                                              "\n- " + document.getElementById("sortable").children[0].children[8].value + "\n\n" +
                                              document.getElementById("sortable").children[1].children[0].value + " @ " + document.getElementById("sortable").children[1].children[1].value +
                                              "\nAbility: " + document.getElementById("sortable").children[1].children[2].value +
                                              "\nEVs: " + document.getElementById("sortable").children[1].children[3].value +
                                              "\n" + document.getElementById("sortable").children[1].children[4].value +
                                              " Nature\n- " + document.getElementById("sortable").children[1].children[5].value +
                                              "\n- " + document.getElementById("sortable").children[1].children[6].value +
                                              "\n- " + document.getElementById("sortable").children[1].children[7].value +
                                              "\n- " + document.getElementById("sortable").children[1].children[8].value + "\n\n" +
                                              document.getElementById("sortable").children[2].children[0].value + " @ " + document.getElementById("sortable").children[2].children[1].value +
                                              "\nAbility: " + document.getElementById("sortable").children[2].children[2].value +
                                              "\nEVs: " + document.getElementById("sortable").children[2].children[3].value +
                                              "\n" + document.getElementById("sortable").children[2].children[4].value +
                                              " Nature\n- " + document.getElementById("sortable").children[2].children[5].value +
                                              "\n- " + document.getElementById("sortable").children[2].children[6].value +
                                              "\n- " + document.getElementById("sortable").children[2].children[7].value +
                                              "\n- " + document.getElementById("sortable").children[2].children[8].value + "\n\n" +
                                              document.getElementById("sortable").children[3].children[0].value + " @ " + document.getElementById("sortable").children[3].children[1].value +
                                              "\nAbility: " + document.getElementById("sortable").children[3].children[2].value +
                                              "\nEVs: " + document.getElementById("sortable").children[3].children[3].value +
                                              "\n" + document.getElementById("sortable").children[3].children[4].value +
                                              " Nature\n- " + document.getElementById("sortable").children[3].children[5].value +
                                              "\n- " + document.getElementById("sortable").children[3].children[6].value +
                                              "\n- " + document.getElementById("sortable").children[3].children[7].value +
                                              "\n- " + document.getElementById("sortable").children[3].children[8].value + "\n\n" +
                                              document.getElementById("sortable").children[4].children[0].value + " @ " + document.getElementById("sortable").children[4].children[1].value +
                                              "\nAbility: " + document.getElementById("sortable").children[4].children[2].value +
                                              "\nEVs: " + document.getElementById("sortable").children[4].children[3].value +
                                              "\n" + document.getElementById("sortable").children[4].children[4].value +
                                              " Nature\n- " + document.getElementById("sortable").children[4].children[5].value +
                                              "\n- " + document.getElementById("sortable").children[4].children[6].value +
                                              "\n- " + document.getElementById("sortable").children[4].children[7].value +
                                              "\n- " + document.getElementById("sortable").children[4].children[8].value + "\n\n" +
                                              document.getElementById("sortable").children[5].children[0].value + " @ " + document.getElementById("sortable").children[5].children[1].value +
                                              "\nAbility: " + document.getElementById("sortable").children[5].children[2].value +
                                              "\nEVs: " + document.getElementById("sortable").children[5].children[3].value +
                                              "\n" + document.getElementById("sortable").children[5].children[4].value +
                                              " Nature\n- " + document.getElementById("sortable").children[5].children[5].value +
                                              "\n- " + document.getElementById("sortable").children[5].children[6].value +
                                              "\n- " + document.getElementById("sortable").children[5].children[7].value +
                                              "\n- " + document.getElementById("sortable").children[5].children[8].value;
}

function exportOrder(){
  chimeraNumber ++;
  document.getElementById("order").innerHTML += "\n" + ((document.getElementById("chimeraName").value === "") ? ("Chimera #" + chimeraNumber) : document.getElementById("chimeraName").value) + ": " +
                                                        document.getElementById("sortable").children[0].children[0].value + " / " +
                                                        document.getElementById("sortable").children[1].children[0].value + " / " +
                                                        document.getElementById("sortable").children[2].children[0].value + " / " +
                                                        document.getElementById("sortable").children[3].children[0].value + " / " +
                                                        document.getElementById("sortable").children[4].children[0].value + " / " +
                                                        document.getElementById("sortable").children[5].children[0].value;
}
