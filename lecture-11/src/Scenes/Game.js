class OneDmovement extends Phaser.Scene {
    constructor() {
        super("GameScene");
        this.my = {sprite:{}};
        this.charX = 400;
        this.charY = 500;
        this.ballX = this.charX;  
         this.ballY = this.charY;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {

        this.load.setPath("./assets/");
        this.load.image("Green_bullet", "Green_bullet.png");
        this.load.image("ghost", "ghost.png");


        document.getElementById('description').innerHTML ='<h2>Game.js<br>Space - shoot// <br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        my.sprite.char = this.add.sprite(this.charX, this.charY, "ghost");
        my.sprite.ball = this.add.sprite(this.ballX, this.ballY, "Green_bullet");
        my.sprite.ball.visible = false;
        my.sprite.ball.active = false
        
        
    }   

    update() {
        let my = this.my;
        if(my.sprite.char.x != 0){
            if(this.aKey.isDown){
                my.sprite.char.x -= 10;
                if(my.sprite.char.x <= 0){
                  my.sprite.char.x = 10;
                }
        
            }
        }
        if(my.sprite.char.x != 0){
            if(this.dKey.isDown){
                my.sprite.char.x += 10;
                if(my.sprite.char.x >= 800){
                  my.sprite.char.x = 800;
                }
        
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            if (!my.sprite.ball.active) {
                my.sprite.ball.setPosition(my.sprite.char.x, my.sprite.char.y);
                my.sprite.ball.setActive(true).setVisible(true);
            }
        }

        if (my.sprite.ball.active) {
            my.sprite.ball.y -= 15;
            if (my.sprite.ball.y < 0) {
                my.sprite.ball.setActive(false).setVisible(false);
            }
        }
    
        
        
    }
}
