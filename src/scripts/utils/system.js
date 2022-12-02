import fs from 'fs';

export const saveDataToJSON = (newData) => {
  fs.writeFileSync('data/db.json', JSON.stringify(newData));
};

export const getDataFromJSON = () => {
  JSON.parse(fs.readFileSync('data/db.json').toString());
};

// const notes = {
//   // id: new Date().getTime().toString(),
//   title: 'note.title',
//   description: 'note.description',
//   deletedAt: '',
// };

// saveDataToJSON(notes);
