import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pruebas Navbar", () => {
  test("Debe mostrar el nombre cuando este logueado", () => {
    const user = {
      id: "ACD",
      name: "John",
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={{ logged: true, user }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(user.name)).toBeTruthy();
  });
  test("Debe llamar el logout y el navigate con sus argumentos cundo se haga click en logout", () => {
    const user = {
      id: "ACD",
      name: "John",
    };
    const authState = { logged: true, user };
    const logout = jest.fn();
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={{ authState, logout }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(logout).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
