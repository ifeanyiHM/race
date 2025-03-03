export const formattedItem = (item: string) => {
  return item.toLowerCase().replace(/\s+/g, "-");
};

export function capitalizeWord(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
