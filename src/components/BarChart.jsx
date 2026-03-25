import { motion as Motion} from 'framer-motion';

export function BarChart({
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
      <div className="flex items-end justify-center w-full h-full p-2 sm:p-4 lg:p-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          {/* Container without gap to avoid sub-pixel layout issues */}
          <div className="flex items-end justify-center w-full h-full">
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
                                  ? "#fbbf24" // Amber
                                  : isSwapped
                                      ? "#ef4444" // Red
                                      : isSorted
                                          ? "#10b981" // Green
                                          : "#4f46e5"  // Indigo
                          }}
                          transition={{
                              type: "tween",
                              ease: "circOut",
                              duration: 0.2
                          }}
                          style={{
                              flex: "1 1 0px",
                              minWidth: 0,
                              marginInline: array.length > 60 ? "0.25px" : array.length > 30 ? "0.5px" : "1px",
                              // Force GPU layer to prevent ghosting/artifacts
                              transform: "translateZ(0)",
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              willChange: "height, background-color"
                          }}
                          className="rounded-t-[1px]"
                      />
                  );
              })}
          </div>
      </div>
  );
}