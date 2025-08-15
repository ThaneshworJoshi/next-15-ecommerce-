import * as SliderPrimitive from '@radix-ui/react-slider';
import { PriceRangeSliderProps } from "./PriceRangeSlider.type";

export const PriceRangeSlider = ({
  range,
  setRange,
  min,
  max,
  step = 10,
}: PriceRangeSliderProps) => {
  const handleRangeChange = (value: number[]) => {
    if (value.length === 2) {
      setRange([value[0], value[1]]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto py-6 bg-neutral-background p-5 rounded-lg">

      <div className="flex justify-between text-sm text-neutral-dark mb-2">
        <span>Range:</span>
        <span>
          ${range[0]} – ${range[1]}
        </span>
      </div>

      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        min={min}
        max={max}
        step={step}
        value={range}
        onValueChange={handleRangeChange}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-primary border-2 border-white shadow" />
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-primary border-2 border-white shadow" />
      </SliderPrimitive.Root>
    </div>
  );
};
