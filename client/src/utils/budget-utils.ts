import { API_BASE_URL } from "../constants/constants";

// Function to get budget from the backend. Method: GET
export const fetchBudget = async (): Promise<number> => {
    const response = await fetch(`${API_BASE_URL}/budget`);
    if (!response.ok) {
        throw new Error("Failed to fetch budget");
    }
    const data = await response.json();
    return data.data; // Ensure this matches the structure of the API response
};

// Function to update the budget in the backend. Method: PUT
export const updateBudget = async (budget: number): Promise<number> => {
  const response = await fetch(`${API_BASE_URL}/budget`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: budget }),
  });

  if (!response.ok) {
    throw new Error("Failed to update budget");
  }
  const { amount } = await response.json();
  return amount;
};
