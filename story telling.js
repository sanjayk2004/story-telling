const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Utility: pick a random value from an array
function randomValueFromArray(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Template for the story
const storyTemplate = ":insertx: woke up one morning and decided it was time to become a hero. \
They grabbed a backpack, left their house in :inserty:, and began an unforgettable journey. \
Along the way, they encountered a giant who :insertz:, but they managed to escape. \
Everyone remembers that day — especially Bob, who still tells the tale every year.";

const insertX = ["Luna the Brave", "Captain Marshmallow", "Shadow Fox"];
const insertY = ["Maple Town", "Cyber City", "Whispering Woods"];
const insertZ = ["challenged them to a riddle contest", "sneezed fireballs", "offered them a glowing sword"];

// Generate and display story
function generateStory() {
  let storyText = storyTemplate;

  const x = randomValueFromArray(insertX);
  const y = randomValueFromArray(insertY);
  const z = randomValueFromArray(insertZ);

  storyText = storyText.replace(/:insertx:/g, x);
  storyText = storyText.replace(/:inserty:/g, y);
  storyText = storyText.replace(/:insertz:/g, z);

  // Custom name substitution
  if (customName.value.trim() !== '') {
    storyText = storyText.replace("Bob", customName.value.trim());
  }

  

  story.textContent = storyText;
  story.style.visibility = 'visible';
}

// Event listener for button
if (randomize) {
  randomize.addEventListener('click', generateStory);
}
