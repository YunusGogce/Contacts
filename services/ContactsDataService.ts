import {
  ref,
  set,
  get,
  remove,
  child,
  query,
  orderByChild,
} from 'firebase/database';
import { uuid } from 'vue-uuid';
import db from './firebase';
import IContact from '~/models/IContact';
import IMessage from '~/models/IMessage';
import MessageType from '~/models/MessageType';

class ContactsDataService {
  async getAll() {
    try {
      const result = await get(
        query(ref(db, 'contacts'), orderByChild('timestamp'))
      );
      return result.val();
    } catch (error) {
      console.error(error);
    }
  }

  async get(contactId: string) {
    const dbRef = ref(db);
    try {
      const result = await get(child(dbRef, `contacts/${contactId}`));
      return result.val();
    } catch (error) {
      console.error(error);
    }
  }

  async create(contact: IContact) {
    contact.id = uuid.v4();
    contact.timestamp = Math.floor(Date.now() / 1000);
    try {
      await set(ref(db, `contacts/${contact.id}`), contact);
      const result: IMessage = {
        text: 'Nieuwe contact is succesvol aangemaakt!',
        type: MessageType.Success,
      };
      return result;
    } catch (error) {
      console.error(error);
      const result: IMessage = {
        text: `Er is iets fout gegaan: ${String(error)}`,
        type: MessageType.Error,
      };
      return result;
    }
  }

  async update(contact: IContact) {
    try {
      await set(ref(db, `contacts/${contact.id}`), contact);
      const result: IMessage = {
        text: 'Je wijziging is succesvol opgeslagen!',
        type: MessageType.Success,
      };
      return result;
    } catch (error) {
      console.error(error);
      const result: IMessage = {
        text: `Er is iets fout gegaan: ${String(error)}`,
        type: MessageType.Error,
      };
      return result;
    }
  }

  async delete(contactId: string) {
    try {
      await remove(ref(db, `contacts/${contactId}`));
      const result: IMessage = {
        text: 'Contact verwijderd',
        type: MessageType.Success,
      };
      return result;
    } catch (error) {
      console.error(error);
      const result: IMessage = {
        text: `Er is iets fout gegaan: ${String(error)}`,
        type: MessageType.Error,
      };
      return result;
    }
  }
}

export default new ContactsDataService();
