import { Injectable } from "@angular/core";
  
@Injectable({
    providedIn: 'root'
})

export class QuizzStateService {
    private homoQuizzScore: number = 0;

    getHomoScore() {
        return this.homoQuizzScore;
    }

    incrementHomoScore(score) {
        this.homoQuizzScore = this.homoQuizzScore + score;
    }

    resetHomoScore() {
        this.homoQuizzScore = 0;
    }
}