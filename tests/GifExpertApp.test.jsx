import { render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
  test('Debe de renderizar el componente', () => {
    render(<GifExpertApp />);
    //   screen.debug();
      expect(screen.getByText('One Punch'))
  });
});
