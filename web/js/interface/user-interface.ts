import { Operation } from "web/js/interface/reducer";

export interface IUserInterface {
  language?: string;
  burgerMenuOpen: boolean;
}

export interface IUserInterfaceSeetAction {
  type: Operation.SET;
  data: IUserInterface;
}

export interface IUserInterfaceUpdateAction {
  type: Operation.MERGE;
  data: Partial<IUserInterface>;
}

export type DispatchUserInterfaceSettingsContextType = (
  action: IUserInterfaceSeetAction | IUserInterfaceUpdateAction,
) => void;

export type UserInterfaceSettingsContextType = IUserInterface;

export type DisatchBurgerMenuContextType = ({
  data: IBurgerMenuSettings,
}) => void;

export type IClickEventContextType = MouseEvent;
