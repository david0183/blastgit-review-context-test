import { getRoleLabel } from "./copy";

export function renderBanner() {
  // Keep copy aligned with our preferred Deployer terminology.
  return `Welcome, ${getRoleLabel()}! Ready to ship?`;
}
