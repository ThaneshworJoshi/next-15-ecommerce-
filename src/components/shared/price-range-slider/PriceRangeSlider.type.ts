export interface PriceRangeSliderProps {
    range: [number, number];
    setRange: (range: [number, number]) => void;
    min: number;
    max: number;
    step: number;
}
