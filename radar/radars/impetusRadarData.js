/* This is the title for your window tab, and your Radar */
document.title = "Disruptions in Finance (January 2017)";

/* This is the concentic circles that want on your radar */
var radar_arcs = [
  {'r': 100, 'name': 'ADOPT'},
  {'r': 200, 'name': 'TRIAL'},
  {'r': 300, 'name': 'ASSESS'},
  {'r': 400, 'name': 'HOLD'}
];

var h = 900;
var w = 1350;

var radar_data = [
    {   
		"quadrant"	: "Artificial Intelligence & Deep Learning",
		"left" 		: 45,
		"top" 		: 148,
        "color" 	: "#8FA227",
        "items" 	: 
				[ 			
					{"name":"NLP","pc":{"r": 99, "t": 120},"movement":"c"},
					{"name":"Deep Learning","pc":{"r":160,"t":165},"movement":"c"},    
					{"name":"Cognitive Computing", "pc":{"r":175,"t":145},"movement":"c"}
                ]
    },
    { 	
		"quadrant"	: "Distributed Ledger & Smart Contracts",
		"left"		: 45,
		"top" 		: (h/2 + 250),
        "color" 	: "#DC6F1D",
        "items" 	: 
				[
					{ "name": "Ethereum","pc": {"r": 99,"t": 200 },"movement":"c"},
					{ "name": "Open Chain","pc": {"r": 105,"t": 240 },"movement":"c"},
					{ "name": "Hyper Ledger", "pc": {"r": 150,"t": 230 },"movement":"c"},
					{ "name": "Smart Contracts","pc": {"r": 280,"t": 200 },"movement":"c"}
				]
    },
    { 	
		"quadrant"	: "Internet of Everything",
		"left"		: w-300-5,
		"top" 		: 148,
        "color" 	: "#587486",
        "items" 	: 
				[ 
					{ "name": 'Bluetooth Low Energy', "pc": {"r": 80,"t": 70 },"movement":"c"},
					{ "name": 'Near Field Communication',"pc": {"r": 60,"t": 30 },"movement":"c"},
					{ "name": 'IoT platforms and Standards',"pc": {"r": 120,"t": 50 },"movement":"c"},
					{ "name": 'Augmented Reality',"pc": {"r": 130,"t": 70 },"movement":"c"}
                ]
    },
    { 	
		"quadrant"	: "Microservices & Simplified Infrastructure",
        "color" 	: "#B70062",
		"left"  	: (w-330),
		"top" 		: (h/2 + 250),
        "items" 	: 
				[ 
					{"name":"Prescriptive and Cognitive API", "pc":{"r":230,"t":300},"movement":"c"},  
					{"name":"Self Service BI", "pc":{"r":150,"t":340},"movement":"c"},
					{"name":"Self Service IT", "pc":{"r":160,"t":330},"movement":"c"},
					{"name":"Data Democratization", "pc":{"r":190,"t":330},"movement":"c"}, 
					{"name":"API Gateways","pc": {"r": 60,"t": 290 },"movement": "c" },
					{"name":"API Platforms","pc": {"r": 40,"t": 310 },"movement": "c" },
					{"name":"Cloud Infrastructure", "pc": { "r": 90, "t": 310 },  "movement": "c" }
				]
    }
];
