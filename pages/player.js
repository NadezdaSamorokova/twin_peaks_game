class Player {
	constructor() {
		this.width = 100
		this.height = 140
		this.x = 20
		this.y = 500 - this.height
		this.gravity = 0.2
		this.velocity = 0
		this.score = 0
	}

    //conditions for the player figure to stay in the canvas and don't "walk away" from the field 
	draw() {
		this.velocity += this.gravity;
		this.y += this.velocity;

        if (this.y >= 500 - this.height) {
			this.y = 500 - this.height
		}

        if (this.x < 0) {
            this.x += this.velocity;
        }

        if (this.x >= width - this.width) {
            this.x -= this.velocity;
        }

		image(game.playerImage, this.x, this.y, this.width, this.height)
	}

    // jump condititon. Making sure that there is only one jump at the time of pressing the button
	jump() {
        if (this.y === height - this.height) {
            this.velocity = - 10;
        }
	}

    //moving of the player forward and back
    walkForward() {
        this.x += 20;
    }

    walkBack() {
        this.x -= 20;
    }
}