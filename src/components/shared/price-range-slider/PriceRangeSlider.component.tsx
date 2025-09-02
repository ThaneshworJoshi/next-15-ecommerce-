/* eslint-disable @typescript-eslint/no-unused-vars */

import { PriceRangeSliderProps } from "./PriceRangeSlider.type";
import { DualRangeSlider } from '../dual-range-slider';
import { useState } from 'react';

export const PriceRangeSlider = ({

}: PriceRangeSliderProps) => {
  const handleRangeChange = (value: number[]) => {
    if (value.length === 2) {
      setRange([value[0], value[1]]);
    }
  };
  const [range, setRange] = useState<[number, number]>([0, 100]);
  return (
    <div className="w-full max-w-md mx-auto py-6 bg-neutral-background p-5 rounded-lg">

      <div className="flex justify-between text-sm text-neutral-dark mb-2">
        <span>Range:</span>
        <span>
          ${range[0]} – ${range[1]}
        </span>
      </div>

 

      <DualRangeSlider
        min={0}
        max={100}
        step={1}
        value={range}
        

        onValueChange={(val) => setRange(val as [number, number])}
        // label={(val) => <span className="text-xs font-medium text-muted-foreground">{val}</span>}
        labelPosition="top"
      />
    </div>
  );
};
