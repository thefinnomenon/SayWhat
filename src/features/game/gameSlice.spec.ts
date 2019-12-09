import reducer, { initialState, actions } from './gameSlice';

describe('game reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle a fresh start game', () => {
    expect(
      reducer(
        { ...initialState, words: ['word1', 'word2', 'word3'] },
        actions.startGame(),
      ),
    ).toEqual({
      ...initialState,
      words: ['word1', 'word2', 'word3'],
      status: 'PLAYING',
    });
  });

  it('should handle a restart game', () => {
    expect(
      reducer(
        { ...initialState, words: ['word1', 'word2', 'word3'] },
        actions.startGame(),
      ),
    ).toEqual({
      ...initialState,
      words: ['word1', 'word2', 'word3'],
      status: 'PLAYING',
    });

    expect(
      reducer(
        {
          ...initialState,
          status: 'FINISHED',
          round: 6,
          winner: 'A',
          teamA: 5,
          teamB: 1,
        },
        actions.startGame(),
      ),
    ).toEqual({
      ...initialState,
      status: 'PLAYING',
    });
  });

  it('should handle round end', () => {
    expect(
      reducer(
        { ...initialState, round: 1, scoreWasUpdated: true },
        actions.endRound(),
      ),
    ).toEqual({
      ...initialState,
      round: 2,
      scoreWasUpdated: false,
    });
  });

  it('should handle update score for team A', () => {
    expect(
      reducer(
        {
          ...initialState,
          scoreWasUpdated: false,
          goal: 5,
          teamA: 0,
          teamB: 0,
        },
        actions.updateScore('A'),
      ),
    ).toEqual({
      ...initialState,
      scoreWasUpdated: true,
      goal: 5,
      teamA: 1,
      teamB: 0,
    });
  });

  it('should handle update score for team B', () => {
    expect(
      reducer(
        {
          ...initialState,
          scoreWasUpdated: false,
          goal: 5,
          teamA: 0,
          teamB: 0,
        },
        actions.updateScore('B'),
      ),
    ).toEqual({
      ...initialState,
      scoreWasUpdated: true,
      goal: 5,
      teamA: 0,
      teamB: 1,
    });
  });

  it('should handle update score with win for team A', () => {
    expect(
      reducer(
        {
          ...initialState,
          scoreWasUpdated: false,
          goal: 5,
          teamA: 4,
          teamB: 0,
        },
        actions.updateScore('A'),
      ),
    ).toEqual({
      ...initialState,
      status: 'FINISHED',
      scoreWasUpdated: true,
      isModalVisible: true,
      winner: 'A',
      goal: 5,
      teamA: 5,
      teamB: 0,
    });
  });

  it('should handle update score with win for team B', () => {
    expect(
      reducer(
        {
          ...initialState,
          scoreWasUpdated: false,
          goal: 5,
          teamA: 0,
          teamB: 4,
        },
        actions.updateScore('B'),
      ),
    ).toEqual({
      ...initialState,
      status: 'FINISHED',
      scoreWasUpdated: true,
      isModalVisible: true,
      winner: 'B',
      goal: 5,
      teamA: 0,
      teamB: 5,
    });
  });

  it('should handle clearing modal', () => {
    expect(
      reducer({ ...initialState, isModalVisible: true }, actions.clearModal()),
    ).toEqual({
      ...initialState,
      isModalVisible: false,
    });
  });
});
