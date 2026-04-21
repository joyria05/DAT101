"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, hero, obstacles, baits, EGameStatus, background, resetObstaclePassed } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";


const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";



export class TMenu {
    #spTitle;
    #spPlayBtn;
    #spCountDown;
    #sfCountDown;
    #sfRunning;
    #spGameScore;
    #spGameOver;
    #spMedal;
    #spFinalScore;
    #spHighScore;
    #spInfoText;
    #highScores = [0, 0, 0, 0, 0];
    #isMuted = false;


    constructor(aSpcvs, aSPI){
        this.#spTitle= new TSprite (aSpcvs, aSPI.flappyBird, 168, 100);

        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 200, 180 );
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 240, 155);
        this.#spCountDown.visible = false;
        
        
        
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
        this.#spGameScore.alpha = 0.5;

        this.#spGameOver= new TSprite(aSpcvs, aSPI.gameOver, 180, 120);
        this.#spGameOver.hidden = true;

        this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 205,  162);
        this.#spMedal.hidden = true;
        this.#spMedal.index = 3;

        this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 260, 175);
        this.#spFinalScore.visible = false;

        this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 260, 145);
        this.#spHighScore.visible = false;

        this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 150, 200);
        this.#spInfoText.hidden = true;

        this.#sfCountDown = null;
        this.#sfRunning = null;
        
    }

    getScore(){
        return this.#spGameScore.value;
    }

    incGameScore(aScore){
        this.#spGameScore.value += aScore; 


    }

    stopSound(){
        if (this.#sfRunning) this.#sfRunning.stop();


    }

    setSoundMute(aIsMuted) {
        this.#isMuted = aIsMuted;
        if (!this.#sfRunning) return;

        if (aIsMuted) {
            this.#sfRunning.stop();
        } else {
            this.#sfRunning.play();
        }
    }

    setDayNight(aIsDayMode) {
        // Sett day/night for background
        background.setDayNight(aIsDayMode);
        
        // Oppdater alle obstacles
        for (let i = 0; i < obstacles.length; i++) {
            const obstacle = obstacles[i];
            if (aIsDayMode) {
                obstacle.setDayNight(true);
            } else {
                obstacle.setDayNight(false);
            }
        }
    }


    showGameOver(finalScore) {
        // Stopp all lyd
        this.stopSound();
        if (this.#sfCountDown) this.#sfCountDown.stop();


       


        // Skjul in-game UI
        this.#spGameScore.visible = false;
        this.#spCountDown.visible = false;
        this.#spInfoText.hidden = true;

        // Vis game over UI
        this.#spGameOver.hidden = false;
        this.#spMedal.hidden = false;
        this.#spFinalScore.visible = true;
        this.#spHighScore.visible = true;

        // Oppdater highscore hvis nødvendig
        const highScore = Math.max(...this.#highScores, finalScore);
        if (finalScore > Math.max(...this.#highScores)) {
            this.#highScores.push(finalScore);
            this.#highScores.sort((a, b) => b - a);
            if (this.#highScores.length > 5) {
                this.#highScores.pop();
            }
        }

        this.#spFinalScore.value = finalScore;
        this.#spHighScore.value = highScore;

        // score → medal index
        if  (finalScore >= 3) {
            this.#spMedal.index =1; // gull
        } else if (finalScore === 2) { 
            this.#spMedal.index = 2; // Sølv
        } else if (finalScore === 1) {
            this.#spMedal.index = 3; // bronse
        } else {
            this.#spMedal.index = 0; // ingenting
        }
        


        // Vis play button
        EGameStatus.state = EGameStatus.menu;
        this.#spPlayBtn.hidden = false;

        this.updateUI();
    }

   // tekste av flappy bird går ned i 3,2,1
       
        updateUI(){
            this.#spTitle.hidden =(EGameStatus.state !== EGameStatus.menu);
            this.#spPlayBtn.hidden = (EGameStatus.state !== EGameStatus.menu);
            this.#spCountDown.visible =(EGameStatus.state === EGameStatus.countDown);
            this.#spGameScore.visible = (EGameStatus.state === EGameStatus.gaming);
        }

    countDown() {
        this.#spCountDown.value--;
        if (this.#spCountDown.value > 0) {
            setTimeout(this.countDown.bind(this), 1000);
        } else {
            this.#spCountDown.visible = false;
            this.#spInfoText.hidden = true;
            EGameStatus.state = EGameStatus.gaming;
            this.#sfRunning = new TSoundFile(fnRunning);
            if (!this.#isMuted) {
                this.#sfRunning.play();
            }
            startGame();
            EGameStatus.state = EGameStatus.gaming;
            this.updateUI();
        }
    }


    spPlayBtnClick() {
        // Reset spillet
        hero.restart();
        obstacles.length = 0;
        baits.length = 0;
        resetObstaclePassed();
        this.#spGameScore.value = 0;
        

        // Skjul game over UI
        this.#spGameOver.hidden = true;
        this.#spMedal.hidden = true;
        this.#spFinalScore.visible = false;
        this.#spHighScore.visible = false;

        // Sett state til countdown
        EGameStatus.state = EGameStatus.countDown;

        // Vis countdown UI
        this.#spPlayBtn.hidden = true;
        this.#spCountDown.visible = true;
        this.#spCountDown.value = 3;
        this.#spInfoText.hidden = false;  // Vis "Get Ready"
        this.#spInfoText.index = 0;       // "Get Ready" frame
        this.#spGameScore.visible = true; // Vis score igjen

        // Start countdown lyd
        this.#sfCountDown = new TSoundFile(fnCountDown);
        if (!this.#isMuted) {
            this.#sfCountDown.play();
        }

        setTimeout(this.countDown.bind(this), 1000);
        this.updateUI();
    }

    // skal fade etter countdown

    fadeOutTitle(){
        let a = 1;
        const fade = () => {
            a -= 0.05;
            this.#spTitle.alpha = a;
            if (a > 0) requestAnimationFrame(fade);
            else this.#spTitle.hidden = true;
        };
        fade();

    }

    getHighScore() {
        return Math.max(...this.#highScores, 0);
    }

    draw() {
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountDown.draw();
        this.#spGameScore.draw();
        this.#spInfoText.draw();

        this.#spGameOver.draw();
        this.#spMedal.draw();
        this.#spFinalScore.draw();
        this.#spHighScore.draw();
    }
}
