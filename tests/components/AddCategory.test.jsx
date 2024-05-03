import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("Pruebas en <AddCategory />", () => {
  test("Debe de cambiar el valor de la caja de texto ", () => {
    //   ! Renderizo el componmente a testear. Le paso una fumción ya que es Requerida para su funcionamiento natural.
    render(<AddCategory onNewCategory={() => {}} />);
    // ! Gracias a la renderización, con screen selecciono el input.
    const input = screen.getByRole("textbox");
    // ! Acá disparo un evento con el metodo input, indicandole el input a disparar, y sus opciones. En este caso el objeto con las propiedades que necesita la función para andar con normalidad.
    fireEvent.input(input, { target: { value: "Goku" } });
    // ! Luego evaluo que el value del input, sea el que dispare con anterioridad.
    expect(input.value).toBe("Goku");

    // screen.debug();
  });
  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Goku";
    // ! Asi creamos una función para poder testear con jest
    const onNewCategory = jest.fn();

    // ? Renderizamos el Componente
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    // ? Tenemos la referencia del form.
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    // ? Disparamos el evento submit del form.
    fireEvent.submit(form);
    // screen.debug();

    expect(input.value).toBe("");

    //  ! Aca estamos comprobando que la funciopn haya sido llamada.
    expect(onNewCategory).toHaveBeenCalled();

    // ! Aca estamos comprobando que la funcion haya sido llamada 1 vez en concreto.
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    // ! Aca estamos comprobando que la funcion haya sido llamada con el valor del input que nosotros disparamos con anterioridad.
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  test("No debe de llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
