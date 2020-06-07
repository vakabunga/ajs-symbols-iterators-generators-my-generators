export default function canIterate(items) {
  try {
    for (const item of items) {
      // eslint-disable-next-line no-unused-vars
      const value = item;
    }
    return true;
  } catch (e) {
    return false;
  }
}
