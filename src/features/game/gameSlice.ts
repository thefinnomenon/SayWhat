import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  status: 'NOTSTARTED',
  isModalVisible: false,
  goal: 5,
  words: [''],
  winner: '',
  round: 1,
  teamA: 0,
  teamB: 0,
  scoreWasUpdated: true,
};

export const { actions, reducer } = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state, _action) {
      return {
        ...initialState,
        words: state.words,
        status: 'PLAYING',
      };
    },
    endRound(state, _action) {
      state.round = state.round + 1;
      state.scoreWasUpdated = false;
    },
    updateScore(state, action) {
      if (action.payload === 'A') {
        state.teamA = state.teamA + 1;
      } else {
        state.teamB = state.teamB + 1;
      }

      if (state.teamA === state.goal || state.teamB === state.goal) {
        state.status = 'FINISHED';
        state.winner = action.payload;
        state.isModalVisible = true;
      }

      state.scoreWasUpdated = true;
    },
    clearModal(state, _action) {
      state.isModalVisible = false;
    },
  },
});

export default reducer;
