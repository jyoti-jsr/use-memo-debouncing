import faker from "faker";

export const fakeNames = Array.from(Array(4000), () => {
  return faker.name.findName();
});
