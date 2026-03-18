import { motion as Motion} from 'framer-motion';

function BarChart({
    array,
    activeIndices,
    swappedIndices,
    sortedIndices,
    eliminatedIndices,
}) {
  const maxVal = Math.max(...array, 1);

  const sortedSet = new Set(sortedIndices);
  const activeSet = new Set(activeIndices);
  const swappedSet = new Set(swappedIndices);
  const eliminatedSet = new Set(eliminatedIndices);

  return (
      <div>
        {array.map((value, idx) => {
          const isEliminated = eliminatedSet.has(idx);
          const isActive = activeSet.has(idx);
          const isSwapped = swappedSet.has(idx);
          const isSorted = sortedSet.has(idx);

          if (isEliminated) return null;

          return (
              <Motion.div
                  key={idx}
                  initial={false}
                  animate={{
                      // Using transform (scaleY) since animating height directly can cause layout thrashing and artifacts
                      height: `${(value / maxVal) * 100}%`,
                      // TODO: Clean this up
                      backgroundColor: isActive
                          ? "#facc15"
                          : isSwapped
                              ? "#ef4444"
                              : isSorted
                                  ? "#10b981"
                                  : "#8b5cf6"
                  }}
                  transition={{
                      type: "tween",
                      ease: "circOut",
                      duration: 0.2
                  }}
                  style={{
                      flex: "1 1 0px",
                      minWidth: 0,
                      marginInline: "1px",
                      // Force GPU layer to prevent ghosting/artifacts
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      willChange: "height, background-color"
                  }}
                  className="rounded-t-[1px]"/>
          );
        })};
      </div>
  );
}

export default BarChart;