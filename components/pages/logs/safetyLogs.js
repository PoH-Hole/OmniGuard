const types = ["CRITICAL", "INFO", "WARNING"];

const titles = [
  "Sterilization Cycle Complete - Autoclave 1",
  "Airlock Breach Detected",
  "Clean Room Protocol Activated",
  "PPE Compliance Check Passed",
  "Contamination Alert Resolved",
  "Emergency Shutdown Drill Completed",
];

const descs = [
  "System running within compliance standards.",
  "Security protocol triggered in sterile area.",
  "Routine safety inspection completed successfully.",
  "Access log recorded and verified.",
  "All parameters within FDA compliance range.",
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateTime(index) {
  const date = new Date();
  date.setMinutes(date.getMinutes() - index * 7);
  return date.toISOString();
}

export const safetyLogs = Array.from({ length: 100 }, (_, i) => ({
  id: `SFT-${200 + i}`,
  type: randomFrom(types),
  title: randomFrom(titles),
  desc: randomFrom(descs),
  timestamp: generateTime(i),
}));