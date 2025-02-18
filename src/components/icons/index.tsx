import { DataIconProps, FlagIconProps } from "@/libs";
import { English, Indonesia } from "./svg/flag";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "./svg/arrow";

export const Flag = ({ className, size = 24, locale }: FlagIconProps) => {
  switch (locale) {
    case "en":
      return <English className={className} size={size} />;
    case "id":
      return <Indonesia className={className} size={size} />;
    default:
      return null;
  }
};

export const Icon = ({ className, size = 24, name }: DataIconProps) => {
  switch (name) {
    case "ARROW_DOWN":
      return <ArrowDown className={className} size={size} />;
    case "ARROW_RIGHT":
      return <ArrowRight className={className} size={size} />;
    case "ARROW_LEFT":
      return <ArrowLeft className={className} size={size} />;
    case "ARROW_UP":
      return <ArrowUp className={className} size={size} />;
    case "KEYBOARD_ARROW_DOWN":
      return <KeyboardArrowDown className={className} size={size} />;
    case "KEYBOARD_ARROW_RIGHT":
      return <KeyboardArrowRight className={className} size={size} />;
    case "KEYBOARD_ARROW_LEFT":
      return <KeyboardArrowLeft className={className} size={size} />;
    case "KEYBOARD_ARROW_UP":
      return <KeyboardArrowUp className={className} size={size} />;

    default:
      return null;
  }
};
