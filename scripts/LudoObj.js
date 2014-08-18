
var LudoObj = function() {
	
	// !  ---------------------- GAMEBOARD cells-------------------------------
	
	// goal cell
	this.goal = document.getElementById('goal_cell');
	
	// ! GREEN path cells ------------------------------
	this.g01 = document.getElementById('x6y7');
	this.g02 = document.getElementById('x5y7');
	this.g03 = document.getElementById('x4y7');
	this.g04 = document.getElementById('x3y7');
	this.g05 = document.getElementById('x2y7');
	this.g06 = document.getElementById('x1y7');
	this.g07 = document.getElementById('x1y8');
	this.g08 = document.getElementById('x1y9');
	this.g09 = document.getElementById('x2y9');
	this.g10 = document.getElementById('x3y9');
	this.g11 = document.getElementById('x4y9');
	this.g12 = document.getElementById('x5y9');
	this.g13 = document.getElementById('x6y9');
	
	// green path array
	this.g_path_cells = new Array(this.g01, 
								  this.g02, 
								  this.g03, 
								  this.g04, 
								  this.g05, 
								  this.g06, 
								  this.g07, 
								  this.g08, 
								  this.g09, 
								  this.g10, 
								  this.g11, 
								  this.g12, 
								  this.g13);
								  
	// green home stretch cells
	this.g14 = document.getElementById('x2y8');
	this.g15 = document.getElementById('x3y8');
	this.g16 = document.getElementById('x4y8');
	this.g17 = document.getElementById('x5y8');
	this.g18 = document.getElementById('x6y8');
	
	// green homestretch array
	this.g_homestretch_cells = new Array(this.g14, 
										 this.g15, 
										 this.g16, 
										 this.g17, 
										 this.g18,
										 this.goal);
	
	// ! BLUE path cells ------------------------------
	this.b01 = document.getElementById('x7y10');
	this.b02 = document.getElementById('x7y11');
	this.b03 = document.getElementById('x7y12');
	this.b04 = document.getElementById('x7y13');
	this.b05 = document.getElementById('x7y14');
	this.b06 = document.getElementById('x7y15');
	this.b07 = document.getElementById('x8y15');
	this.b08 = document.getElementById('x9y15');
	this.b09 = document.getElementById('x9y14');
	this.b10 = document.getElementById('x9y13');
	this.b11 = document.getElementById('x9y12');
	this.b12 = document.getElementById('x9y11');
	this.b13 = document.getElementById('x9y10');
	// blue path array
	this.b_path_cells = new Array(this.b01, 
								  this.b02, 
								  this.b03, 
								  this.b04, 
								  this.b05, 
								  this.b06, 
								  this.b07, 
								  this.b08, 
								  this.b09, 
								  this.b10, 
								  this.b11, 
								  this.b12, 
								  this.b13);
	// blue home stretch cells
	this.b14 = document.getElementById('x8y14');
	this.b15 = document.getElementById('x8y13');
	this.b16 = document.getElementById('x8y12');
	this.b17 = document.getElementById('x8y11');
	this.b18 = document.getElementById('x8y10');
	// blue homestretch array
	this.b_homestretch_cells = new Array(this.b14, 
										this.b15, 
										this.b16, 
										this.b17, 
										this.b18,
										this.goal);
	
	// ! RED path cells -------------------------------
	this.r01 = document.getElementById('x10y9');
	this.r02 = document.getElementById('x11y9');
	this.r03 = document.getElementById('x12y9');
	this.r04 = document.getElementById('x13y9');
	this.r05 = document.getElementById('x14y9');
	this.r06 = document.getElementById('x15y9');
	this.r07 = document.getElementById('x15y8');
	this.r08 = document.getElementById('x15y7');
	this.r09 = document.getElementById('x14y7');
	this.r10 = document.getElementById('x13y7');
	this.r11 = document.getElementById('x12y7');
	this.r12 = document.getElementById('x11y7');
	this.r13 = document.getElementById('x10y7');
	// red path array
	this.r_path_cells = new Array(this.r01, 
								  this.r02, 
								  this.r03, 
								  this.r04, 
								  this.r05, 
								  this.r06, 
								  this.r07, 
								  this.r08, 
								  this.r09, 
								  this.r10, 
								  this.r11, 
								  this.r12, 
								  this.r13);
	// red home stretch cells
	this.r14 = document.getElementById('x14y8');
	this.r15 = document.getElementById('x13y8');
	this.r16 = document.getElementById('x12y8');
	this.r17 = document.getElementById('x11y8');
	this.r18 = document.getElementById('x10y8');
	// red homestretch array
	this.r_homestretch_cells = new Array(this.r14, 
										 this.r15, 
										 this.r16, 
										 this.r17, 
										 this.r18,
										 this.goal);
					
	// ! YELLOW path cells ----------------------------
	this.y01 = document.getElementById('x9y6');
	this.y02 = document.getElementById('x9y5');
	this.y03 = document.getElementById('x9y4');
	this.y04 = document.getElementById('x9y3');
	this.y05 = document.getElementById('x9y2');
	this.y06 = document.getElementById('x9y1');
	this.y07 = document.getElementById('x8y1');
	this.y08 = document.getElementById('x7y1');
	this.y09 = document.getElementById('x7y2');
	this.y10 = document.getElementById('x7y3');
	this.y11 = document.getElementById('x7y4');
	this.y12 = document.getElementById('x7y5');
	this.y13 = document.getElementById('x7y6');
	// yellow path array
	this.y_path_cells = new Array(this.y01, 
								  this.y02, 
								  this.y03, 
								  this.y04, 
								  this.y05, 
								  this.y06, 
								  this.y07, 
								  this.y08, 
								  this.y09, 
								  this.y10, 
								  this.y11, 
								  this.y12, 
								  this.y13);
	// yellow home stretch cells
	this.y14 = document.getElementById('x8y2');
	this.y15 = document.getElementById('x8y3');
	this.y16 = document.getElementById('x8y4');
	this.y17 = document.getElementById('x8y5');
	this.y18 = document.getElementById('x8y6');
	// yellow homestretch array
	this.y_homestretch_cells = new Array(this.y14, 
										 this.y15, 
										 this.y16, 
										 this.y17, 
										 this.y18,
										 this.goal);
	
	// full path array
	this.complete_path = this.y_path_cells.concat(this.r_path_cells).concat(this.b_path_cells).concat(this.g_path_cells);
	
	// ! ---------------------------- VARIABLES ----------------------------------
	this.spritesheet = new Image();
	this.canvas = document.getElementById('game_canvas');
	this.context = this.canvas.getContext('2d');
	
	// players (this.player1 = undefined)
	this.player1 = undefined;
	this.player2 = undefined;
	this.player3 = undefined;
	this.player4 = undefined;
	// current active player
	this.player = undefined;
	// player array
	this.players = undefined;
	
	// the dice
	this.dice	 = new Dice();
	
	// all game pieces
	// green pieces
	this.g_H1 = undefined;
	this.g_H2 = undefined;
	this.g_H3 = undefined;
	this.g_H4 = undefined;
	// blue pieces
	this.b_H1 = undefined;
	this.b_H2 = undefined;
	this.b_H3 = undefined;
	this.b_H4 = undefined;
	// red pieces
	this.r_H1 = undefined;
	this.r_H2 = undefined;
	this.r_H3 = undefined;
	this.r_H4 = undefined;
	// yellow pieces
	this.y_H1 = undefined;
	this.y_H2 = undefined;
	this.y_H3 = undefined;
	this.y_H4 = undefined;
	// array of all pieces
	this.gamePiecesArray = undefined;
	
	
	// ! ---------------------------- CONSTANTS ----------------------------------
	// spritesheet coordinates
	this.GS_SINGLE    = {x: 140, y:  13};
	this.BS_SINGLE    = {x: 100, y:  13};
	this.RS_SINGLE    = {x:  58, y:  13};
	this.YS_SINGLE    = {x:  18, y:  13};
				      				 
	this.GS_DOUBLE    = {x: 139, y:  56};
	this.BS_DOUBLE    = {x:  99, y:  56};
	this.RS_DOUBLE    = {x:  58, y:  56};
	this.YS_DOUBLE    = {x:  18, y:  56};
				      				 
	this.GS_TRIPLE    = {x: 139, y:  97};
	this.BS_TRIPLE    = {x:  99, y:  97};
	this.RS_TRIPLE    = {x:  59, y:  97};
	this.YS_TRIPLE    = {x:  18, y:  97};
	
	this.YS_QUATRUPLE = {x:  19, y: 138};
	this.RS_QUATRUPLE = {x:  59, y: 138};
	this.BS_QUATRUPLE = {x:  99, y: 138};
	this.GS_QUATRUPLE = {x: 139, y: 138};
	
	// pieces goal coordinates
	this.G_GOAL = {gLeft: 194, gTop: 224};
	this.B_GOAL = {gLeft: 224, gTop: 195};
	this.R_GOAL = {gLeft: 252, gTop: 224};
	this.Y_GOAL = {gLeft: 224, gTop: 255};
	
	// pieces paths
	this.G_PATH = this.g_path_cells.slice(8).concat(this.b_path_cells).concat(this.r_path_cells).concat(this.y_path_cells).concat(this.g_path_cells.slice(0,7)).concat(this.g_homestretch_cells);
	this.B_PATH = this.b_path_cells.slice(8).concat(this.r_path_cells).concat(this.y_path_cells).concat(this.g_path_cells).concat(this.b_path_cells.slice(0,7)).concat(this.b_homestretch_cells);
	this.R_PATH = this.r_path_cells.slice(8).concat(this.y_path_cells).concat(this.g_path_cells).concat(this.b_path_cells).concat(this.r_path_cells.slice(0,7)).concat(this.r_homestretch_cells);
	this.Y_PATH = this.y_path_cells.slice(8).concat(this.g_path_cells).concat(this.b_path_cells).concat(this.r_path_cells).concat(this.y_path_cells.slice(0,7)).concat(this.y_homestretch_cells);
	
	// ! Home Cells
	// Green Home Cells
	this.GH1 = {name: 'g_H1', x:  53, y: 108};
	this.GH2 = {name: 'g_H2', x:  53, y:  53};
	this.GH3 = {name: 'g_H3', x: 108, y: 108};
	this.GH4 = {name: 'g_H4', x: 108, y:  53};
	// Blue Home Cells
	this.BH1 = {name: 'b_H1', x: 340, y:  54};
	this.BH2 = {name: 'b_H1', x: 396, y:  54};
	this.BH3 = {name: 'b_H1', x: 340, y: 109};
	this.BH4 = {name: 'b_H1', x: 396, y: 109};
	// Red Home Cells
	this.RH1 = {name: 'r_H1', x: 395, y: 342};
	this.RH2 = {name: 'r_H2', x: 395, y: 396};
	this.RH3 = {name: 'r_H3', x: 339, y: 342};
	this.RH4 = {name: 'r_H4', x: 339, y: 396};
	// Yellow Home Cells
	this.YH1 = {name: 'y_H1', x: 109, y: 397};
	this.YH2 = {name: 'y_H2', x:  54, y: 397};
	this.YH3 = {name: 'y_H3', x: 109, y: 342};
	this.YH4 = {name: 'y_H4', x:  54, y: 342};
	// All Home Cell Array
	this.HOME_CELLS_ARRAY = new Array(
									new Array(
										this.YH1, this.YH2, this.YH3, this.YH4
									),
									new Array(
										this.RH1, this.RH2, this.RH3, this.RH4
									),
									new Array(
										this.BH1, this.BH2, this.BH3, this.BH4
									),
									new Array(
										this.GH1, this.GH2, this.GH3, this.GH4
									)
								);
}

