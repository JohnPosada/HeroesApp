import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas a PublicRoute", () => {
  test("Debe mostrar el children si el usuario no esta autenticado", () => {
    Storage.prototype.setItem = jest.fn();
    const user = {
      id: "ACD",
      name: "John",
    };
    render(
      <AuthContext.Provider value={{ logged: true, user }}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoute>
            <h1>Public route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("path", "/marvel");
  });
});
