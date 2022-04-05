/* This is the title for your window tab, and your Radar */
document.title = "Cloud and Data Engineering (Q2 2022)";

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
		"quadrant"	: "Data Management",
		"left" 		: 45,
		"top" 		: 148,
        "color" 	: "#8FA227",
        "items" 	: 
				[ 			
					{"name":"Spark","pc":{"r": 30, "t": 140},"movement":"c"}
                ]
    },
    { 	
		"quadrant"	: "Data Storage",
		"left"		: 45,
		"top" 		: (h/2 + 250),
        "color" 	: "#DC6F1D",
        "items" 	: 
				[
					{ "name": "AWS S3","pc": {"r": 99,"t": 200 },"movement":"c"}
				]
    },
    { 	
		"quadrant"	: "BI and Data Visualization",
		"left"		: w-300-5,
		"top" 		: 148,
        "color" 	: "#587486",
        "items" 	: 
				[ 
					 { "name": "Tableau", "pc": {"r": 80,"t": 70 },"movement":"c"} 
                ]
    },
    { 	
		"quadrant"	: "Programming/Scripting languages",
        "color" 	: "#B70062",
		"left"  	: (w-330),
		"top" 		: (h/2 + 250),
        "items" 	: 
				[ 
					{ "name": "Python", "pc": {"r": 60,"t": 10 },"movement":"c"} 
				]
    }
];
