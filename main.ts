controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
    }
})
let jump = 0
scene.setBackgroundColor(10)
tiles.setCurrentTilemap(tilemap`level`)
let mySprite = sprites.create(assets.image`mushhead`, SpriteKind.Player)
mySprite.ay = 300
controller.moveSprite(mySprite, 100, 0)
jump = 0
scene.cameraFollowSprite(mySprite)
