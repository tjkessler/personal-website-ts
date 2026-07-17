import { appIconContentType, createAppIcon } from "@/app/lib/app-icon";

export const size = {
  width: 32,
  height: 32,
} as const;

export const contentType = appIconContentType;

export default function Icon() {
  return createAppIcon(size.width);
}
