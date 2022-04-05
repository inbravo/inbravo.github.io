/* This is the title for your window tab, and your Radar */
document.title = "Cloud and Data Engineering (Q2 2022)";

/* This is the concentic circles that want on your radar */
var radar_arcs = [
  {'r': 100, 'name': 'ADOPT'},
  {'r': 200, 'name': 'TRIAL'},
  {'r': 300, 'name': 'ASSESS'},
  {'r': 400, 'name': 'HOLD'}
];

var h = 1000;
var w = 1200;

/* 
r = Radius in pixels (After 100 pixel another level starts-ADOPT/TRIAL/ASSESS/HOLD)
t = Theta in Degreees (0 to 90 degree for first quadrant)
anti-clockwise direction. 
*/
var radar_data = [
    {   
		"quadrant"	: "Data Transformation & Engineering",
        "left" 		: 45,
        "top" 		: 18,
        "color" 	: "#8FA227",
        "items" 	: 
				[ 	
					/* ADOPT */
					{"name":"Spark","pc":{"r": 20, "t": 120},"movement":"c"},
					{"name":"AWS Redshift","pc":{"r": 30, "t": 140},"movement":"c"},
					{"name":"Databricks","pc":{"r": 40, "t": 125},"movement":"c"},
					{"name":"AWS EMR","pc":{"r": 50, "t": 130},"movement":"c"},
					{"name":"AWS Athena", "pc":{"r":60,"t":150},"movement":"c"},   
					{"name":"AWS Glue","pc":{"r": 70, "t": 160},"movement":"c"},
					{"name":"GCP BigQuery","pc":{"r": 80, "t": 165},"movement":"c"},
					{"name":"GCP DataProc","pc":{"r": 90, "t": 170},"movement":"c"},
					{"name":"Airflow", "pc":{"r":90,"t":100},"movement":"c"},   
					
					/* TRIAL */
					{"name":"Snowflake", "pc":{"r":150,"t":150},"movement":"c"}, 
					{"name":"Azure Sypanse", "pc":{"r":170,"t":150},"movement":"c"},   
					
					/* ASSESS */
					{"name":"AWS Kinesis", "pc": { "r": 230, "t": 133 }, "movement": "c" },
					
					/* HOLD */
					{"name":"Apache Hadoop", "pc": { "r": 310, "t": 133 }, "movement": "c" },
					{"name":"Apache Hive", "pc": { "r": 330, "t": 143 }, "movement": "c" },
					{"name":"Apache Yarn", "pc": { "r": 360, "t": 153 }, "movement": "c" }
                ]
    },
    { 	
		"quadrant"	: "Programming & Scripting Languages",
        "left"		: w-300,
        "top" 		: 18,
        "color" 	: "#587486",
        "items" 	: 
				[
					/* ADOPT */
					{"name":"R", "pc": { "r": 40, "t": 70 }, "movement": "c" },
					{"name":"SQL", "pc": { "r": 50, "t": 70 }, "movement": "c" },
					{"name":"Python", "pc": { "r": 60, "t": 70 }, "movement": "c" },
					{"name":"Scala", "pc": { "r": 70, "t": 70 }, "movement": "c" },
					{"name":"Java", "pc": { "r": 90, "t": 70 }, "movement": "c" },
					
					
					/* TRIAL */
					{ name: "Julia", pc: { r: 170, t: 19 }, movement: "c" },
					
					/* ASSESS */
					{ name: "JavaScript", pc: { r: 280, t: 74 }, movement: "c" },  
					  
					/* HOLD */
				    { name: "Perl", pc: { r: 310, t: 50 }, movement: "c" },
					{ name: "Swift", pc: { r: 330, t: 60 }, movement: "c" },
					{ name: "C/C++", pc: { r: 380, t: 70 }, movement: "c" },
				]
    },
    { 	
		"quadrant"	: "Data Store",
        "left" 		: 45,
        "top" 		: (h/2 + 100),
        "color" 	: "#DC6F1D",
        "items" 	: 
				[ 
					/* Should stay between Theeta 270-360 */
					/*{ "name": "AWS S3","pc": {"r": 99,"t": 200 },"movement":"c"}*/
                ]
    },
    { 	
		"quadrant"	: "BI & Data Visualization",
        "left"  	: (w-200),
        "top" 		: (h/2 + 100),
		"color" 	: "#B70062",
        "items" 	: 
				[ 
					/* Should stay between Theeta 360-90 */
					/* { "name": "Python", "pc": {"r": 60,"t": 10 },"movement":"c"} */
				]
    }
];
