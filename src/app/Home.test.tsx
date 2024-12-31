import { useGetCategoriesQuery } from '@/lib/features/categories/categorySlice';
import Home from './page';
import { renderWithProviders, screen, waitFor } from './utils/test-utils';
import { http, HttpResponse, delay } from 'msw'

jest.mock('@/lib/features/categories/categorySlice', () => ({
  useGetCategoriesQuery: jest.fn(),
}));

describe('Home', () => {
  it('renders a heading', async () => {
    const mockData = {
      data: [
        { id: '1', name: 'Category 1', description: 'Description 1', is_active: true, created_at: '2024-01-01' },
        { id: '2', name: 'Category 2', description: 'Description 2', is_active: false, created_at: '2024-01-02' },
      ],
    };

    (useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isFetching: false,
      error: null,
    });

    renderWithProviders(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Categories')).toBeInTheDocument();
    });

    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  // it('renders msw', async () => {
  //   const handlers = [
  //     http.get('/api/user', async () => {
  //       await delay(150)
  //       return HttpResponse.json('John Smith')
  //     })
  //   ]
    
  //   const server = setupServer(...handlers)
  // })
});
