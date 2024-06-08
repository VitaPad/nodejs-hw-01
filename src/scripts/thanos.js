import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    const contacts = JSON.parse(data);
    for (let i = 0; i < contacts.length; i++) {
        if (Math.random() < 0.5) {
          contacts.splice(i, 1);
        }
      }
      await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
