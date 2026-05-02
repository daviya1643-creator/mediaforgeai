// src/main.tsx
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App"; // Import with curly braces
import { env } from "@xenova/transformers";
env.allowLocalModels = false;
env.useBrowserCache = true;
env.remoteHost = 'https://huggingface.co';
env.remotePathComponent = 'models';

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}