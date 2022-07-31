import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe("Pruebas SearchPage", () => {
  test("Debe mostrar un heroe de acuerdo al valor del input ", () => {
    const inputValue = "superman";
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.input(inputElement, { target: { value: inputValue } });
    const img = screen.getByRole("img");
    expect(img.src).toContain(inputValue);
  });
  test("Debe mostrar error si no encuentra al heroe", () => {
    const inputValue = "superman1";
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.input(inputElement, {
      target: { name: "searchInput", value: inputValue },
    });
    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("");
  });
});
