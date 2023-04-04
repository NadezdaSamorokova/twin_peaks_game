class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImages
		this.playerImage
		this.obstacles = []
		this.coffeeImage
       /* this.pieImage*/
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage("../images/owl_cave.png"), x: 0, speed: 0 },
			{ src: loadImage("../images/background_lodge.png"), x: 0, speed: 1 },
		]

		this.playerImage = loadImage("../images/cooper.gif")
		this.coffeeImage = loadImage("../images/coffee.png")
        /*this.pieImage = loadImage("../images/pie.png")*/
	}

	draw() {
		clear()
		this.background.draw()
		this.player.draw()

		// Every x frames we want to push a new coin into the array 
		if (frameCount % 90 === 0) {
			this.obstacles.push(new Obstacle(this.coffeeImage))
		}

    // Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

    // Filter the coins which are out of the canvas or had a collision
		// We need an arrow function here, so that "this" has the right context (of the game object)
		this.obstacles = this.obstacles.filter(obstacle => {
			console.log(this)

			if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
				return false
			} else {
				return true
			}
		})
	}
}