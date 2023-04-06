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

	jump() {
        if (this.y === height - this.height) {
            this.velocity = - 10;
        }
	}

    walkForward() {
        this.x += 20;
    }

    walkBack() {
        this.x -= 20;
    }
}