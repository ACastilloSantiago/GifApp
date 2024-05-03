import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");

    // console.log(gifs);

    // ! En este ejemplo estamos comprobando si el arreglo es mayor que 0. Pero no es una manera tan efectiva de corroborar que funciona. Porque solo evaluo que haya un arreglo con elementos.
    expect(gifs.length).toBeGreaterThan(0);

    // ! De esta manera evaluamos que el elemento en la posicion 0 tenga un objeto con las siguientes propiedades, indicando que el valor que tengan sea cualquiera, pero un string
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
