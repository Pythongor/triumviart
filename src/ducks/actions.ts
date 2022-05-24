import { createAction } from "typesafe-actions";
import { Actions, LangType, ModalType } from "./types";

export const setToken = createAction(Actions.setToken)<string | null>();

export const setLanguage = createAction(Actions.setLanguage)<LangType>();

export const setModal = createAction(Actions.setModal)<ModalType>();
