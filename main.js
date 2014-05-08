console.log("tasha");


var question = prompt("Do you like Game of Thrones? Spoiler Alerts everywhere.");
	if (question == "yes") {
		prompt("Good! We will get along just fine.");
	} else if (question !== "no") {
		prompt("What the hell is wrong with you?")
	}
/*ask about*/

var casts =["arya","jSnow","tryion","daenerys","joffrey","robb"];



var arya ={
	direwolf:"Nymeria",
	sword: {
		needle: "a gift from job snow",
	},
	
	house: "stark",
	seasons:4,
	status:"alive",
	talk: function(){
		alert("Joffrey,Ser Amory Lorch,The Tickler,polliver, Ser Gregor, Weese, Chiswych, The Hound...");
	}
};

var jSnow ={
	direwolf:"ghost",
	seasons:4,
	house: "night's watch",
	status:"alive",
	talk: function(){
			alert("that's a big wall!");
	}
};

var tryion ={
	nickname: "the imp",
	house: "house lannister",
	seasons:4,
	status:"alive",
	married:"Sansa stark",
	talk: function(){
		alert("My brother has his sword, King Robert has his warhammer and I have my mind...and a mind needs books as a sword needs a whetstone if it is to keep its edge.");
	}
};	

var daenerys ={
	nickname: "Mother of dragons",
	house: "house targaryen",
	seasons:4,
	status:"alive",
	future: "owns the right to that throne!",
	talk: function(){
		alert("A man who fights for gold can't afford to lose to a girl.");
	}
};

var joffrey ={
	title: "he deserves no title!",
	house: "house baratheon",
	status:"ummm....",
	talk: function(){
		alert("Traitors! I'll have their heads!");
	}

};

var robb ={
	house: "stark",
	status: "may he rest in peace",
	married: "Talisa Stark",
	talk: function(){
		alert("avoid all GOT weddings!");
	}
};


/*this is a list of house for the next function*/
var houses=[
	{name: "Arryn"},
	{name: "Baratheon"},
	{name: "Bolton"},
	{name: "frey"},
	{name: "Greyjoy"},
	{name: "Lannister"},
	{name: "Martell"},
	{name: "stark"},
	{name: "Targaryen"},
	{name: "Tully"},
	{name: "Tyrell"},
	{name: "Watch"}
];

houses.forEach(function(house){
	console.log(house.name);
})
/*The list will show up*/

var seasons =[
	{season: "one"},
	{season: "two"},
	{season: "three"},
	{season: "four"}
];

seasons.map(function(series){
	return series.season;
});

/*The list will show the number of seasons*/


/*[1,2,3,4].map(function(x) {
	return x +
}


