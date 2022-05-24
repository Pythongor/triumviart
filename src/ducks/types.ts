import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type LangType = "EN" | "FR" | "UK";
export type ModalType = null | "donate" | "donateSuccess";

export type StateType = {
  token: string | null;
  modal: ModalType;
  language: LangType;
};

export enum Actions {
  setToken = "SET_TOKEN",
  setLanguage = "SET_LANGUAGE",
  setModal = "SET_MODAL",
}

export type RootActionType = ActionType<typeof actions>;
