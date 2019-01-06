import { Boot } from "./Boot";
import { Play } from "./Play";

export var gameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: 0x000000,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 }
                //,debug = false;
            }
        },
        scene: [Boot, Play],        
    };