import { API_BASE } from "./config";

export async function postStrands(data) {
  const res = await fetch(`${API_BASE}/strands/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }

  return res.json();
}
