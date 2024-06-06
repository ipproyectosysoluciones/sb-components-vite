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
}



export const MyLabel = ({
  label,
  size = 'normal',
  allcaps = false,
  color,
  fontColor,
}: Props ) => {
  return (
    <span
      className={`${ size } ${ color } label`}
      style={{ color:fontColor }}
    >
      { allcaps ? label.toUpperCase() : label }
    </span>
  )
}
