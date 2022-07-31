import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Test authReducer", () => {
  test("Debe retornar el estado por defecto", () => {
    const initialState = {
      logged: false,
    };
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });
  test("Debe llamar el login y establecer el user", () => {
    const user = {
      id: "ACD",
      name: "John",
    };
    const action = {
      type: types.login,
      payload: user,
    };
    const state = authReducer({}, action);
    expect(state.logged).toBeTruthy();
    expect(state.user).toEqual(user);
  });
  test("Debe llamar el login y establecer el user", () => {
    const user = {
      id: "ACD",
      name: "John",
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, user }, action);
    expect(state).toEqual({ logged: false });
  });
});
