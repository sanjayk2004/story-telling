
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Custom story template
const storyTemplate = ":insertx: woke up one morning and decided it was time to become a hero. \
They grabbed a backpack, left their house in :inserty:, and began an unforgettable journey. \
Along the way, they encountered a giant who :insertz:, but they managed to escape. \
Everyone remembers that day — especially Bob, who still tells the tale every year.";

const insertX = ["Luna the Brave", "Captain Marshmallow", "Shadow Fox"];
const insertY = ["Maple Town", "Cyber City", "Whispering Woods"];
const insertZ = ["challenged them to a riddle contest", "sneezed fireballs", "offered them a glowing sword"];

// Generate story on button click
function generateStory() {
  let newStory = storyTemplate;

  const x = randomValueFromArray(insertX);
  const y = randomValueFromArray(insertY);
  const z = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", x);
  newStory = newStory.replace(":inserty:", y);
  newStory = newStory.replace(":insertz:", z);

  if (customName.value.trim() !== '') {
    newStory = newStory.replace("Bob", customName.value.trim());
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', generateStory);
