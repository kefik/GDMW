import { FlyingStar } from "./FlyingStar";
    
export class Play extends Phaser.Scene {

    player: Phaser.Physics.Arcade.Sprite;

    cursors: Phaser.Input.Keyboard.CursorKeys;

    scoreText: Phaser.GameObjects.Text;

    score: integer;

    constructor() {
        super("Play");
        this.score = 0;
    }

    create() {
        console.log("Play.create()");

        this.add.image(400, 300, 'sky');

        var platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');

        this.player = this.physics.add.sprite(100, 450, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        var stars = this.physics.add.group({ allowGravity: false });

        //  x, y = center of the path
        //  width, height = size of the elliptical path
        //  speed = speed the sprite moves along the path per frame
        stars.add(new FlyingStar(this, 150, 100, 100, 100, 0.005), true);
        stars.add(new FlyingStar(this, 500, 200, 40, 100, 0.005), true);
        stars.add(new FlyingStar(this, 600, 200, 40, 100, -0.005), true);
        stars.add(new FlyingStar(this, 700, 200, 40, 100, 0.01), true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, platforms);

        this.physics.add.overlap(this.player, stars, this.collectStar, null, this);

        // SCORE TEXT
        this.scoreText = this.add.text(5, 5, "Score: 0", { fontFamily: "Arial Black", fontSize: 12, color: "#33ff33", align: 'left' }).setStroke('#333333', 1);
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }


    collectStar(player: Phaser.Physics.Arcade.Sprite, star: FlyingStar)
    {
      star.disableBody(true, true);
      this.score += 1;
      this.scoreText.text = "Score: " + this.score;
    }

    gameOver() {
        this.scene.restart();
    }

}

