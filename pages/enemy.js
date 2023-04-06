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

    collision(playerInfo) {
        let enemyX = this.x + this.width / 2
		let enemyY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2

        if (dist(enemyX, enemyY, playerX, playerY) > 70) {
            return false;
        } else {  
            image(game.gameOver, 170, 100, 450, 300) 
            image(game.resetInfo, 250, 30, 280, 50)
            
            noLoop()

            return true
        }
    }
}