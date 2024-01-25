// String: Declare Five Animal Sounds
const animalSounds = "cow,dog,sheep,cat,chicken";
const [cow, dog, sheep, cat, chicken] = animalSounds.split(',');

// String: Declare Four Traditional Animal Names
const traditionalAnimals = "cow,horse,sheep,pig";
const [cow2, horse, sheep2, pig] = traditionalAnimals.split(',');

// String: Declare Three Traditional Animal Colors
const animalColors = "cow,brown,spotted";
const [cow3, brown, spotted] = animalColors.split(',');

// Array: Declare Seven Traditional Rainbow Color Variables
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Array: Declare Six Rainbow Color Variables Using Initials
const initialsRainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
const [r, o, y, g, b, v] = initialsRainbowColors;

// Array: Declare Indigo Using 'indg'
const indigoArray = [null, null, null, null, null, 'indigo'];
const [,,,,, indg] = indigoArray;

// Destructuring the 'muppet' object
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const { muppetName, color, song, job, partner } = muppet;

// Destructuring the 'nestedMuppet' object
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { 
  nestedName, 
  nestedColor, 
  album: { 
    theMuppetMovie: { song1, song2, song3, song4 } 
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;
