const ATLEAST_ALPHABET_EXP = /[A-Z]/;
const ATLEAST_NUM_EXP = /[0-9]/;
const ATLEAST_SPECIALCHARACTER_EXP = /[*@!#%&()^~{}]+/;
const EMAIL_REG_EXP =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const NAME_REG_EXP = /^[a-zA-Z ,.'-]+$/;
const PASSWORD_REG_EXP =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9#?!@$%^&*-]).{8,}$/;
const PHONE_REG_EXP =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

export {
  ATLEAST_NUM_EXP,
  ATLEAST_ALPHABET_EXP,
  ATLEAST_SPECIALCHARACTER_EXP,
  EMAIL_REG_EXP,
  NAME_REG_EXP,
  PHONE_REG_EXP,
  PASSWORD_REG_EXP,
};
