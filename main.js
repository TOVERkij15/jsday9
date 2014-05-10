var question = prompt("Do you like Game of Thrones? Spoiler Alerts everywhere.");
	if (question == "yes") {
		prompt("Good! We will get along just fine.");
	} else if (question == "no") {
		prompt("What the hell is wrong with you?");
	}


var casts =["arya","jSnow","tryion","daenerys","joffrey","robb"]
//this is an array showing the casts of the characters.  If you simply enter in "var casts" into the console, the list of names will come up.//


//nesting//

var hbo ={
	shows:[
	{name:"got",hours:[45,45,45]},
	{name:"that 70's show",hours:[21,21,21]},
	{name: "gilmore girls",hours:[47,47,47]}
	]
};

hbo.shows.forEach(function(hours){
	console.log(hours);
});

 
var arya ={
	direwolf:"Nymeria",
	sword: {
		needle: "a gift from jon snow",
	},
	
	house: "stark",
	seasons:[1,2,3,4],
	status:"alive",
	talk: function(){
		alert("Joffrey,Ser Amory Lorch,The Tickler,polliver, Ser Gregor, Weese, Chiswych, The Hound...");
	}
};

arya.seasons.forEach(function(season){		
	console.log(season);
});


var jSnow ={
	direwolf:"ghost",
	seasons:[1,2,3,4],
	house: "night's watch",
	status:"alive",
	talk: function(){
			alert("that's a big wall!");
	},
};

jSnow.seasons.forEach(function(season){
	console.log(season);
});



var tryion ={
	nickname: "the imp",
	house: "house lannister",
	seasons:[1,2,3,4],
	status:"alive",
	married:"Sansa stark",
	talk: function(){
		alert("My brother has his sword, King Robert has his warhammer and I have my mind...and a mind needs books as a sword needs a whetstone if it is to keep its edge.");
	},
};	

	tryion.seasons.forEach(function(season){
		console.log(season);
});

var daenerys ={
	nickname: "Mother of dragons",
	house: "house targaryen",
	seasons:[1,2,3,4],
	status:"alive",
	future: "owns the right to that throne!",
	talk: function(){
	alert("A man who fights for gold can't afford to lose to a girl.");
	
	},
};

	daenerys.seasons.forEach(function(season){
		console.log(season);
});


var joffrey ={
	title: "he deserves no title!",
	house: "house baratheon",
	status:"ummm....",
	kills:[5,7,7],
	talk: function(){
		alert("Traitors! I'll have their heads!");
	},

};

	joffrey.kills.forEach(function(season){
		console.log(season);
});

var robb ={
	house: "stark",
	status: "may he rest in peace",
	married: "Talisa Stasrk",
	titles:["kind of the north,the trident"],
	talk: function(){
		alert("avoid all GOT weddings!");
	}
};
   

	robb.titles.forEach(function(season){
		console.log(season);
	});



var starkLadies = ["arya","sansa","catelyn","talisa"].map (function(starkLadies){
	return ( starkLadies + "house stark");
});

var bran ={
	house:"stark",
	direwolf:"summer",
	powers: ["warg,has greensight"],
	from: "winterfell",
	dreams:"prophetic",
	legs:"lost ability",
	seasons:4



};
	bran.powers.forEach(function(season){
		console.log(season);
	});


var hodor ={
	from: "winterfell",
	roles: ["aid to bran", "servant"],
	seasons:4,
	mind:"simple"

};

	var hodor =["servant","aid to bran"].map(function(role){
		return role + "HODOR!";
	});

var theon ={
	from:"iron islands",
	prisoner:"reek",
	born: ["pike","raised by starks"],
	heir: "lord balon grejoy"
};
 

var theon =["lord balon","grejoy"].map(function(hateful){
	return hateful + "I deserve torture";
});



var margaery ={
	from: "the reach",
	seasons: [2,3,4],
	queen: "joffrey",
	maidenname: "tyrell"
};

var margaery =[2,3,4].map(function(season){
	return season + "seasons";
});


var cersei ={
	widow: "robert baratheon",
	mother: "joffrey and more",
	raised: "casterly rock",
	roles:["queen" ,"regent of seven kingdoms"]

};

var cersei =["queen","regent of seven kingdoms"].map(function(power){
	return power+ "I am a terrible person.";
});

var petyr ={
	owns: "brothels in kings landing",
	nickname:"littlefinger",
	master:["coin","small council"],
	lord: "of harrenhol"
};

var petyr =["coin","small council"].map(function(fault){
	return fault+ "manipulator";
});

var stannis ={
	lord: "of dragonshore",
	claimed: "iron throne",
	heir: "rightful baratheon",
	seasons:[2,3,4],
	house: "baratheon"
};

var stannis =["2,3,4"].map(function(season){
	return season + "stop trusting melisandre";
});



//this is a list of the eight houses/objects. will apply to the next function using forEach.//


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
//copy the above forEach into your console and the lists will appear//

var seasons =[
	{season: "one"},
	{season: "two"},
	{season: "three"},
	{season: "four"}
];

seasons.map(function(series){
	return series.season;
});

//Like the forEach listed above, this is using the map function to show the number of seasons//



/*The Different ways to say how many seasons there are*/

[1,2,3,4].pop()

function pop (one){
	var x={"best":true};
	return one.slice (0.4)
};

var ratings =[
	{GOT: 7.2},
	{SiliconValley: 1.8},
	{Veep: 1.4}

];

var numbers	=[0.4,0.8,6.2].map(function(x){
		return x +1.000000;
	});

	/*return 1.4,1.8,7.2 */

	[0.4,0.8,6.2].map(function(x){
		return{ratings: x+1.000000}
	});

//shows the amount of books for using forEach//

var books=[3].forEach (function(x){
	console.log(x * x);
});



//different ways to calculate using reduce//
var add =[1,2,3,4,5,6].reduce(function(x,y){
	return x+y;
});

var subtract =[1,2,3,4,5,6].reduce(function(x,y){
	return x-y;
});

var multiply =[1,2,3,4,5,6].reduce(function(x,y){
	return x*y;
});

var divide=[1,2,3,4,5,6].reduce(function(x,y){
	return x/y;
});

var add2=[1,2,3,4,5,6].reduce(function(x,y){
	return x+100+y;
});

/*var GeorgeRRMartin ={
	role: "author of the books",
	status:"alive for now!",
	var author = ["awesome writer, kills too many starks"].reduce(function(c,m){
		return c+m;
console.log(GeorgeRRMartin + "write more");
});*/




var Sansa = ["worst luck","forced to grow up"].reduce 
	(function(w,q){
		return w + q;
	console.log ( Sansa + "should kill Cersei");
});




var theHound =["dogface","huge","asskicker"].reduce (function(b,g){
	return b+g;
	console.log(thehound + "He will fight you!");
});




var theImp =["smart","hand of the king"].reduce(function(c,d){
	return c+d;
	console.log(theImp + "Best character in the show!");
 });




var Ned =["died so soon","off with his head"].reduce
	(function(a,b){
		
	return a+b;

	console	.log (Ned + "thanks alot joffrey.");
});























