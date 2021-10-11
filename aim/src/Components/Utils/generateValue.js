export default function generateValue() {
  function generateCX() {
    return Math.round(10 + Math.random() * 980);
  }
  function generateCY() {
    return Math.round(10 + Math.random() * 480);
  }
  return { generateCX, generateCY };
}
