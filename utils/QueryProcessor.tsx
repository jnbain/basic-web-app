export default function QueryProcessor(query: string): string {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerQuery.includes("andrew id")) {
    return "jnbain";
  }

  if (lowerQuery.includes("name")) {
    return "jnbain";
  }

  // Addition questions: "what is X plus Y"
  if (lowerQuery.includes("plus")) {
    const numbers = query.match(/(\d+)/g);
    if (numbers && numbers.length >= 2) {
      return String(parseInt(numbers[0]) + parseInt(numbers[1]));
    }
  }

  // Largest number questions
  if (lowerQuery.includes("largest")) {
    const numbers = query.match(/(\d+)/g);
    if (numbers) {
      const max = Math.max(...numbers.map(n => parseInt(n)));
      return String(max);
    }
  }

  return "";
}