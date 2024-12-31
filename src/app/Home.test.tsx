import Home from './page';
import { renderWithProviders, screen, waitFor } from './utils/test-utils';
import {server} from '../mocks/node';

describe('Home', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  

  it('renders msw', async () => {
    renderWithProviders(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Categories')).toBeInTheDocument();
    });

    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  })
});
