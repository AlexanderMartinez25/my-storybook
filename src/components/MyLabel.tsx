import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Color personalizado del color de la fuente
   */
  fontColor?: string;
  /**
   * Color personalizado del color de la fuente
   */
  backgroundColor?: string;
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Transforma el texto en mayúsculas
   */
  allCaps?: boolean;
  /**
   * Cambia el color del texto
   */
  color?: "primary" | "secondary" | "tertiary";
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
