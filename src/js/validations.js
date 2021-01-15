export const validEmail = (email) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
// after 9
export const validURL = (url) => {
  let regEx = /^(https?:\/\/)?(?:www\.)?[-a-zA-Z0-9:%._+~#=]{2,256}\.[a-zA-Z0-9()]{2,}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/gm;
  return regEx.test(url);
};
