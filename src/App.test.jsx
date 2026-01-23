import { screen, within } from "@testing-library/react";
import App from './pages/App/App';
import { renderWithRouter } from "./test-utils";

describe("App routing", () => {
  test("renders nav without crashing", () => {
    renderWithRouter(<App />, { route: "/" });

    const nav = screen.getByRole("navigation");
    expect(within(nav).getByText(/projects/i)).toBeInTheDocument();
  });

  test("renders widgets page at /widgets", () => {
    renderWithRouter(<App />, { route: "/widgets" });
    expect(screen.getByText(/widgets/i)).toBeInTheDocument();
  });
});

// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from "react-router-dom";
// import App from './pages/App/App';

// const renderWithRouter = (ui, { route = "/" } = {}) => {
//   return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
// };

// test("renders counter button", () => {
//   renderWithRouter(<App />);
//   // your existing assertions...
// });

// test('renders counter button', () => {
//   render(<App />);
//   const buttonElement = screen.getByText(/count is 0/i);
//   expect(buttonElement).toBeInTheDocument();
// });

// test('count increases on button click', () => {
//   render(<App />);
//   const buttonElement = screen.getByText(/count is 0/i);
//   fireEvent.click(buttonElement);
//   expect(buttonElement).toHaveTextContent(/count is 1/i);
// });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders vite docs link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/vite docs/i);
//   expect(linkElement).toBeInTheDocument();
// });
