export class Players {

    scene: Phaser.Scene;

    cursors: Phaser.Input.Keyboard.CursorKeys;

    plrs: Phaser.Physics.Arcade.Sprite[];

    constructor( scene: Phaser.Scene, number: integer ){
      
      this.scene = scene;

      this.plrs = [ null ];

      this.plrs[0] = scene.physics.add.sprite(100, 450, 'dude');

      this.plrs[0].setBounce(0.2);
      this.plrs[0].setCollideWorldBounds(true);

      this.cursors = scene.input.keyboard.createCursorKeys();

      scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
      });

      scene.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
      });

      scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
      });
    }

    update() {
      if (this.cursors.left.isDown)
        {
            this.plrs[0].setVelocityX(-160);
            this.plrs[0].anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.plrs[0].setVelocityX(160);
            this.plrs[0].anims.play('right', true);
        }
        else
        {
            this.plrs[0].setVelocityX(0);
            this.plrs[0].anims.play('turn');
        }

        if (this.cursors.up.isDown && this.plrs[0].body.touching.down)
        {
            this.plrs[0].setVelocityY(-330);
        }
    }
  
}