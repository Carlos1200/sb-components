import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Main text of the label
   */
  label: string;
  /**
   * Size of the label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Color of the label
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * If true, the label will be rendered in all caps
   */
  allCaps: boolean;
  /**
   * Custom font color of the label
   */
  fontColor?: string;
  /**
   * Custom font color of the label
   */
  backgroundColor?: string;
}

/**
 * A simple label component
 */
export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        color: fontColor,
        backgroundColor,
      }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
