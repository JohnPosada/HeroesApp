import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas AppRouter", () => {
  test("Debe de mostrarel componente marvel si esta autenticado", () => {
    const user = {
      id: "ACD",
      name: "John",
    };
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={{ logged: true, user }}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("MarvelPage")).toBeTruthy();
  });
});
