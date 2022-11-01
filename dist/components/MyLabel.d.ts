/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
