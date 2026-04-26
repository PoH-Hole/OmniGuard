const types = ["CRITICAL", "WARNING", "INFO"];

const titles = [
  "Bearing Overheat - Centrifuge B2",
  "Pressure Fluctuation - Filter Line 4",
  "Motor Vibration Spike - Mixer A1",
  "Voltage Instability - Panel C3",
  "Pump Efficiency Drop - Line 2",
  "Temperature Drift - Reactor X",
  "Valve Response Delay - Pipeline 5",
];

const descs = [
  "System anomaly detected, automatic correction in progress.",
  "Sensor readings exceed normal operational threshold.",
  "Minor deviation detected, monitoring system stabilizing.",
  "Critical threshold reached, immediate inspection recommended.",
  "Auto-calibration initiated by control system.",
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateTime(index) {
  const date = new Date();
  date.setMinutes(date.getMinutes() - index * 5);
  return date.toISOString();
}

export const machineLogs = Array.from({ length: 100 }, (_, i) => ({
  id: `ERR-${400 + i}`,
  type: randomFrom(types),
  title: randomFrom(titles),
  desc: randomFrom(descs),
  timestamp: generateTime(i),
}));