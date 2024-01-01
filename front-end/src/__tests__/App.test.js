import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders App component', () => {
    render(<App/>);
    const text = screen.getByText(/Jobly/i);
    expect(text).toBeInTheDocument();
  })

  it('renders with NavBar', () => {
    render(<App/>);
    const jobsLink = screen.getByRole('link', { name: /Jobs/i });
    expect(jobsLink).toBeInTheDocument();
    
    const companyLink = screen.getByRole('link', { name: /Companies/i });
    expect(companyLink).toBeInTheDocument();
  });

  it('accesses login page', () => {
    render(<App/>);
    const loginLink = screen.getByRole('link', { name: /Login/i });
    fireEvent.click(loginLink);    
    const signInButton = screen.getByRole('button', { name: /SIGN IN/i});

    expect(signInButton).toBeInTheDocument();
  })

})
