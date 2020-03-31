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

function exportTeam(){
  document.getElementById("team").innerHTML = document.getElementById("sortable").children[0].children[0].value + " @ " + document.getElementById("sortable").children[0].children[1].value +
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
  document.getElementById("order").innerHTML += "\n" + document.getElementById("chimeraName").value + ": " + document.getElementById("sortable").children[0].children[0].value + " / " + document.getElementById("sortable").children[1].children[0].value + " / " + document.getElementById("sortable").children[2].children[0].value + " / " + document.getElementById("sortable").children[3].children[0].value + " / " + document.getElementById("sortable").children[4].children[0].value + " / " + document.getElementById("sortable").children[5].children[0].value;
}
