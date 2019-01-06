import { FlyingStar } from "./FlyingStar";

export class Level {

    scene: Phaser.Scene;

    platforms: Phaser.Physics.Arcade.StaticGroup;

    stars: Phaser.Physics.Arcade.Group

    constructor( scene: Phaser.Scene ){
      
      this.scene = scene;

      scene.add.image(400, 300, 'sky');

      this.platforms = scene.physics.add.staticGroup();

      this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
      this.platforms.create(600, 400, 'ground');
      this.platforms.create(50, 250, 'ground');

      this.stars = scene.physics.add.group({ allowGravity: false });

        //  x, y = center of the path
        //  width, height = size of the elliptical path
        //  speed = speed the sprite moves along the path per frame
      this.stars.add(new FlyingStar(scene, 150, 100, 100, 100, 0.005), true);
      this.stars.add(new FlyingStar(scene, 500, 200, 40, 100, 0.005), true);
      this.stars.add(new FlyingStar(scene, 600, 200, 40, 100, -0.005), true);
      this.stars.add(new FlyingStar(scene, 700, 200, 40, 100, 0.01), true);
    }
  
}