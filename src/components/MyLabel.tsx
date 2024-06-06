import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Make text all caps
   */
  allcaps?: boolean;
  
  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Label font color
   */
  fontColor?: string;

  /**
   * Label Backgrond Color
   */
  backgroundColor?: string;
}



export const MyLabel = ({
  label,
  size = 'normal',
  allcaps = false,
  color,
  fontColor,
  backgroundColor = 'transparent',
}: Props ) => {
  return (
    <span
      className={`${ size } ${ color } label`}
      style={{ color:fontColor, backgroundColor: backgroundColor }}
    >
      { allcaps ? label.toUpperCase() : label }
    </span>
  )
}
