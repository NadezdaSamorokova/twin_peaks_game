class Enemy {
    constructor(image) {
        this.image = image;
        this.x = width;
        this.y = (Math.random() * height) / 1.4;
        this.width = 100;
        this.height = 100;
    }

    draw() {
		this.x -= 3
		image(this.image, this.x, this.y, this.width, this.height)
	}

//making the rule, that the player and the enemy should meet in the midle for collision to happen    
    collision(playerInfo) {
        let enemyX = this.x + this.width / 2
		let enemyY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2

        if (dist(enemyX, enemyY, playerX, playerY) > 70) {
            return false;
        } else {    //show the game Over if the collision betwiin the "body" of the player and the enemy is more than 70%
            image(game.gameOver, 100, 18, 600, 467) 
            noLoop()

            return true
        }
    }
}