"use strict";
import{TSprite} from "libSprite";



export class TBackground {
    #spriteBackground;
    #spriteGround;
#spCountDown;

    constructor(aSPI) {
        this.#spriteBackground = new TSprite (aSpcvs, aSPI.background,0,0);
        const GroundPosY= aSPI.background.height;
        this.#spriteGround=new TSprite(aSpcvs, aSPI.groundPosY);
    }

//constructor(SpriteInfoList)//


    drawBackground(){
        this#spriteBackground.draw();
    }
    

    drawGround(){
        this.#spriteGround.draw();
    }
    
    animate (){
        const x= this.#spriteGround.x + (this.#spriteGround .width/ 2);
        if(x < 5){
            this.#spriteGround.x= 0;
        }else{
            this.#spriteGround.x--;
            }
        }
    }