import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [msg, setMsg] = useState("");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Pikzer</h1>
      <button
        className="rounded bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-700"
        onClick={async () => setMsg(await invoke("greet", { name: "Pikzer" }))}
      >
        Greet from Rust
      </button>
      <p>{msg}</p>
    </main>
  );
}

export default App;
