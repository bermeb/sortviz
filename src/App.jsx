import {useMemo, useState} from "react";
import {useVisualizer} from "./hooks/useVisualizer.js";
import {BarChart} from "./components/BarChart.jsx";
import {algorithmsData} from "./algorithms/data.js";

function App() {
  const [selectedAlgoId, setSelectedAlgoId] = useState('bubble');

  const selectedAlgorithm = useMemo(
      () => algorithmsData.find((a) => a.id === selectedAlgoId) || algorithmsData[0],
      [selectedAlgoId]
  );

  const {
    array,
    activeIndices,
    swappedIndices,
    sortedIndices,
    eliminatedIndices,
    isPlaying,
    speed,
    size,
    play,
    pause,
    step,
    reset,
    setSpeed,
    setSize,
  } = useVisualizer(selectedAlgorithm.generator, 30);

  return (
      <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-6 font-sans leading-relaxed">
        <div className="max-w-400 mx-auto space-y-6">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                SortViz
              </h1>
              <p className="text-slate-500 text-base mt-1 font-medium">Algorithm Visualizer</p>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-180">
            <div className="lg:col-span-7 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col">
              <BarChart
                  array={array}
                  activeIndices={activeIndices}
                  swappedIndices={swappedIndices}
                  sortedIndices={sortedIndices}
                  eliminatedIndices={eliminatedIndices}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App