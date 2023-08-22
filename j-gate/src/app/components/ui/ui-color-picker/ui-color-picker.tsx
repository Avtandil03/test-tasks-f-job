// components/ColorPicker.tsx

import React from "react";
import styles from "./ui-color-picker.module.scss";

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export const UiColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onColorChange,
}) => {
  return (
    <div className={styles.colorPicker}>
      {colors.map((color) => (
        <div
          key={color}
          className={`${styles.colorCircle} ${
            selectedColor === color ? styles.selected : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};
