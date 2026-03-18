"use strict";
import {TSSprite, TSpriteButton} from "libSprite";
import {startGame} from "./FlappyBird.mjs";

export class TMenu {
    #spTitle;
    #spPlayBtn;
    #spCountDown;
    #sfCountDown;
    constructor(aSpcvs, aSPI){
        this.#spTitle= new TSprite (aSpcvs, aSPI.flappyBird, 200, 100);
        this.#spPlayBtn= new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180 );
        this.#spPlayBtn.addEventListener("click", this.#spPlayBtnClick.bind(this));
        this.#spCountDown= new TSSpriteNumber(aSpcvs, aSPI.numberBig,280,190);
        this.#sfCountDown.visible= false;
        this.#sfCountDown= null;
        this.#sfRunning= null;

    }
    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountDown.draw();
    }

    countDown();{
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
        setTimeout(this.countDown.bind(this), 1000);
    } else {
        this.#spCounDown.visible= false;
        this.#spTitlle.hidden=true;
        this.#sfRunning <new TSoundFile(fbrunnning);
        this.#sfRunning.play();
        startGame();
    }
    
   }


   spPlayBtnClick(){
    console.log("Click!");
    this.#spPlayBtn.hidden=true;
    this.#spCountDown.visible=true;
    this.#spCountDown..value=3;
    this.#sfCountDown= new TSoundFile(fnCountDown);
    this.#sfCountDown.play();
    setTimeout(this.countDown.bind(this), 1000);
    
   }
}