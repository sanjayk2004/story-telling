function generateStory() {
  const name = document.getElementById("characterName").value || "Alex";
  const stories = [
    `${name} was walking through the enchanted forest when they found a glowing map on the ground.`,
    `One day, ${name} built a rocket ship from scratch and flew to the moon.`,
    `${name} discovered a talking cat that guided them to a hidden treasure under the old oak tree.`,
    `In a land of dragons and magic, ${name} became the youngest wizard in history.`,
    `${name} was just an ordinary kid until a meteor gave them the power to control time.`
  ];
  const randomIndex = Math.floor(Math.random() * stories.length);
  document.getElementById("story").innerText = stories[randomIndex];
}
