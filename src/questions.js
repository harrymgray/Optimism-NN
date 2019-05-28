export const trainingQuestions = [
  {
    id: 'tq1',
    question: 'Do you often see the best in things?',
    options: [
      { id: 'tq1a', label: 'Always', value: 1.0 },
      { id: 'tq1b', label: 'Usually, yeah', value: 0.7 },
      { id: 'tq1c', label: 'Not really', value: 0.2 },
      { id: 'tq1d', label: 'Never!', value: 0.0 },
    ],
  },
  {
    id: 'tq2',
    question: 'Do you feel like most things are your fault?',
    options: [
      { id: 'tq2a', label: 'Everything I touch dies', value: 0.0 },
      { id: 'tq2b', label: 'Yes', value: 0.1 },
      { id: 'tq2c', label: 'Sometimes', value: 0.4 },
      { id: 'tq2d', label: 'Rarely', value: 0.8 },
    ],
  },
  {
    id: 'tq3',
    question: 'You look wonderful today.',
    options: [
      { id: 'tq3a', label: 'Yah ik', value: 0.9 },
      { id: 'tq3b', label: 'Thanks!', value: 0.7 },
      { id: 'tq3c', label: 'I hate compliments', value: 0.1 },
      { id: 'tq3d', label: 'Ok', value: 0.5 },
    ],
  },
  {
    id: 'tq4',
    question: 'How do you feel about perfection?',
    options: [
      { id: 'tq4a', label: 'Meh', value: 0.5 },
      { id: 'tq4b', label: 'Perfection is important to me', value: 0.3 },
      { id: 'tq4c', label: 'Everything I do must be perfect', value: 0.2 },
      { id: 'tq4d', label: "I don't mind as long as everyone's happy!", value: 1.0 },
    ],
  },
  {
    id: 'tq5',
    question: 'Imagine you have a lasagna. It is a beautiful lasagna. An obscured wet floor sign causes you to slip and decant your lasagne on the floor.',
    options: [
      { id: 'tq5a', label: 'I deserved that.', value: 0.0 },
      { id: 'tq5b', label: "These things happen. I'll get another", value: 1.0 },
      { id: 'tq5c', label: 'Top 5 worst days of my life', value: 0.3 },
      { id: 'tq5d', label: 'Rest in Pepperoni, lasagna.', value: 0.5 },
    ],
  },
];

export const validationQuestions = [
  {
    id: 'vq1',
    question: 'How full is the proverbial glass?',
    options: [
      { id: 'vq1a', label: 'As empty as MY SOUL', value: 0.0 },
      { id: 'vq1b', label: 'Definitely half empty', value: 0.3 },
      { id: 'vq1c', label: 'It\'s half full', value: 0.6 },
      { id: 'vq1d', label: 'Full to the brim', value: 1.0 },
    ],
  },
];
