export function formatTime(ms: number) {
  const minutes = Math.floor(ms / 60000); // Convert ms to minutes
  const seconds = Math.floor((ms % 60000) / 1000); // Get the remaining seconds
  return `${minutes}:${seconds.toString().padStart(2, "0")}`; // Format as mm:ss
}
