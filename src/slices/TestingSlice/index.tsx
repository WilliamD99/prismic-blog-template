import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestingSlice`.
 */
export type TestingSliceProps = SliceComponentProps<Content.TestingSliceSlice>;

/**
 * Component for "TestingSlice" Slices.
 */
const TestingSlice = ({ slice }: TestingSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testing_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestingSlice;
