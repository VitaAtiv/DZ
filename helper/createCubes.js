import { createCub } from "./createCub.js"



export function createCubes(count, countCubes) {
  let size = countCubes === 0 ? 50 : 50 + countCubes * 10;
  console.log(countCubes);
  const cubes = [];
  for (let index = 0; index < count; index++) {
    const elem = createCub(size);
    cubes.push(elem);
    size += 10;
  }
  return cubes;
}
