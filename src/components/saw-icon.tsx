import { SvgIcon, type SvgIconProps } from "@mui/material";

// Circular saw blade, matching the saw in the Willmore Lumber logo.
export default function SawIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        d="M12.00 3.40 L12.93 0.54 L15.73 4.25 L17.81 2.08 L18.72 6.64 L21.54 5.58 L20.38 10.09 L23.38 10.35 L20.38 13.91 L22.97 15.46 L18.72 17.36 L20.38 19.87 L15.73 19.75 L16.14 22.73 L12.00 20.60 L11.07 23.46 L8.27 19.75 L6.19 21.92 L5.28 17.36 L2.46 18.42 L3.62 13.91 L0.62 13.65 L3.62 10.09 L1.03 8.54 L5.28 6.64 L3.62 4.13 L8.27 4.25 L7.86 1.27 Z M9.4 12 a2.6 2.6 0 1 0 5.2 0 a2.6 2.6 0 1 0 -5.2 0 Z M6.4 12 a5.6 5.6 0 1 0 11.2 0 a5.6 5.6 0 1 0 -11.2 0 Z M7.6000000000000005 12 a4.3999999999999995 4.3999999999999995 0 1 1 8.799999999999999 0 a4.3999999999999995 4.3999999999999995 0 1 1 -8.799999999999999 0 Z"
      />
    </SvgIcon>
  );
}
