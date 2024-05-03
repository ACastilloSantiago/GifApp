import GifItem from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";
describe("Prueba de <GifItem />", () => {
  const title = "goku";
  const url = "https://github.com/";
  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
  test("  debe de mostrar con el URL e el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);

    //! Con esto veo como se renderiza. screen.debug();

    // !Manera basica de testearlo, pero poco escalable al repetir mucho codigo :/.
    expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title);

    // ! Manera efectiva.

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
