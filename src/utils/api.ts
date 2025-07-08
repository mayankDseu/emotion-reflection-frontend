
const BASE_URL = import.meta.env.VITE_SERVER_API_URL;

export async function postReflection(text: string) {
  
  const response = await fetch(`${BASE_URL}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) throw new Error('Failed to analyze emotion');
  return response.json();
}
