interface EmotionResultProps {
  result: { emotion: string; confidence: number };
}

export function EmotionResult({ result }: EmotionResultProps) {
  const emotionEmojis: Record<string, string> = {
    Happy: '😊',
    Sad: '😢',
    Angry: '😠',
    Anxious: '😰',
    Excited: '🤩',
    Frustrated: '😤',
    Content: '😌',
    Neutral: '😐',
  };

  const emoji = emotionEmojis[result.emotion] || '🔍';

  return (
    <div
      className="p-4 bg-white/20 border border-white/30 rounded-lg text-center animate-fadeIn shadow-md"
      aria-label={`Detected emotion: ${result.emotion}`}
    >
      <div className="text-5xl">{emoji}</div>
      <h2 className="text-xl font-bold mt-2 tracking-wide">Emotion: {result.emotion}</h2>
      <p className="text-sm text-gray-200">Confidence: {(result.confidence * 100).toFixed(1)}%</p>
    </div>
  );
}
