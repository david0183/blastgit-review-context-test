import { getRoleLabel } from "./copy";
import { sendTelemetry } from "./telemetry";

export function renderBanner() {
  void sendTelemetry();
  return `Welcome, ${getRoleLabel()}!`;
}
