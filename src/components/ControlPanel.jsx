import { Play, Pause, RotateCcw, SkipForward } from 'lucide-react';

export function ControlPanel({
    isPlaying,
    play,
    pause,
    reset,
    step,
    speed,
    setSpeed,
    size,
    setSize,
    algorithms,
    selectedAlgo,
    setSelectedAlgo
}) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
                <select
                    value={selectedAlgo}
                    onChange={(e) => setSelectedAlgo(e.target.value)}
                    disabled={isPlaying}
                    className=""
                >
                    {algorithms.map((algo) => (
                        <option key={algo.id} value={algo.id}>
                            {algo.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={isPlaying ? pause : play}
                    className="flex items-center justify-center w-12 h-12"
                    title={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                    onClick={step}
                    disabled={isPlaying}
                    className="flex items-center justify-center w-12 h-12"
                    title="Step Forward"
                >
                    <SkipForward size={24} />
                </button>
                <button
                    onClick={reset}
                    className="flex items-center justify-center w-12 h-12 "
                    title="Reset Array"
                >
                    <RotateCcw size={24} />
                </button>
            </div>

            <div className="flex items-center gap-10">
                <div className="flex flex-col gap-2 w-40">
                    <label className="text-sm text-slate-500 font-semibold tracking-wide flex items-center">
                        Speed: {speed} {speed > 100 && <span className="text-indigo-600 ml-1">Turbo</span>}
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="200"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                        className="w-full h-2"
                    />
                </div>

                <div className="flex flex-col gap-2 w-40">
                    <label className="text-sm text-slate-500 font-semibold tracking-wide">Size: {size}</label>
                    <input
                        type="range"
                        min="5"
                        max="150"
                        value={size}
                        onChange={(e) => {
                            setSize(Number(e.target.value));
                            if (!isPlaying) reset();
                        }}
                        disabled={isPlaying}
                        className="w-full h-2"
                    />
                </div>
            </div>
        </div>
    );
}