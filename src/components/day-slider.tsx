import * as SliderPrimitive from "@radix-ui/react-slider";

export default function DaysSlider({
  days,
  setDays,
}: {
  days: number;
  setDays: (days: number) => void;
}) {
  return (
    <SliderPrimitive.Root
      className="relative flex touch-none select-none items-center"
      min={1}
      max={60}
      step={1}
      value={[days]}
      onValueChange={(value: number[]) => setDays(value[0])}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
        <SliderPrimitive.Range className="absolute h-full bg-[#FF77A5]" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="transition-all duration-200 ease-in-out relative z-10 block size-4 rounded-full border-4 border-white bg-[#FF77A5] shadow-md focus:outline-none p-[6px]" />
    </SliderPrimitive.Root>
  );
}
