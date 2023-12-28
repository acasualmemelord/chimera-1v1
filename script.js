var chimeraNumber = 0;

function submit(){
	document.getElementById("cp").innerHTML = document.getElementById("sortable").children[0].children[0].value;
	document.getElementById("ci").innerHTML = document.getElementById("sortable").children[1].children[1].value;
	document.getElementById("ca").innerHTML = document.getElementById("sortable").children[2].children[2].value;
	document.getElementById("ct").innerHTML = document.getElementById("sortable").children[0].children[3].value;
	document.getElementById("ce").innerHTML = document.getElementById("sortable").children[3].children[4].value;
	document.getElementById("cn").innerHTML = document.getElementById("sortable").children[3].children[5].value;
	document.getElementById("cm1").innerHTML = document.getElementById("sortable").children[4].children[6].value;
	document.getElementById("cm2").innerHTML = document.getElementById("sortable").children[4].children[7].value;
	document.getElementById("cm3").innerHTML = document.getElementById("sortable").children[5].children[8].value;
	document.getElementById("cm4").innerHTML = document.getElementById("sortable").children[5].children[9].value;

	document.getElementById("chimeraMon").src = "http://play.pokemonshowdown.com/sprites/bw/" + document.getElementById("sortable").children[0].children[0].value.toLowerCase().replaceAll(" ", "") + ".png";
}

function importTeam(){
	var team = document.getElementById("teampaste").value.split("\n\n");
	var i = 0;
	for (var j = 0; j < 6; j ++) {
		try {
			document.getElementById("sortable").children[j].children[0].value = team[j].substring(0, team[j].indexOf("@") - 1);
			i = team[j].indexOf("@") + 2;
			document.getElementById("sortable").children[j].children[1].value = team[j].substring(i, team[j].indexOf("\n") - 2);
			i = team[j].indexOf("\n") + 2;
			document.getElementById("sortable").children[j].children[2].value = team[j].substring(i + 8, team[j].indexOf("\n", i));
			i = team[j].indexOf("\n", i + 1) + 12;
			document.getElementById("sortable").children[j].children[3].value = team[j].substring(i, team[j].indexOf("\n", i));
			i = team[j].indexOf("\n", i + 1) + 6;
			document.getElementById("sortable").children[j].children[4].value = team[j].substring(i, team[j].indexOf("\n", i));
			i = team[j].indexOf("\n", i + 1);
			document.getElementById("sortable").children[j].children[5].value = team[j].substring(i, team[j].indexOf("\n", i + 1) - 9);
			i = team[j].indexOf("\n", i + 1) + 3;
			document.getElementById("sortable").children[j].children[6].value = team[j].substring(i, team[j].indexOf("\n", i + 1));
			i = team[j].indexOf("\n", i + 1) + 3;
			document.getElementById("sortable").children[j].children[7].value = team[j].substring(i, team[j].indexOf("\n", i + 1));
			i = team[j].indexOf("\n", i + 1) + 3;
			document.getElementById("sortable").children[j].children[8].value = team[j].substring(i, team[j].indexOf("\n", i + 1));
			i = team[j].indexOf("\n", i + 1) + 3;
			document.getElementById("sortable").children[j].children[9].value = team[j].substring(i);
			submit();
		}catch(err){
			alert("Your team paste was found to be invalid. Perhaps a typo?")
			console.log(err);
			break;
		}
	}
}

function importSet(){
	var set = document.getElementById("setpaste").value;
	var i = 0;
	var j = parseInt(document.getElementById("importmon").value) - 1;
	try {
		document.getElementById("sortable").children[j].children[0].value = set.substring(0, set.indexOf("@") - 1);
		i = set.indexOf("@") + 2;
		document.getElementById("sortable").children[j].children[1].value = set.substring(i, set.indexOf("\n") - 2);
		i = set.indexOf("\n") + 2;
		document.getElementById("sortable").children[j].children[2].value = set.substring(i + 8, set.indexOf("\n", i));
		i = set.indexOf("\n", i + 1) + 12;
		document.getElementById("sortable").children[j].children[3].value = set.substring(i, set.indexOf("\n", i));
		i = set.indexOf("\n", i + 1) + 6;
		document.getElementById("sortable").children[j].children[4].value = set.substring(i, set.indexOf("\n", i));
		i = set.indexOf("\n", i + 1);
		document.getElementById("sortable").children[j].children[5].value = set.substring(i, set.indexOf("\n", i + 1) - 9);
		i = set.indexOf("\n", i + 1) + 3;
		document.getElementById("sortable").children[j].children[6].value = set.substring(i, set.indexOf("\n", i + 1));
		i = set.indexOf("\n", i + 1) + 3;
		document.getElementById("sortable").children[j].children[7].value = set.substring(i, set.indexOf("\n", i + 1));
		i = set.indexOf("\n", i + 1) + 3;
		document.getElementById("sortable").children[j].children[8].value = set.substring(i, set.indexOf("\n", i + 1));
		i = set.indexOf("\n", i + 1) + 3;
		document.getElementById("sortable").children[j].children[9].value = set.substring(i);
		submit();
	} catch(err) {
		alert("Your team paste was found to be invalid. Perhaps a typo?");
		console.log(err);
	}
}

