import { defineStore } from 'pinia';

interface ScoreState {
  score: number;
}

export const useScoreStore = defineStore({
  id: 'score',
  state: (): ScoreState => ({
    score: 0,
  }),
  actions: {
    updateScore(newScore: number) {
      this.score = newScore;
    },
    resetScore() {
      this.score = 0;
    },
  },
});