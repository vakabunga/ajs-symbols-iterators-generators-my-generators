export default function canIterate(items) {
  try {
    for (const item of items) {
      const value = item;
    }
    return true;
  } catch (e) {
    return false;
  }
}

console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));
