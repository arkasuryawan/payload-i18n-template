export interface IconProps {
  className?: string;
  size?: number;
}

export enum Localei18N {
  EN = "en",
  ID = "id",
}

export interface FlagIconProps extends IconProps {
  locale: Localei18N;
}

export enum IconName {
  ARROW_DOWN = "ARROW_DOWN",
  ARROW_RIGHT = "ARROW_RIGHT",
  ARROW_LEFT = "ARROW_LEFT",
  ARROW_UP = "ARROW_UP",
  KEYBOARD_ARROW_DOWN = "KEYBOARD_ARROW_DOWN",
  KEYBOARD_ARROW_RIGHT = "KEYBOARD_ARROW_RIGHT",
  KEYBOARD_ARROW_LEFT = "KEYBOARD_ARROW_LEFT",
  KEYBOARD_ARROW_UP = "KEYBOARD_ARROW_UP",
}

export interface DataIconProps extends IconProps {
  name: IconName;
}
