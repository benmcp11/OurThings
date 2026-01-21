const API_BASE = "http://localhost:8000/api";

export const getWordle = () =>
  fetch(`${API_BASE}/wordle/`).then(res => res.json());

export const postWordle = (word) =>
  fetch(`${API_BASE}/wordle/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ word }),
  });

export const getConnections = () =>
  fetch(`${API_BASE}/connections/`).then(res => res.json());

export const postConnections = (categories) =>
  fetch(`${API_BASE}/connections/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categories),
  });

export const getStrands = () =>
  fetch(`${API_BASE}/strands/`).then(res => res.json());

export const postStrands = (data) =>
  fetch(`${API_BASE}/strands/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
