# 🛠️ MediaForge AI — Advanced Multimedia Workflow Platform

MediaForge AI is a high-performance, browser-based multimedia processing engine. It leverages state-of-the-art AI models to automate and simplify complex video and image editing workflows directly in the web browser.

## 🚀 Features

- **AI-Powered Generation:** Leverage models like DistilGPT2 for text and media context.
- **Browser-Side Processing:** No server-side rendering required for core AI tasks, thanks to Transformers.js.
- **Modern UI:** Built with React and Tailwind CSS for a seamless user experience.
- **Optimized Performance:** Uses ONNX Runtime for hardware-accelerated AI inference.

## 🛠️ Tech Stack

- **Frontend:** React.js, TypeScript, Tailwind CSS
- **AI Engine:** [Transformers.js](https://github.com)
- **Runtime:** ONNX Runtime Web
- **Hosting:** Netlify / Vercel

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd mediaforge-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Ensure your `main.tsx` or `worker.ts` has the following configuration to avoid 404 errors with local models:
   ```javascript
   import { env } from '@xenova/transformers';
   env.allowLocalModels = false;
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

- `src/components`: UI components and Layouts.
- `src/hooks`: Custom React hooks for AI state management.
- `src/worker.ts`: Web Worker handling the heavy AI computations.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com).
