export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `My identity ${i + 1}`,
      artist: 'Nelson Niyakire',
      description: `This is one of the masterpieces by Nelson Niyakire, showcasing his emotional honesty and his love for the beauty of everyday life.`,
      year: `Painted in 2015`,
      link: 'https://github.com/ChrisDash6',
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `African beauty ${i + 5}`,
      artist: 'Nelson Niyakire',
      description: `Exceptional pieces that showcase Nelson's remarkable ability to capture emotion and atmosphere.`,
      year: `Painted in 2018`,
      link: 'https://github.com/ChrisDash6',
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Freedom ${i + 9}`,
      artist: 'Nelson Niyakire',
      description: `With its striking use of color and brushwork,this is a testament to Nelson's artistic genius.`,
      year: `Painted in 2019`,
      link: 'https://github.com/ChrisDash6',
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Life ${i + 13}`,
      artist: 'Nelson Niyakire',
      description: `Artwork ${
        i + 13
      } is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
      year: `Year 2020`,
      link: 'https://github.com/ChrisDash6',
    },
  })),
];