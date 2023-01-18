//A utility function to create random objects with different properties of a size given from the  param

export default function generateObjects(v) {
  const names = [
    "Earth",
    "mars",
    "neptune",
    "pluto",
    "asteroid",
    "sun",
    "venus",
    "uranus",
    "jupiter",
    "mercury",
  ];
  const types = ["circle", "square", "triangle"];

  const array = Array.from({ length: v }, () => {
    return {
      //randomly select name and type from the array above
      name: names[Math.floor(Math.random() * names.length)],
      type: types[Math.floor(Math.random() * types.length)],
      //randomly generate a hex number
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      size: Math.random() * (15 - 5 + 1) + 5,
      position: {
        x: Math.floor(Math.random() * 800),
        y: Math.floor(Math.random() * 800),
      },
      velocity: {
        x: Math.random() * 5 * (Math.random() <= 0.5 ? -1 : 1),
        y: Math.random() * 5 * (Math.random() <= 0.5 ? -1 : 1),
      },
    };
  });

  return array;
}
