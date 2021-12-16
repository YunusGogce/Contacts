import IContact from '~/models/IContact';

const validation = {
  validateForm(contact: IContact) {
    const valid = {
      result: false as boolean,
      reason: '' as string,
    };

    if (contact.name && contact.type) {
      valid.result = true;
      if (contact.email) {
        const regexEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (contact.email.match(regexEmail)) {
          valid.result = true;
        } else {
          valid.result = false;
          valid.reason = 'Email is onjuist.';
        }
      }
    } else {
      valid.reason = 'Vul de verplichte velden in.';
    }

    return valid;
  },
};

export default validation;
