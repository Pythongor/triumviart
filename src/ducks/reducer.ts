import { createReducer } from "typesafe-actions";
import { RootActionType, StateType } from "./types";
import { setToken, setLanguage, setModal } from "./actions";

const initialState: Readonly<StateType> = {
  token: null,
  language: "EN",
  modal: null,
};

export default createReducer<StateType, RootActionType>(initialState)
  .handleAction(setToken, (state, { payload }) => ({
    ...state,
    token: payload,
  }))
  .handleAction(setLanguage, (state, { payload }) => ({
    ...state,
    language: payload,
  }))
  .handleAction(setModal, (state, { payload }) => ({
    ...state,
    modal: payload,
  }));
