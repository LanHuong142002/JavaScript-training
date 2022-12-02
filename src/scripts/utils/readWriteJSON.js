const fs = require('fs');

function readJSON() {
  try {
    fs.readFileSync('data/db.json', 'utf-8', (data) => {
      const notes = JSON.parse(data.toString());
      console.log(notes);
      return notes;
    });
  } catch (error) {
    console.log(error);
  }
}

const notes = [
  {
    id: '1668409580789',
    title: '',
    description: '123',
    deletedAt: '2022-11-24',
  },
  {
    id: '1669274380656',
    title: '',
    description: '123',
    deletedAt: '2022-11-24',
  },
  {
    id: '1669277423551',
    title: '',
    description: '54565',
    deletedAt: '2022-11-24',
  },
  {
    id: '1669278271059',
    title: '',
    description: '213',
    deletedAt: '2022-11-28',
  },
];

function saveJSON() {
  const data = JSON.stringify(notes, null, 2);
  try {
    fs.writeFileSync('data/db.json', data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// saveJSON();
readJSON();
export { readJSON, saveJSON };