function exportTeam(){
	document.getElementById("teampaste").value = document.getElementById("sortable").children[0].children[0].value + " @ " + document.getElementById("sortable").children[0].children[1].value +
												"\nAbility: " + document.getElementById("sortable").children[0].children[2].value +
												"\nTera Type: " + document.getElementById("sortable").children[0].children[3].value +
												"\nEVs: " + document.getElementById("sortable").children[0].children[4].value +
												"\n" + document.getElementById("sortable").children[0].children[5].value +
												" Nature\n- " + document.getElementById("sortable").children[0].children[6].value +
												"\n- " + document.getElementById("sortable").children[0].children[7].value +
												"\n- " + document.getElementById("sortable").children[0].children[8].value +
												"\n- " + document.getElementById("sortable").children[0].children[9].value + "\n\n" +
												document.getElementById("sortable").children[1].children[0].value + " @ " + document.getElementById("sortable").children[1].children[1].value +
												"\nAbility: " + document.getElementById("sortable").children[1].children[2].value +
												"\nTera Type: " + document.getElementById("sortable").children[1].children[3].value +
												"\nEVs: " + document.getElementById("sortable").children[1].children[4].value +
												"\n" + document.getElementById("sortable").children[1].children[5].value +
												" Nature\n- " + document.getElementById("sortable").children[1].children[6].value +
												"\n- " + document.getElementById("sortable").children[1].children[7].value +
												"\n- " + document.getElementById("sortable").children[1].children[8].value +
												"\n- " + document.getElementById("sortable").children[1].children[9].value + "\n\n" +
												document.getElementById("sortable").children[2].children[0].value + " @ " + document.getElementById("sortable").children[2].children[1].value +
												"\nAbility: " + document.getElementById("sortable").children[2].children[2].value +
												"\nTera Type: " + document.getElementById("sortable").children[2].children[3].value +
												"\nEVs: " + document.getElementById("sortable").children[2].children[4].value +
												"\n" + document.getElementById("sortable").children[2].children[5].value +
												" Nature\n- " + document.getElementById("sortable").children[2].children[6].value +
												"\n- " + document.getElementById("sortable").children[2].children[7].value +
												"\n- " + document.getElementById("sortable").children[2].children[8].value +
												"\n- " + document.getElementById("sortable").children[2].children[9].value + "\n\n" +
												document.getElementById("sortable").children[3].children[0].value + " @ " + document.getElementById("sortable").children[3].children[1].value +
												"\nAbility: " + document.getElementById("sortable").children[3].children[2].value +
												"\nTera Type: " + document.getElementById("sortable").children[3].children[3].value +
												"\nEVs: " + document.getElementById("sortable").children[3].children[4].value +
												"\n" + document.getElementById("sortable").children[3].children[5].value +
												" Nature\n- " + document.getElementById("sortable").children[3].children[6].value +
												"\n- " + document.getElementById("sortable").children[3].children[7].value +
												"\n- " + document.getElementById("sortable").children[3].children[8].value +
												"\n- " + document.getElementById("sortable").children[3].children[9].value + "\n\n" +
												document.getElementById("sortable").children[4].children[0].value + " @ " + document.getElementById("sortable").children[4].children[1].value +
												"\nAbility: " + document.getElementById("sortable").children[4].children[2].value +
												"\nTera Type: " + document.getElementById("sortable").children[4].children[3].value +
												"\nEVs: " + document.getElementById("sortable").children[4].children[4].value +
												"\n" + document.getElementById("sortable").children[4].children[5].value +
												" Nature\n- " + document.getElementById("sortable").children[4].children[6].value +
												"\n- " + document.getElementById("sortable").children[4].children[7].value +
												"\n- " + document.getElementById("sortable").children[4].children[8].value +
												"\n- " + document.getElementById("sortable").children[4].children[9].value + "\n\n" +
												document.getElementById("sortable").children[5].children[0].value + " @ " + document.getElementById("sortable").children[5].children[1].value +
												"\nAbility: " + document.getElementById("sortable").children[5].children[2].value +
												"\nTera Type: " + document.getElementById("sortable").children[5].children[3].value +
												"\nEVs: " + document.getElementById("sortable").children[5].children[4].value +
												"\n" + document.getElementById("sortable").children[5].children[5].value +
												" Nature\n- " + document.getElementById("sortable").children[5].children[6].value +
												"\n- " + document.getElementById("sortable").children[5].children[7].value +
												"\n- " + document.getElementById("sortable").children[5].children[8].value +
												"\n- " + document.getElementById("sortable").children[5].children[9].value + "\n\n"
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

function clear() {
	console.log(number);
	console.log(document.getElementById("sortable").children[number].children[0].value);
}