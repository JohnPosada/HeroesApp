import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas a PublicRoute", () => {
  test("Debe mostrar el children si el usuario no esta autenticado", () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <PublicRoute>
          <h1>Public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Public route"));
  });

  test("Debe navegar a marvel si esta autenticado", () => {
    const user = {
      id: "ACD",
      name: "John",
    };
    render(
      <AuthContext.Provider value={{ logged: true, user }}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Public route</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Private route</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Private route"));
  });
});
