import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Dragon ball';

  test('debe de mostrar el loading inicialmente', () => {
    // ! Con este metodo["mockReturnValue"] simulo lo que deveria retornar la funcion. Indicando como funcionara.

    // ? En este test se que el loading es inicial, lo cual el arreglo de imagenes tiene que estar vacio y el isLoading en true.
        useFetchGifs.mockReturnValue({
          images: [],
          isLoading: true,
        });
    render(<GifGrid category={category} />);

    screen.debug();

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    // ! Con este metodo simulo lo que deveria retornar la funcion.

    const gifs = [
      { id: 'abc', title: 'Saitama', url: 'http://' },
      { id: '12', title: 'saitama', url: 'http://asd' },
    ]; 
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    // screen.debug( )

    // ? Aca estoy comprobando que al renderizar el componente con la informacion que retorna con el mock de useFetch, contenga dos imagenes. Ya que el arreglo que le dimos, tiene dos.
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
