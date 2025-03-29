export async function fetchPizzaData() {
  try {
    const response = await fetch(
      "https://superlative-banoffee-d3b586.netlify.app/data.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pizza data:", error);
    return null;
  }
}