LudoObj.prototype = {
	
	setupGame: function() {
		
		// set the spritesheet source
		this.spritesheet.src = 'images/spritesheet.png';
		
		// setup game pieces
		// green
		this.g_H1 = new Piece("green", this.GH1.x,  this.GH1.y, this.GS_SINGLE.x, this.GS_SINGLE.y);
		this.g_H2 = new Piece("green", this.GH2.x,  this.GH2.y, this.GS_SINGLE.x, this.GS_SINGLE.y);
		this.g_H3 = new Piece("green", this.GH3.x,  this.GH3.y, this.GS_SINGLE.x, this.GS_SINGLE.y);
		this.g_H4 = new Piece("green", this.GH4.x,  this.GH4.y, this.GS_SINGLE.x, this.GS_SINGLE.y);

		this.g_H1.init(this.G_PATH, this.G_GOAL.gLeft, this.G_GOAL.gTop);
		this.g_H2.init(this.G_PATH, this.G_GOAL.gLeft, this.G_GOAL.gTop);
		this.g_H3.init(this.G_PATH, this.G_GOAL.gLeft, this.G_GOAL.gTop);
		this.g_H4.init(this.G_PATH, this.G_GOAL.gLeft, this.G_GOAL.gTop);

		// blue
		this.b_H1 = new Piece("blue", this.BH1.x,  this.BH1.y, this.BS_SINGLE.x, this.BS_SINGLE.y);
		this.b_H2 = new Piece("blue", this.BH2.x,  this.BH2.y, this.BS_SINGLE.x, this.BS_SINGLE.y);
		this.b_H3 = new Piece("blue", this.BH3.x,  this.BH3.y, this.BS_SINGLE.x, this.BS_SINGLE.y);
		this.b_H4 = new Piece("blue", this.BH4.x,  this.BH4.y, this.BS_SINGLE.x, this.BS_SINGLE.y);

		this.b_H1.init(this.B_PATH, this.B_GOAL.gLeft, this.B_GOAL.gTop);
		this.b_H2.init(this.B_PATH, this.B_GOAL.gLeft, this.B_GOAL.gTop);
		this.b_H3.init(this.B_PATH, this.B_GOAL.gLeft, this.B_GOAL.gTop);
		this.b_H4.init(this.B_PATH, this.B_GOAL.gLeft, this.B_GOAL.gTop);

		// red
		this.r_H1 = new Piece("red", this.RH1.x,  this.RH1.y,  this.RS_SINGLE.x, this.RS_SINGLE.y);
		this.r_H2 = new Piece("red", this.RH2.x,  this.RH2.y,  this.RS_SINGLE.x, this.RS_SINGLE.y);
		this.r_H3 = new Piece("red", this.RH3.x,  this.RH3.y,  this.RS_SINGLE.x, this.RS_SINGLE.y);
		this.r_H4 = new Piece("red", this.RH4.x,  this.RH4.y,  this.RS_SINGLE.x, this.RS_SINGLE.y);

		this.r_H1.init(this.R_PATH, this.R_GOAL.gLeft, this.R_GOAL.gTop);
		this.r_H2.init(this.R_PATH, this.R_GOAL.gLeft, this.R_GOAL.gTop);
		this.r_H3.init(this.R_PATH, this.R_GOAL.gLeft, this.R_GOAL.gTop);
		this.r_H4.init(this.R_PATH, this.R_GOAL.gLeft, this.R_GOAL.gTop);

		// yellow
		this.y_H1 = new Piece("yellow", this.YH1.x,  this.YH1.y, this.YS_SINGLE.x, this.YS_SINGLE.y);
		this.y_H2 = new Piece("yellow", this.YH2.x,  this.YH2.y, this.YS_SINGLE.x, this.YS_SINGLE.y);
		this.y_H3 = new Piece("yellow", this.YH3.x,  this.YH3.y, this.YS_SINGLE.x, this.YS_SINGLE.y);
		this.y_H4 = new Piece("yellow", this.YH4.x,  this.YH4.y, this.YS_SINGLE.x, this.YS_SINGLE.y);

		this.y_H1.init(this.Y_PATH, this.Y_GOAL.gLeft, this.Y_GOAL.gTop);
		this.y_H2.init(this.Y_PATH, this.Y_GOAL.gLeft, this.Y_GOAL.gTop);
		this.y_H3.init(this.Y_PATH, this.Y_GOAL.gLeft, this.Y_GOAL.gTop);
		this.y_H4.init(this.Y_PATH, this.Y_GOAL.gLeft, this.Y_GOAL.gTop);

		// all pieces in one array
		this.gamePiecesArray = new Array(
						new Array(
							{name: 'y_H1', piece : this.y_H1},
							{name: 'y_H2', piece : this.y_H2},
							{name: 'y_H3', piece : this.y_H3},
							{name: 'y_H4', piece : this.y_H4}
						),
						new Array(
							{name: 'r_H1', piece : this.r_H1},
							{name: 'r_H2', piece : this.r_H2},
							{name: 'r_H3', piece : this.r_H3},
							{name: 'r_H4', piece : this.r_H4}
						),
						new Array(
							{name: 'b_H1', piece : this.b_H1},
							{name: 'b_H2', piece : this.b_H2},
							{name: 'b_H3', piece : this.b_H3},
							{name: 'b_H4', piece : this.b_H4}
						),
						new Array(
							{name: 'g_H1', piece : this.g_H1},
							{name: 'g_H2', piece : this.g_H2},
							{name: 'g_H3', piece : this.g_H3},
							{name: 'g_H4', piece : this.g_H4}
						)
						);
		
		// initialize players
		// player1 
		this.player1 = new Player("yellow", "Kalle");
		this.player1.init();
		this.player1.pieces = this.gamePiecesArray[0];
		// player2
		this.player2 = new Player("red", "Compu 1");
		this.player2.init();
		this.player2.pieces = this.gamePiecesArray[1];
		// player3
		this.player3 = new Player("blue", "Compu 2");
		this.player3.init();
		this.player3.pieces = this.gamePiecesArray[2];
		// player4
		this.player4 = new Player("green", "Compu 3");
		this.player4.init();
		this.player4.pieces = this.gamePiecesArray[3];
		// put players into the players array
		this.players = new Array(this.player1, this.player2, this.player3, this.player4);
		// keep track of current player
		this.activePlayer = 0;
	},
	
	drawAllPieces: function() {
		
		this.context.save();
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
		
		for (var i = 0; i < this.gamePiecesArray.length; i++) {
			
			for (var j = 0; j < this.gamePiecesArray[i].length; j++) {
				
				if (this.gamePiecesArray[i][j].piece.inHome) {
					this.context.drawImage(this.spritesheet,
							  this.gamePiecesArray[i][j].piece.sheet_left, 
							  this.gamePiecesArray[i][j].piece.sheet_top,
							  32, 32,
							  this.gamePiecesArray[i][j].piece.start_left, 
							  this.gamePiecesArray[i][j].piece.start_top,
							  32, 32);
				}
				else {
					// animate currently moving pieces
					if (this.gamePiecesArray[i][j].piece.isAnimating) {
						this.gamePiecesArray[i][j].piece.move();
					}
					
					this.context.drawImage(this.spritesheet,
							  this.gamePiecesArray[i][j].piece.sheet_left, 
							  this.gamePiecesArray[i][j].piece.sheet_top,
							  32, 32,
							  this.gamePiecesArray[i][j].piece.left, 
							  this.gamePiecesArray[i][j].piece.top,
							  32, 32);
				}
			} 
		}
		
		this.context.restore();
	},
	
	animate: function() {
	
		ludoObject.drawAllPieces();
		
		requestNextAnimationFrame(ludoObject.animate);
	},
	
	setActivePlayer: function() {
		
		if (this.activePlayer < 4) {
			this.activePlayer += 1;
		} else {
			this.activePlayer = 1;
		}
		this.switchPlayer();
	},
	
	switchPlayer: function() {
		
		if (this.player != undefined) {
			this.player.playerDiv.style.backgroundPositionY = "0px";
			this.player.active = false;
		}
		
		switch(this.activePlayer) {
			case 1:
				this.player = this.player1;
				this.dice.currentPlayer = this.player1;
				this.player.active = true;
				break;
			case 2:
				this.player = this.player2;
				this.dice.currentPlayer = this.player2;
				this.player.active = true;
				break;
			case 3:
				this.player = this.player3;
				this.dice.currentPlayer = this.player3;
				this.player.active = true;
				break;
			case 4:
				this.player = this.player4;
				this.dice.currentPlayer = this.player4;
				this.player.active = true;
				break;
			default:
				console.log("Error setting active player");
		}
		this.player.playerDiv.style.backgroundPositionY = "-75px";
		this.dice.disabled = false;
	},
	
	checkForPieceOnCoord: function(offX, offY, pLeft, pTop) {
		
		var result = undefined;
		
		if (offX > pLeft && offX < pLeft + 32) {
			if (offY > pTop && offY < pTop + 32) {
				result = true;
			}
			else {
				result = false;
			}
		}
		else {
			result = false;
		}
		
		return result;
	},
	
	checkForClickOnBlank: function(offX, offY) {
		
		var breakOuter = false;
		var result = true;
		
		for (var i = 0; i < 4; i++) {
			
			if (breakOuter) {
				break;
			}
			
			for (var j = 0; j < 4; j++) {
				
				if (offX > this.players[i].pieces[j].piece.left && offY > this.players[i].pieces[j].piece.top) {
					if (offX < this.players[i].pieces[j].piece.left +  32 && offY < this.players[i].pieces[j].piece.top + 32) {
						result = false;
						breakOuter = true;
						break;
					}
				}
			}
		}
		
		return result;
	},
	
	checkForClickOnHighlight: function(offX, offY) {
		
		var result = false;
		
		for (var i = 0; i < 4; i++) {
		
			if (ludoObject.player.pieces[i].piece.selected) {
				if (offX > this.player.pieces[i].piece.canMoveTo.x1 && offX < ludoObject.player.pieces[i].piece.canMoveTo.x2) {
					if (offY > ludoObject.player.pieces[i].piece.canMoveTo.y1 && offY < ludoObject.player.pieces[i].piece.canMoveTo.y2) {
						result = true;
						break;
					}
				}
			}
		}
		return result;
	},
	
	checkForBlockOnField: function(id) {
		
		var blockOnField = false;
		var field = document.getElementById(id);
		
		if (new Number(field.getAttribute('count')) > 1) {
			
			for (var i = 0; i < 4; i++) {
				
				// if we find a double piece whitch's id does not match one of our own pieces
				if (this.player.pieces[i].piece.pathID != id) {
					
					// then there is a block on the pieces path
					blockOnField = true;
				}
				else {
					// if we find one of our own pieces, we set blockOnPath to false and continue
					blockOnField = false;
					break; // we don't need to check for other pieces on this field
				}
			}
		}
		
		return blockOnField;
	},
	
	checkForDoublePosOnSafeField: function(id) {
		
		var result = false;
		
		// we loop through all players
		for (var i = 0; i < 4; i++) {
			
			// excluding ourselves
			if (ludoObject.players[i].color != this.player.color) {
				
				// we loop through each of our competitors pieces
				for (var j = 0; j < 4; j++) {
					
					// if we find a competitor on our safe-field id
					if (this.players[i].pieces[j].piece.pathID == id) {
						
						result = true;
					}
				}
			}
		}
		return result;
	},
	
	greyOutFields: function(piece, startIndex, endIndex) {
		
		for (var i = startIndex; i < endIndex; i++) {
			piece.path[i].style.backgroundColor = "grey";
		}
		
		setTimeout(function() {
			ludoObject.clearHighlightedFields();
		}, 2000);
		
	},
	
	highlightFields: function(index) {
		
		// get the current pathIndex of the selected piece
		var pathIndex = this.player.pieces[index].piece.pathIndex;
		var blockOnPath = false;
		var breakFieldChecks = false;
		var numberOfFieldsToGreyOut = undefined;
		
		// check if the player overshoots the goal
		if (pathIndex + this.player.diceRoll + 1 > this.player.pieces[index].piece.path.length) {
			
			console.log("Rolled higher than required to enter Goal");
			this.greyOutFields(this.player.pieces[index].piece, pathIndex, 56);
		}
		// or if he hits the goal cell
		else if (pathIndex + this.player.diceRoll + 1 == this.player.pieces[index].piece.path.length) {
			
			console.log("Move piece to Goal");
			
			var pathIndex = this.player.pieces[index].piece.pathIndex;
			var tmpCount = this.player.pieces[index].piece.path[pathIndex].getAttribute('count');

			this.player.readyToMove = false;
			this.player.piecesInGoal++;
			this.player.pieces[index].piece.moveToGoal(this.player.piecesInGoal);
			
			this.player.pieces[index].piece.path[pathIndex].setAttribute('count', new Number(tmpCount) - 1);
			
			// we clear the marked paths and set next player to go.
			setTimeout(function() {
				ludoObject.clearHighlightedFields();
				ludoObject.setActivePlayer();
			}, 1000);
		}
		else {
		
			// loop through the piece's path
			for (var i = pathIndex + 1; i <= pathIndex + this.player.diceRoll; i++) {
				
				if (breakFieldChecks) {
					break;
				}
				
				if (this.checkForBlockOnField(this.player.pieces[index].piece.path[i].id)) {
					breakFieldChecks = true;
					blockOnPath = true;
					numberOfFieldsToGreyOut = i - pathIndex;
				}
			}
			
			if (!blockOnPath) {
				this.player.pieces[index].piece.path[pathIndex].style.backgroundColor = 'aquamarine';
				this.player.pieces[index].piece.highlightMoveToPos(this.player.diceRoll);
			}
			else {
				
				var piecesInPlay = 0;
							
				this.player.readyToMove = false;
				
				// loop through this players pieces
				for (var i = 0; i < 4; i++) {
					
					// when we find the selected piece
					if (this.player.pieces[i].piece.selected) {
						
						// we grey out the path cells up to the block
						this.greyOutFields(this.player.pieces[i].piece, pathIndex, pathIndex + numberOfFieldsToGreyOut);
					}
					// we keep track of this current players pieces that is in play
					if (!this.player.pieces[i].piece.inHome) {
						piecesInPlay++;
					}
				}
				
				// if the current player only has this one piece in play that he cannot move
				if (piecesInPlay == 1 && this.player.diceRoll != 6) {
					
					// we set next player to go in 2 seconds.
					setTimeout(function() {
						ludoObject.setActivePlayer();
					}, 2000);
				}
				else {
					// else we just set all pieces to unselected and readyToMove to false
					setTimeout(function() {

						for (var i = 0; i < 4; i++) {
							ludoObject.player.pieces[i].piece.selected = false;
						}
						
						ludoObject.player.readyToMove = false;
					}, 2000);
				}
				
				
			}
		}
		
		
	},
	
	clearHighlightedFields: function() {
		
		for (var i = 0; i < this.g_path_cells.length; i++) {
			if(i == 8) {
				this.g_path_cells[i].style.backgroundColor = 'lime';
			}
			else {
				this.g_path_cells[i].style.backgroundColor = 'white';
			}
		}
		
		for (var i = 0; i < this.g_homestretch_cells.length; i++) {
			this.g_homestretch_cells[i].style.backgroundColor = 'lime';
		}
		
		for (var i = 0; i < this.b_path_cells.length; i++) {
			if(i == 8) {
				this.b_path_cells[i].style.backgroundColor = 'aqua';
			}
			else {
				this.b_path_cells[i].style.backgroundColor = 'white';
			}
		}
		
		for (var i = 0; i < this.b_homestretch_cells.length; i++) {
			this.b_homestretch_cells[i].style.backgroundColor = 'aqua';
		}
		
		for (var i = 0; i < this.r_path_cells.length; i++) {
			if(i == 8) {
				this.r_path_cells[i].style.backgroundColor = 'red';
			}
			else {
				this.r_path_cells[i].style.backgroundColor = 'white';
			}
		}
		
		for (var i = 0; i < this.r_homestretch_cells.length; i++) {
			this.r_homestretch_cells[i].style.backgroundColor = 'red';
		}
		
		for (var i = 0; i < this.y_path_cells.length; i++) {
			if (i == 8) {
				this.y_path_cells[i].style.backgroundColor = 'yellow';
			}
			else {
				this.y_path_cells[i].style.backgroundColor = 'white';
			}
		}
		
		for (var i = 0; i < this.y_homestretch_cells.length; i++) {
			this.y_homestretch_cells[i].style.backgroundColor = 'yellow';
		}
	},
	
	startGame: function() {
		this.setActivePlayer();
		this.dice.disabled = false;
		
		this.player.turn();
		
	}
}

