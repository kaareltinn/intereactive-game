{
  numberGames: [
    {
      id: 0,
      targetNumber: 5,
      isGuessed: true,
      history: [
        { guess: 3, message: 'was lower than target' },
        { guess: 6, message: 'was greater than target' },
        { guess: 5, message: 'was correct' }
      ]
    },
    ...
  ],
  wordGames: [
    {
      id: 0,
      targetWord: 'basil',
      isGuessed: false,
      history: [
        { guess: 'ruler' },
        { guess: 'grill' }
      ]
    },
    ...
  ]
}
