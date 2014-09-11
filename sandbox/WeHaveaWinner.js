
var WeHaveaWinner = function(green, turquise) {
	
	this.svgObject = new LudoSVG("weHaveaWinner");
	this.svg       = undefined;
	this.group     = undefined;
	
	// colors
	this.blackColor = "#000000";
	this.greenColor = green || "#4FA900";
	this.turquiseColor = turquise || "#2AFFDE";
	
	// black paths
	this.bp1={o:"path", t:"M281,518v1.334l-34.667-6l-0.667-116l-15,109.666l-5.785,3.772l-31.434-11.105l-10.448-74L173.333,488L171,489.667l-29.587-12.333l-29.246-181.667l33.459,1.692l6.084,4.308L159.042,354l10.646-56l29.373,2.06l7.616,6.274l6.561,59.333l9.598-65L254,301v2c0,0,2.667-2.333,8-2.333s19.71,6.333,19.667,28.667c-0.035,17.694-11.053,26.506-19.72,26.506S252,352.667,252,352.667L251,356l28.729,2L310,359.001V363c0,0,3.667-7.332,17.333-6.999s33.667,16.333,34,67.333s0,97.666,0,97.666H327c0,0,2-83.333,0.667-100.666s-1.02-22.333-7.01-22S313,418.001,313,425.001S314,522,314,522L281,518z"};
	this.bp2={o:"path", t:"M565,334c0,0-10.33-5-20,3.67l-29.67,5.66l-0.33,25c0,0-4.052-27.302-34-22c-24.5,4.337-37,30-37.33,40.67c0,0-5.336-32.333-32-33c-9.689-0.242-17.67,8-17.67,8l-1.33-4.67L363,359v158l3.67,4l30-2.67c0,0-0.34-88,0-96.66C397,413,401.468,395.234,407,398c3,1.5,2.1,5,2.46,27c0.37,22,0.54,89,0.54,89l5,2l29-7l1-39c0,0,2,24.67,25.67,29.33C494.33,504,517,475.67,517,475.67V478l3.33,2L548,465.67V399c0,0-1-33.67,20-29l1-32L565,334z M485,381.67c6-1,7.32,16.33,7.32,16.33l-18.65,4.33C473.67,402.33,479,382.67,485,381.67z M518,468l-4.67-29l-2.66-2.33c0,0-20.34,23-28.67,23s-9-20.68-9-20.68l45-13.32V468z"};
	this.bp3={o:"path", t:"M644.25,216.5c0-28.5-24-49.25-36.25-51s-26.25,3.75-26.25,3.75L588.5,197l5.25,1.5c0,0,4.17-5.08,9.58-4.5c4.95,0.53,8.17,7.5,8.17,7.5c-45,4-34.08,45.06-24.25,59.25c9.25,13.35,32,11,32,11l0.29,1.2L649,276.1C647,272.71,644.25,245,644.25,216.5z M613.54,242.83c0,0-3.71,0.84-3.21-7.83s2.5-7.17,4.84-5.33C615.17,229.67,615.92,240.33,613.54,242.83z"};
	this.bp4={o:"path", t:"M523.67,122.33c-21.36-3.23-29.84,20.23-30.32,21.61l6.65-28.61l-29.67-8l-13.66,66l-13.34-72c0,0-31.33-7.33-32.33-6c-0.97,1.3,1.37,15.19,1.65,16.6c-0.681-2.35-23.65-48.26-66.82-2.6l8.09,42.67c0,0,33.747-47,35.37-6.33c0,0-19.93-0.8-32.6,18.95c-3.71,5.79-7.54,13.34-9.69,23.19V37l-3-3h-31l0.33,84L285,119.67l-0.67-80l-5.36-3.17L251,42v210l1.33,7h28.39l2.28-5v-90l30-2.33V252l1.67,6.01l30,0.07l2.33-4.98l-0.28-29.72C349.667,274.65,391,256.1,391,256.1v1.9h26.667l3.333-5l-1.67-103.33L438.67,255l4.983,2.247l25.017,0.243l17.311-78.7c-0.181,2.28-5.91,36.35,5.05,60.52c9.31,20.52,33.794,40.69,68.3,16.69L555,221.67c0,0-34.67,26-38-18.67l42.33,11.33l2-2.66C561.33,211.67,572.89,129.79,523.67,122.33z M383.33,215.33c-6.33,12-10-1-8.33-15s4.33-18.66,11-16.66C386,183.67,389.67,203.33,383.33,215.33z M516,169c0,0,5.667-30,14.67,4L516,169z"};
	this.bp5={o:"path", t:"M184.52,107.41c-19.52,0.09-31.735,21.645-31.895,22.444l9.705-55.825l-7.63-1.76l-30.71,16.96l-9.52,62.91l-7.12-46.12l-7.92-2.46l-25.44,17.55l-9.36,52.57l-7.23-32.69l-6.51-1.17L24.74,163.8l26.15,110.85l31.24-2.51l8.36-53.07l8.53,51.44l34.36-1.76l7.23-55.2c0,0,9.724,83.117,82.49,36.41l-7.56-46.84c0,0-38.111,44.914-42.64,2.11l51.54-9.61C224.44,195.62,232.003,107.191,184.52,107.41z M188.61,163.21l-18.12,3.8c0,0,4.67-21.05,11.69-21.05S188.61,163.21,188.61,163.21z"};
	this.blacksObject = {g:"blacks", a:new Array(this.bp1, this.bp2, this.bp3, this.bp4, this.bp5)};

	// green paths
	this.gp1 ={o:"path", t:"M113.25,297.667L142.371,300l12.596,86.334l14.356-85l27.338,2L209.23,400l14.685-96L252,304.667V309c0,0,3.667-4.667,9-4s16.667,8.666,15.333,24s-10,23.667-18,22.667s-11-9-11-9l-25,163.333l-27.488-8.333L182,401.834l-14.333,83.833l-25.254-10.333L113.25,297.667z"};
	this.gp2 ={o:"poly", t:"246,358.334 275.167,360.667 273.691,516 247,511.667 "};
	this.gp3 ={o:"path", t:"M281,361.5l1.333,155.084l28.333,2.708c0,0-1.667-90.312,0-102.312s5.333-19.324,11-19.324s9.333,9.506,9.667,27.506s0,93.838,0,93.838H360c0,0-0.334-78.999,0-94.666s-2.306-65-35.333-65c-11.667,0-16.333,9-16.333,9l-0.667-6L281,361.5z"};
	this.gp4 ={o:"path", t:"M546.67,342l-26,5.33l-0.34,48.34c0,0-6.14-49.57-32.04-46c-21.79,3-43.79,23.97-44.62,72.33c0,0,0.6-62.8-30.37-64c-17.3-0.67-20.97,10-20.97,10l-0.66-6.33L366,363v156l29-3c0,0-0.67-84.33,0-95.67C395.67,409,401.67,394,406,394s10,6,9.67,28l0.01,91l27.32-5.67l1.67-73.66c0,0-0.6,52.05,27,61.66c22,7.67,44.66-22,44.66-22l-5-33.021c0,0-14.811,24.851-29.33,22.021c-12-2.33-10.67-24.66-10.67-24.66L518.5,423c0,0,1.5-11,1.5-20.67V476l1.67,1.33l24.66-12.66c0,0-0.5-54.34-0.16-62.34c0.33-8,2.83-37.33,20.83-34V338C567,338,554.33,334,546.67,342z M473,405c0,0,4.67-24,12.67-23.67c8,0.34,8.65,19,8.65,19L473,405z"};
	this.gp5 ={o:"path", t:"M645.17,270.83c-2.67-7.5-1.17-55.33-1.17-55.33c-5.17-39-31.83-48.83-40.17-49.17c-8.33-0.33-15.5,2.5-15.5,2.5l5.84,25.84c23-9.84,25.33,10,25.33,10s-13.67-7.67-26.67,4.66c-17.2,16.32-4.33,52.25,8,55.67c13.95,3.87,21.5,0.5,21.5,0.5l-0.33,2.67L645.17,270.83z M619.67,238.67c-0.5,2.16-3.84,5.83-7.34,4c-2.91-1.53-4.66-12.34-0.16-15.17s7.5,1.33,7.5,1.33S620.17,236.5,619.67,238.67z"};
	this.gp6 ={o:"poly", t:"252.167,42.896 253,252 280,252 280,160 316,158 316,252 344,252.104 344,35 316,35 315.667,119.667 280,121.667 279,37.667 "};
	this.gp7 ={o:"path", t:"M383.5,90.97c-18.67-0.33-32.5,16.64-32.5,16.64l6,35.94c0,0,13-18.55,22.67-18.55c13.04,0,11.66,22,11.66,22c-2.73-0.76-11.66-1.43-22.41,6.66c-12.87,9.69-26.255,33.673-21.59,62.67c9.463,58.818,46.34,31,46.34,31L394,252h24c0,0,0-72.67,0-104.33C418,116,402.17,91.31,383.5,90.97z M380.33,221c-9.33,0.02-6.66-45.33,10.34-40.67C390.67,180.33,394.37,220.98,380.33,221z"};
	this.gp8 ={o:"poly", t:"414.667,97.615 442.667,102.974 456.667,186.653 471.333,108.66 498.333,116.828 467.667,252 444,252 "};
	this.gp9 ={o:"path", t:"M560.67,211c5.66-75.33-24.67-87.67-40.34-88.33c-15.66-0.67-30.66,19.33-32,71.33c-1.33,52,27,66.483,40.34,67c11.694,0.453,29-8.9,29-8.9L554,223.33c-38.67,23-38.33-22.66-38.33-22.66L560.67,211z M524.83,154c8.49,1.33,10.5,21.33,10.5,21.33l-19-5.37C516.33,169.96,516.33,152.67,524.83,154z"};
	this.gp10={o:"poly", t:"26.914,164.382 51.769,268.186 75.746,266.432 88.612,197.424 100.308,262.923 126.332,261.461 154.988,73.736 124.87,89.649 113.297,175.031 99.723,104.438 74.869,121.69 62.88,194.792 51.184,140.405 "};
	this.gp11={o:"path", t:"M185.11,110.58c-39.19-0.88-45.33,68.71-45.33,78.95c0,14.33,9.07,100.291,74.57,56.14l-4.1-35.38c0,0-39.47,41.23-42.98-10.53l49.42-8.77C216.69,190.99,224.29,111.46,185.11,110.58z M169.02,167.01c0,0,4.1-22.8,11.99-22.8c7.9,0,7.9,18.71,7.9,18.71L169.02,167.01z"};
	this.greensObject = {g:"greens", a:new Array(this.gp1, this.gp2, this.gp3, this.gp4, this.gp5, this.gp6, this.gp7, this.gp8, this.gp9, this.gp10, this.gp11)};
	
	// turquise paths
	this.tp1 ={o:"poly", t:"121,307 147,473 159.333,478.667 181,338.334 201,494.334 214.667,498.334 243,314 229.333,312.334 209.232,468.334 188,311.667 174.667,310.334 154.988,450 134.333,307 "};
	this.tp2 ={o:"path", t:"M259,313.334c7.667,0,9.667,8.999,9.333,16.666s-2.326,14.65-9.333,14.667c-4.667,0.011-8.333-10.322-8-15.661S253,313.334,259,313.334z"};
	this.tp3 ={o:"poly", t:"252,369 267,370 267,509 253.667,506.667 "};
	this.tp4 ={o:"path", t:"M289,371v142h14c0,0-0.333-75.999,0-86.666s5.333-37.667,22-34.667c15.606,2.81,14.058,34.423,14.442,65.667c0.337,27.419,0.225,55.484,0.225,57.666H354c0,0-0.327-81.999-0.33-90.666s-2.65-55.64-28.67-55.667c-14.667-0.016-23.667,25.667-23.667,25.667l-0.667-22.667L289,371z"};
	this.tp5 ={o:"path", t:"M374,371v143l13.667-1.999c0,0,0.333-76.666,0-88s10.667-34.333,22-35s14.333,16,14.5,27s0,90,0,90l12.5-3c0,0,0.333-86.668,0-95.334s-2.645-42.294-26.333-42.333C397.334,365.312,387,393,387,393l-0.666-22H374z"};
	this.tp6 ={o:"path", t:"M481,471c-15.67-5-13.67-37.67-13.67-37.67l48-12c0-48.33-9.66-63.33-27.04-63.33s-32.96,22.33-33.91,75s16.95,59,27.95,59.33c11,0.34,29-18.66,29-18.66l-3-18.34C508.33,455.33,496.67,476,481,471z M488.29,374.67c12.95-1.34,15.71,33,15.71,33l-37.33,8.66C466,399.33,475.33,376,488.29,374.67z"};
	this.tp7 ={o:"path", t:"M531,469V354l10-2.666V371c0,0,8.666-27.665,23-25.999V363c0,0-18-0.332-21,38.001V463L531,469z"};
	this.tp8 ={o:"path", t:"M640.17,216.67c-0.34-11.17-10.67-48-41-44.17l2.66,12.5c0,0,8.34-3.83,19.17,5s9.5,23.83,9.5,23.83s-11-6-21.5-3.83s-15.33,13.17-14.83,23.83c0.5,10.67,4.59,25.98,20.66,27.75c8.34,0.92,15.72-7.8,15.72-7.8l0.95,8.72l8.67,1C640.17,263.5,640.5,227.83,640.17,216.67z M628.33,244.5c-3.66,6.67-20.5,11.33-22.5-6.33c-2-17.67,8-21.67,24.17-14.5C630,223.67,632,237.83,628.33,244.5z"};
	this.tp9 ={o:"poly", t:"258.083,47.167 272,44 272,128 323,125.333 323,40 337,40 337,244 324,244 323.333,149.333 272.667,152.167 272,246 258,246 "};
	this.tp10={o:"path", t:"M413,148.33c-0.67-32-13-50.33-29.33-52c-16.34-1.66-25,11.67-25,11.67l3.662,20.169c42-29.67,35.668,25.161,35.668,25.161c-33,2.67-44.33,29.34-44.33,50.67s8.66,43,23.33,44s23-20.67,23-20.67l0.332,19.67H413C413,247,413.67,180.33,413,148.33z M400,197.67c-9,49.97-32.08,27.66-32,11c0.21-41.72,32-36.56,32-36.56V197.67z"};
	this.tp11={o:"poly", t:"424.167,105 438.584,107 458.623,221.333 478.645,116.883 492.321,119.667 464.332,247 451,247 "};
	this.tp12={o:"path", t:"M526.67,128.67c-25-6.34-29,49.33-29,62c0,12.66,2.33,81.66,55.33,58.33l-2.67-15.67c0,0-38.33,22-40.33-41l46.67,10C556.67,202.33,563.11,137.9,526.67,128.67z M545.67,184.49L510.33,175c0,0,3-32.33,17.05-30.33C546.06,147.32,545.67,184.49,545.67,184.49z"};
	this.tp13={o:"path", t:"M209.08,184.56c1.17-31.29-4.09-70.18-26.61-67.55c-22.51,2.63-36.55,34.8-36.84,75.74c-0.29,40.93,17.25,59.65,33.63,59.35c16.37-0.29,25.73-9.35,25.73-9.35l-2.05-16.67c-45.03,26.32-44.44-32.46-44.44-32.46L209.08,184.56z M178.67,135.09c19.73-1.72,17.25,33.97,17.25,33.97l-37.13,6.73C158.79,175.79,161.86,136.55,178.67,135.09z"};
	this.tp14={o:"poly", t:"31.977,165.184 43.48,155.572 61.66,241.559 80.107,124.898 92.107,116.878 110.828,230.463 130.13,92.449 142.413,86.233 117.267,254 104,254 85.103,141.867 66.973,259.122 55.277,260.876 "};

	this.turquiseObject = {g:"turquise", a:new Array(this.tp1, this.tp2, this.tp3, this.tp4, this.tp5, this.tp6, this.tp7, this.tp8, this.tp9, this.tp10, this.tp11, this.tp12, this.tp13, this.tp14)};
	
	// all objects in one array
	this.allObjectsArray = new Array(this.blacksObject, this.greensObject, this.turquiseObject);
	
	// the filter
	this.filter = "<filter  width='140%' height='130%' x='-15%' y='-15%' id='AI_Shadow_2' filterUnits='objectBoundingBox'>\
				   		<feGaussianBlur  in='SourceAlpha' stdDeviation='6' result='blur'></feGaussianBlur>\
				   		<feOffset  dx='-8' dy='8' in='blur' result='offsetBlurredAlpha'></feOffset>\
							<feMerge>\
								<feMergeNode  in='offsetBlurredAlpha'></feMergeNode>\
								<feMergeNode  in='SourceGraphic'></feMergeNode>\
							</feMerge>\
				   </filter>";
}

