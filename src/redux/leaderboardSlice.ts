import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Score {
  username: string;
  score: string;
  isNew?: boolean;
}

interface LeaderboardState {
  scores: Score[];
}

const initialState: LeaderboardState = {
  scores: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<Score>) => {
      const newScore = { ...action.payload, isNew: true };
      const updatedScores = [...state.scores, newScore]
        .sort((a, b) => a.score.localeCompare(b.score))
        .slice(0, 10);

      state.scores = updatedScores.map((score, index) => ({
        ...score,
        isNew: index === updatedScores.length - 1 ? true : false,
      }));
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
