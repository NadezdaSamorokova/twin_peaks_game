class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImages
		this.playerImage
		this.obstacles = []
		this.coffeeImage
        this.enemies = []
        this.enemy
        this.gameOver
        this.youWon
        this.resetInfo
	}

//preload all the pictures for the game
	preload() {
		this.backgroundImages = [
			{ src: loadImage("images/owl_cave.png"), x: 0, speed: 0 },
			{ src: loadImage("images/background_lodge.png"), x: 0, speed: 1 },
		]

		this.playerImage = loadImage("images/cooper.gif")
		this.coffeeImage = loadImage("images/coffee.png")
        this.enemy = loadImage("images/owl.gif")
        this.gameOver = loadImage("images/game_over.png")
        this.youWon = loadImage("images/you_win.png")
        this.resetInfo = loadImage("images/reset-info.png")
	}

	draw() {
		clear()
		this.background.draw()
		this.player.draw()
 
        //draw the obsticle and the enemy opirance frequency
		if (frameCount % 90 === 0) {
			this.obstacles.push(new Obstacle(this.coffeeImage))
		}

		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
				return false
			} else {
				return true
			}
		})

        if (frameCount % 240 === 0) {
			this.enemies.push(new Enemy(this.enemy))
		}

        this.enemies.forEach(function (element) {
			element.draw()
		})

        this.enemies = this.enemies.filter(element => {
			if (element.collision(this.player) || element.x < 0 - element.width) {
				return false
			} else {
				return true
			}
		})

        //main condition to wining the game
        if (this.player.score === 10) {
            image(game.youWon, 100, 45, 600, 410) 
            noLoop()

            return true
        }
	}
}