WeHaveaWinner.prototype = {
	
	init: function(width, height) {
		
		this.svg = this.svgObject.newSVG(width, height);
		
		// setup the filter
		this.svg.innerHTML = this.filter;
		
		for (var i = 0; i < this.allObjectsArray.length; i++) {
		
			this.group = undefined;
			
			// if groups are defined in the objects we append the paths to them
			if (this.allObjectsArray[i].g != undefined) {
				this.group = this.svgObject.newGroup();
				this.group.setAttribute("id", this.allObjectsArray[i].g);
				this.group.setAttribute("class", this.allObjectsArray[i].g + "_style");
				
				if (this.allObjectsArray[i].g == "blacks") {
					this.group.setAttribute("filter", "url(#AI_Shadow_2)");
				}
			}
			
			// loop through all of the object's
			for (var j = 0; j < this.allObjectsArray[i].a.length; j++) {
				
				if (this.allObjectsArray[i].a[j].o == "path") {
					this.path = this.svgObject.newPath();
					this.path.setAttribute("d", this.allObjectsArray[i].a[j].t);
					if (this.group != undefined) {
						this.group.appendChild(this.path);
					}
					else {
						this.svg.appendChild(this.path);
					}
				}
				else if (this.allObjectsArray[i].a[j].o == "poly") {
					this.poly = this.svgObject.newPolygon();
					this.poly.setAttribute("points", this.allObjectsArray[i].a[j].t);
					if (this.group != undefined) {
						this.group.appendChild(this.poly);
					}
					else {
						this.svg.appendChild(this.poly);
					}
				}
			}
			
			// we append each group to the svg tag
			if (this.group != undefined) {
				this.svg.appendChild(this.group);
			}
			
		}
		this.addStylesToSVG();
	},
	
	addStylesToSVG: function() {
		
		var styleTag = this.svgObject.newStyle();
		
		var blacksStyle   = ".blacks_style { fill:" + this.blackColor + "; } \n";
		var greensStyle   = ".greens_style { fill:" + this.greenColor + "; } \n";
		var turquiseStyle = ".turquise_style { fill:" + this.turquiseColor + "; } \n";
			
		styleTag.innerHTML += blacksStyle;
		styleTag.innerHTML += greensStyle;
		styleTag.innerHTML += turquiseStyle;
		
		this.svg.appendChild(styleTag);
	}
}


