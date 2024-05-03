import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe de regresar el estado inicial', () => {
    // ? Estado inicial: images=[] e isLoading=true.

    // ! renderHook es un metodo que nos permite reendreizar hooks o customhooks que necesitan estar en el contexto de un componente de react con sus respectivos ciclos de vida.
    const { result } = renderHook(() => useFetchGifs('Dragon Ball Z'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    // ? En este caso, tengo que evaluar en el momento de que ya se hayan cargado las imagenes.
    const { result } = renderHook(() => useFetchGifs('Dragon Ball Z'));


    // ? En este caso tengo que mandarle un booleano. Entonces utilizamos el expect para que este pendiente cuando realice el cambio al retornar true una vez que haya una imagen. 
      await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
      );
      
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);

    expect(isLoading).toBeFalsy();
  });
});
