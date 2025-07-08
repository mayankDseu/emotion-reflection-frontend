import { useState } from 'react';
import { postReflection } from './utils/api';
import { TextForm } from './components/TextForm';
import { EmojiBanner } from './components/EmojiBanner';
import { EmotionResult } from './components/EmotionResult';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [emotionResult, setEmotionResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const emojis = ['😄', '😢', '😠', '😰', '🤩', '😌', '😐', '😂', '😤', '😎', '😭', '🙃', '🥺', '😇'];
  const selectedEmojis = emojis.sort(() => 0.5 - Math.random()).slice(0, 6);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setError(null);
    setEmotionResult(null);

    try {
      const result = await postReflection(text);
      setEmotionResult(result);
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex flex-col items-center justify-center p-4 space-y-6">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/20">


        <div className="w-full md:w-1/2 p-6 text-white">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">🧠 Emotion Reflection Tool</h1>
            <TextForm text={text} setText={setText} onSubmit={handleSubmit} loading={loading} />
          </div>


          {loading ? (
            <div className="mt-6 flex justify-center">
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : emotionResult ? (
            <div className="mt-6">
              <EmotionResult result={emotionResult} />
            </div>
          ) : error ? (
            <p className="mt-6 text-red-300 text-sm text-center animate-fadeIn">{error}</p>
          ) : (
            <div className="mt-6 text-gray-300 text-sm text-center italic">Your result will appear here after submission</div>
          )}

        </div>


        <div className="w-full md:w-1/2 bg-white/10 p-6 flex flex-col items-center justify-center text-white text-center">
          <img src="/Mindfulness-rafiki.svg" alt="Emotion Illustration" className="w-2/3 max-w-sm" />
          <h2 className="text-xl font-semibold mt-4">Understand Your Emotions</h2>
          <p className="text-sm text-gray-200 mt-2 px-6">
            This tool helps you reflect on your thoughts and reveals the likely emotion behind them using simple text analysis.
          </p>
        </div>
      </div>


      <EmojiBanner emojis={selectedEmojis} />
    </div>
  );
}

export default App;
