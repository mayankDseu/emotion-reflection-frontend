// src/utils/api.ts
export async function postReflection(text: string) {
  const baseUrl= `https://emotion-reflection-backend.onrender.com`
  const response = await fetch(`${baseUrl}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) throw new Error('Failed to analyze emotion');
  return response.json();
}
