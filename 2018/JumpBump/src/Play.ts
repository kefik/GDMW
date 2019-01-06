import { Players } from "./Players";
import { FlyingStar } from "./FlyingStar";
import { Level } from "./Level";
    
export class Play extends Phaser.Scene {

    players: Players;

    level: Level;

    scoreText: Phaser.GameObjects.Text;

    score: integer;

    constructor() {
        super("Play");
        this.score = 0;
    }

    create() {
        console.log("Play.create()");

        this.level = new Level(this);
        
        this.players = new Players(this, 1);
        
        this.physics.add.collider(this.players.plrs[0], this.level.platforms);

        this.physics.add.overlap(this.players.plrs[0], this.level.stars, this.collectStar, null, this);

        // SCORE TEXT
        this.scoreText = this.add.text(5, 5, "Score: 0", { fontFamily: "Arial Black", fontSize: 12, color: "#33ff33", align: 'left' }).setStroke('#333333', 1);
    }

    update ()
    {
        this.players.update();        
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

