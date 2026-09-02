export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory
    .filter((item) => {
      return item[1] > 5
    })  
    .map((item) => {
      return item[1] * item[2];
    })
    .reduce((total, value) => {
      return total + value;
    }, 0);
    }