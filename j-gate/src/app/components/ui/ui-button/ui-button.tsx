import React from "react";
import styles from "./ui-button.module.scss";

interface UiButtonProps {
  type: "primary" | "outline";
  onClick: () => void;
  children: string;
}

const UiButton: React.FC<UiButtonProps> = ({ type, onClick, children }) => {
  const buttonClass =
    type === "primary" ? styles.primaryButton : styles.outlineButton;

  return (
    <button className={`${buttonClass} ${styles.uiButton}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default UiButton;
