  export class Boot extends Phaser.Scene {

      constructor(){
          super("Boot");
      }

      preload() {
          console.log("Boot.preload()");
          this.load.setBaseURL("https://labs.phaser.io/")
          this.load.image('sky', 'src/games/firstgame/assets/sky.png');
          this.load.image('ground', 'src/games/firstgame/assets/platform.png');
          this.load.image('star', 'src/games/firstgame/assets/star.png');
          this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
      }

      create() {
        console.log("Boot.create()");
        this.scene.start("Play");
      }

  }