const API_BASE = process.env.REACT_APP_API_BASE || 'http://127.0.0.1:8000/api';


export async function fetchProjects() {
    const res = await fetch(`${API_BASE}/projects/`);
    return res.json();
}


export async function fetchSkills() {
     const res = await fetch(`${API_BASE}/projects/skills/`);
     return res.json();
}


export async function sendMessage(payload) {
     const res = await fetch(`${API_BASE}/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}