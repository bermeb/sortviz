import './App.css'
import {useMemo, useState} from "react";
import {algorithmsData} from "./algorithms/data.js";
import {useVisualizer} from "./hooks/useVisualizer.js";
import BarChart from "./components/BarChart.jsx";

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
    <BarChart
        array={array}
        activeIndices={activeIndices}
        swappedIndices={swappedIndices}
        sortedIndices={sortedIndices}
        eliminatedIndices={eliminatedIndices}
    />
  );

}

export default App
