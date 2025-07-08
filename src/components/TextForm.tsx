interface TextFormProps {
    text: string;
    setText: (text: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    loading: boolean;
}

export function TextForm({ text, setText, onSubmit, loading }: TextFormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4" aria-busy={loading}>
            <textarea
                className="w-full bg-white/20 border border-white/30 text-white placeholder:text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                rows={4}
                placeholder="I'm nervous about my upcoming interview..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 transition disabled:opacity-50"
            >
                {loading ? 'Analyzing...' : 'Reflect Emotion'}
            </button>
        </form>
    );
}
