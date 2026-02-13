import { getRoleLabel } from "./copy";

export function renderBanner() {
  return `Welcome, ${getRoleLabel()}!`;
}
