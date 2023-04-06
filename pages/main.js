const game = new Game()

// Load game assets
function preload() {
	game.preload()
}

// Setup game
function setup() {
    createCanvas(800, 500);
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 38) {
		game.player.jump()
	}

    if (keyCode === 39) {
		game.player.walkForward()
	}

    if (keyCode === 37) {
		game.player.walkBack()
	}

    if (keyIsDown(ENTER)) {
        location.reload()
    }
}