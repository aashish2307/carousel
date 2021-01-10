export const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
