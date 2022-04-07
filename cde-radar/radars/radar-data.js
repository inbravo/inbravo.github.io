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
					{"name":"Apache Spark","pc":{"r": 20, "t": 120},"movement":"c"},
					{"name":"AWS Redshift","pc":{"r": 30, "t": 140},"movement":"c"},
					{"name":"Databricks","pc":{"r": 40, "t": 125},"movement":"c"},
					{"name":"AWS EMR","pc":{"r": 50, "t": 130},"movement":"c"},
					{"name":"AWS Athena", "pc":{"r":60,"t":150},"movement":"c"},   
					{"name":"AWS Glue","pc":{"r": 70, "t": 160},"movement":"c"},
					{"name":"GCP BigQuery","pc":{"r": 80, "t": 165},"movement":"c"},
					{"name":"GCP DataProc","pc":{"r": 90, "t": 170},"movement":"c"},
					{"name":"Apache Airflow", "pc":{"r":90,"t":100},"movement":"c"},   
					
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
		"quadrant"	: "Data Storage",
        "left" 		: 45,
        "top" 		: (h/2 + 100),
        "color" 	: "#DC6F1D",
        "items" 	: 
				[ 
					/* ADOPT */
					{ "name": "AWS S3","pc": {"r": 40,"t": 200 },"movement":"c"},
					{ "name": "AWS DynamoDB", "pc": {"r": 50,"t": 260},"movement":"c"}, 
					{ "name": "Elastic Search", "pc": {"r": 60,"t": 230},"movement":"c"},
					{ "name": "Azure Blob Storage", "pc": {"r": 70,"t": 190},"movement":"c"},
					{ "name": "PostgreSQL", "pc": {"r": 80,"t": 215},"movement":"c"},    
					
					/* TRIAL */
					{ "name": "Google Cloud Storage (GCS)", "pc":{"r": 110,"t": 210},"movement":"c"},  

					/* ASSESS */
					{ "name": "Google Bigtable", "pc": {"r": 210,"t": 210},"movement":"c"},  

					/* HOLD */
					{ "name": "Oracle DB", "pc": {"r":310,"t":210},"movement":"c"},
					{ "name": "MySQL", "pc": {"r":320,"t":220},"movement":"c"},
					{ "name": "HBase", "pc": {"r":330,"t":230},"movement":"c"},
					{ "name": "IBM DB2", "pc": {"r":340,"t":240},"movement":"c"}					
                ]
    },
    { 	
		"quadrant"	: "BI & Data Visualization",
        "left"  	: (w-200),
        "top" 		: (h/2 + 100),
		"color" 	: "#B70062",
        "items" 	: 
				[ 
					/* ADOPT */
					{ "name": "Tableau", "pc": {"r": 20,"t": 290 },"movement":"c"}, 
					{ "name": "Power BI", "pc": {"r": 40,"t": 310 },"movement":"c"}, 
					{ "name": "AWS Quicksight", "pc": {"r": 60,"t": 320 },"movement":"c"},
					{ "name": "Microstrategy", "pc": {"r": 70,"t": 290},"movement":"c"},
					{ "name": "Qlik", "pc": {"r": 80,"t": 280},"movement":"c"},
										
					/* TRIAL */
					{ "name": "Looker", "pc":{"r": 110,"t": 300},"movement":"c"},  
					
					/* ASSESS */
					{ "name": "Domo", "pc": {"r": 210,"t": 310},"movement":"c"},  
					
					/* HOLD */
					{ "name": "Oracle OBIEE", "pc": {"r": 320,"t": 290},"movement":"c"},
					{ "name": "Tibco Spotfire", "pc": {"r": 350,"t": 290},"movement":"c"}
				]
    }
];
