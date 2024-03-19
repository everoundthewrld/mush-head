scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vy = 0
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    shootdirection = 3
})
function random () {
    snake = sprites.create(assets.image`snake enemy`, SpriteKind.Enemy)
    tiles.placeOnTile(snake, tiles.getTileLocation(7, 6))
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shootdirection == 1) {
        projectile = sprites.createProjectileFromSprite(assets.image`laser pt1`, mushhead, 100, 0)
    } else if (shootdirection == 2) {
        projectile = sprites.createProjectileFromSprite(assets.image`laser pt1`, mushhead, -100, 0)
    } else if (shootdirection == 3) {
        projectile = sprites.createProjectileFromSprite(assets.image`laser pt1`, mushhead, 0, -100)
    } else if (shootdirection == 4) {
        projectile = sprites.createProjectileFromSprite(assets.image`laser pt1`, mushhead, 0, 100)
    }
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 5 5 5 5 2 . . 
        . . . . 2 2 4 4 5 5 5 5 5 5 . . 
        . . 4 4 4 4 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 4 4 2 2 4 5 5 5 5 5 5 5 . . 
        . . . . . . 2 2 4 5 5 5 5 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 4 . . . . . . 
        . . . . . . 5 4 . 4 4 . . . . . 
        . . . . . . 5 . . . 4 2 2 4 . . 
        . . . . . 5 4 . . . 2 2 5 4 4 . 
        . . . . . 5 4 . 2 2 4 5 5 5 4 . 
        . . 2 2 2 5 4 4 4 4 4 5 5 5 4 . 
        . . 5 5 5 5 4 5 5 5 5 5 5 5 4 . 
        . . 2 2 2 5 4 4 4 4 4 5 5 5 4 . 
        . . . . . 5 4 . 2 2 4 5 5 5 4 . 
        . . . . . 5 4 . . . 2 2 5 4 4 . 
        . . . . . . 5 . . . 4 2 2 4 . . 
        . . . . . . 5 4 . 4 4 . . . . . 
        . . . . . . . 5 5 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 . . . 4 . . . . . 
        . . . . 4 4 . . . . 4 4 . . . . 
        . . . . 4 . . . . . . 4 4 . . . 
        . . . . . . . . . . . . 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . 4 . . . . . . . . . . . . . 
        . . 4 . . . . . . . . . . 4 . . 
        . . 4 . . . . . . . . . . 4 . . 
        . . . . . . . . . . . . . 4 . . 
        . . . . . . . . . . . . . . . . 
        . . . 4 . . . . . . . . . . . . 
        . . . 4 4 . . . . . . 4 . . . . 
        . . . . 4 4 . . . . 4 4 . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        mushhead.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    shootdirection = 2
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    shootdirection = 1
})
function snakeconstshooting () {
    snakeshoot = sprites.createProjectileFromSprite(assets.image`snakeshoot`, snake, 100, 0)
    for (let index = 0; index < 0; index++) {
    	
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    shootdirection = 4
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    snakebar.value += -1
    snake.startEffect(effects.trail, 200)
    if (snakebar.value == 0) {
        game.gameOver(true)
        game.setGameOverMessage(true, "You win!")
    }
})
let snakeshoot: Sprite = null
let projectile: Sprite = null
let jump = 0
let snakebar: StatusBarSprite = null
let snake: Sprite = null
let shootdirection = 0
let mushhead: Sprite = null
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`level`)
mushhead = sprites.create(assets.image`mushhead`, SpriteKind.Player)
shootdirection = 1
random()
snake.setStayInScreen(true)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mushhead)
snakebar = statusbars.create(20, 4, StatusBarKind.Health)
snakebar.attachToSprite(snake)
mushhead.ay = 300
controller.moveSprite(mushhead, 100, 0)
jump = 0
scene.cameraFollowSprite(mushhead)
game.onUpdate(function () {
    if (snake.isHittingTile(CollisionDirection.Left)) {
        snake.vx += 80
    } else if (snake.isHittingTile(CollisionDirection.Right)) {
        snake.vx += -80
    }
})
game.onUpdateInterval(500, function () {
    snake.setVelocity(randint(-110, 90), randint(-80, 100))
})
game.onUpdateInterval(500, function () {
	
})
