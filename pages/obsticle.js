class Obstacle {
	constructor(image) {
		this.image = image
		this.x = width
        this.y = (Math.random() * height) / 1.5;
		this.width = 50
		this.height = 50
	}
    //conditions to display the coffee-obsticle 
	draw() {
		this.x -= 4
		image(this.image, this.x, this.y, this.width, this.height)
	}

    //condition to count the score for the player
	collision(playerInfo) {
		
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
		if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
			return false
		} else {
			playerInfo.score += 1;
			
			document.querySelector(".coffee-counter").innerText = playerInfo.score
			
			return true
		} 
	}
}