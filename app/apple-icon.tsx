import { appIconContentType, createAppIcon } from "@/app/lib/app-icon";

export const size = {
  width: 180,
  height: 180,
} as const;

export const contentType = appIconContentType;

export default function AppleIcon() {
  return createAppIcon(size.width);
}
