const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Utility: pick a random value from an array
function randomValueFromArray(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Template for the story
const storyTemplate = "It was 94 fahrenheit outside, so :insertx: went for a walk. \
When they got to :inserty:, they stared in horror for a few moments, then :insertz:. \
Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Possible replacements
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

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

  // Unit conversion if UK checkbox is checked
  const uk = document.getElementById("uk");
  if (uk && uk.checked) {
    const temperatureC = Math.round((94 - 32) * 5 / 9) + " centigrade";
    const weightStone = Math.round(300 * 0.071429) + " stone";
    storyText = storyText.replace("94 fahrenheit", temperatureC);
    storyText = storyText.replace("300 pounds", weightStone);
  }

  story.textContent = storyText;
  story.style.visibility = 'visible';
}

// Event listener for button
if (randomize) {
  randomize.addEventListener('click', generateStory);
}