var ludoObject = new LudoObj();
ludoObject.setupGame();
ludoObject.animate();
ludoObject.startGame();


// ! ---------------------------- EVENT HANDLERS ----------------------------

ludoObject.dice.img.onmouseup = function() {
	
	if (!ludoObject.dice.disabled) {
		ludoObject.dice.rollDice();
	}
}

ludoObject.canvas.onmouseup = function(e) {
	
	if (ludoObject.dice.isAnimating) {
		return;
	}
	
	// check for click on blank
	if (ludoObject.checkForClickOnBlank(e.offsetX, e.offsetY) && !ludoObject.checkForClickOnHighlight(e.offsetX, e.offsetY)) {
		
		// if the click was on a blank we clear all previously highlighted fields
		ludoObject.clearHighlightedFields();
		
		// we set all the players pieces to unselected
		for (var k = 0; k < 4; k++) {
			ludoObject.player.pieces[k].piece.selected = false;
		}
		
		// and the player to not be ready to move
		ludoObject.player.readyToMove = false;
	}
	else {
		
		// if player is ready to move
		if (ludoObject.player.readyToMove) {
			
			// we check if the click occurred in this piece's moveTo position
			if (ludoObject.checkForClickOnHighlight(e.offsetX, e.offsetY)) {
				
				// then loop through current players pieces
				for (var j = 0; j < 4; j++) {
					
					// when we find the piece that is selected, we move it etc.
					if (ludoObject.player.pieces[j].piece.selected) {
						
						var indexPath = ludoObject.player.pieces[j].piece.pathIndex;
						var tmpCount = ludoObject.player.pieces[j].piece.path[indexPath].getAttribute('count');
						var id = ludoObject.player.pieces[j].piece.path[indexPath].id;
						var movingPieceFromSafe = false;
						
						// this will only have an affect if there is more than one piece one the field
						// when we move away from a multiple-position field we draw the underlying piece from count - 1
						ludoObject.player.pieces[j].piece.setSpritesheetCoordsTo(new Number(tmpCount) - 1);
						
						
						// if we are moving away from our safe-field
						// we don't want to reduce the count if we have a mixed-color double position on the field
						if (id == "x7y2"  && ludoObject.player.color == "yellow" ||
							id == "x14y7" && ludoObject.player.color == "red"	 ||
							id == "x9y14" && ludoObject.player.color == "blue"	 ||
							id == "x2y9"  && ludoObject.player.color == "green") {
								
								// when we move a piece of it's safe-field we have to check for a competitor double-position on the field
								if (!ludoObject.checkForDoublePosOnSafeField(id)) {
									
									// if there is no competitor double-position we can reduse the field count by 1
									ludoObject.player.pieces[j].piece.path[indexPath].setAttribute('count', new Number(tmpCount) - 1);
								} 
						}
						// if we are not moving away from a safe field we reduce the count by 1 no mather what.
						else if (id != "x7y2" && id != "x14y7" && id != "x9y14" && id != "x2y9") {
							
							ludoObject.player.pieces[j].piece.path[indexPath].setAttribute('count', new Number(tmpCount) - 1);
						}
						// if the color moving away from the safe-field is not the same as the safe-field color 
						else if (tmpCount >= 1) { // and tmpCount is higher than or equal to 1
							
							// and if there is no double-position we reduce the count by 1
							if (!ludoObject.checkForDoublePosOnSafeField(id)) {
								ludoObject.player.pieces[j].piece.path[indexPath].setAttribute('count', new Number(tmpCount) - 1);
							}
							else if (tmpCount > 3) {
								ludoObject.player.pieces[j].piece.path[indexPath].setAttribute('count', new Number(tmpCount) - 1);
							}
							else if (tmpCount > 1) {
								ludoObject.player.pieces[j].piece.path[indexPath].setAttribute('count', 1);
							}
						}
						
						ludoObject.player.pieces[j].piece.pathIndex = ludoObject.player.diceRoll + indexPath;
						
						// while moving this piece will show as one piece
						ludoObject.player.pieces[j].piece.setSpritesheetCoordsTo(1);
						
						ludoObject.player.pieces[j].piece.move();
						
						
						ludoObject.clearHighlightedFields();
						ludoObject.player.readyToMove = false;
					}
					
				}
				
			}
			
		}
		else if (ludoObject.player.diceRoll == 6) {
			
			// if the player rolled a 6 and did not click on a piece's moveTo position
			for (var i = 0; i < 4; i++) {
				
				// we check if the click happened on a piece in the home position
				if (ludoObject.player.pieces[i].piece.inHome) {
				
					if (ludoObject.checkForPieceOnCoord(e.offsetX, e.offsetY, ludoObject.player.pieces[i].piece.left, ludoObject.player.pieces[i].piece.top)) {
						
						// if it did we move the piece to the first position
						ludoObject.player.pieces[i].piece.moveToFirstPosition(ludoObject.player.pieces[i].piece.path[0]);
					}
				}
				else {
					
					// if not we check if click happened on a piece in play
					if (ludoObject.checkForPieceOnCoord(e.offsetX, e.offsetY, ludoObject.player.pieces[i].piece.left, ludoObject.player.pieces[i].piece.top)) {
						
						ludoObject.player.pieces[i].piece.selected = true;
						ludoObject.highlightFields(i);
						ludoObject.player.readyToMove = true;
					}
				}
			}
		}
		else if (ludoObject.player.diceRoll != undefined) {
			
			var piecesInGoal = ludoObject.player.piecesInGoal;
			
			// if we have a dice-roll other than 6, we loop through the players pieces
			for (var i = 0; i < 4; i++) {
				
				if (piecesInGoal < ludoObject.player.piecesInGoal) {
					break;
				}
				
				// when we find a piece that is not in the home position 
				if (!ludoObject.player.pieces[i].piece.inHome) {
					
					// we check if the click happened on this piece
					if (ludoObject.checkForPieceOnCoord(e.offsetX, e.offsetY, ludoObject.player.pieces[i].piece.left, ludoObject.player.pieces[i].piece.top)) {
						
						ludoObject.player.pieces[i].piece.selected = true;
						ludoObject.highlightFields(i);
						ludoObject.player.readyToMove = true;
					}
				}
			}
		}
	}
	
}

document.getElementById('roll_num_btn').onclick = function() {
	
	var select_div = document.getElementById('select_dice_num');
	var index = select_div.selectedIndex;
	var value = select_div.options[index].value;
	ludoObject.dice.faceNum = new Number(value);
	if (value == "6") {
		ludoObject.dice.displaySix();
	}
	else if (value == "5") {
		ludoObject.dice.displayFive();
	}
	else if (value == "4") {
		ludoObject.dice.displayFour();
	}
	else if (value == "3") {
		ludoObject.dice.displayThree();
	}
	else if (value == "2") {
		ludoObject.dice.displayTwo();
	}
	else if (value == "1") {
		ludoObject.dice.displayOne();
	}
	ludoObject.dice.handleRolledNumber();
	
}

