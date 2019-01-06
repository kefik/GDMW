export class FlyingStar extends Phaser.Physics.Arcade.Sprite {
  
    speed: number;

    path: Phaser.Curves.Ellipse;
    pathIndex: integer;
    pathSpeed: number;
    pathVector: Phaser.Math.Vector2;

    constructor( scene: Phaser.Scene, x: number, y: number, width: number, height: number, speed: number ){
      super(scene, 0, 0, "bullet");

      Phaser.Physics.Arcade.Sprite.call(this, scene, x, y, 'star');

      //  This is the path the sprite will follow
      this.path = new Phaser.Curves.Ellipse(x, y, width, height);
      this.pathIndex = 0;
      this.pathSpeed = speed;
      this.pathVector = new Phaser.Math.Vector2();

      this.path.getPoint(0, this.pathVector);

      this.setPosition(this.pathVector.x, this.pathVector.y);
    }

    preUpdate(time: number, delta: number)
    {
      this.anims.update(time, delta);

      this.path.getPoint(this.pathIndex, this.pathVector);

      this.setPosition(this.pathVector.x, this.pathVector.y);

      this.pathIndex = Phaser.Math.Wrap(this.pathIndex + this.pathSpeed, 0, 1);
    }
  
}