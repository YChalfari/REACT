export const getNames = (arr) => arr.map((person) => person.name);
export const preNineties = (arr) =>
  arr.filter((person) => person.birthday.slice(-4) < 1990);
