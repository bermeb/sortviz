export function* bubbleSort(array) {
    let arr = [...array];
    let n = arr.length;
    let sortedIndices = [];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            yield { array: arr, activeIndices: [j, j + 1], swappedIndices: [], sortedIndices, eliminatedIndices: [] };

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                yield { array: arr, activeIndices: [], swappedIndices: [j, j + 1], sortedIndices, eliminatedIndices: [] };
            }
        }
        sortedIndices.push(n - i - 1);
    }
    sortedIndices.push(0);
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices, eliminatedIndices: [] };
}

export function* selectionSort(array) {
    let arr = [...array];
    let n = arr.length;
    let sortedIndices = [];

    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            yield { array: arr, activeIndices: [j, minIdx], swappedIndices: [], sortedIndices: [...sortedIndices], eliminatedIndices: [] };
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            yield { array: arr, activeIndices: [], swappedIndices: [i, minIdx], sortedIndices: [...sortedIndices], eliminatedIndices: [] };
        }
        sortedIndices.push(i);
    }
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices, eliminatedIndices: [] };
}

export function* insertionSort(array) {
    let arr = [...array];
    let n = arr.length;
    let sortedIndices = [0];

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        yield { array: arr, activeIndices: [i], swappedIndices: [], sortedIndices: [...sortedIndices], eliminatedIndices: [] };

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            yield { array: arr, activeIndices: [j, j + 1], swappedIndices: [j, j + 1], sortedIndices: [...sortedIndices], eliminatedIndices: [] };
            j = j - 1;
        }
        arr[j + 1] = key;
        sortedIndices.push(i);
        yield { array: arr, activeIndices: [], swappedIndices: [j + 1], sortedIndices: [...sortedIndices], eliminatedIndices: [] };
    }
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: Array.from({length: n}, (_, i) => i), eliminatedIndices: [] };
}

export function* mergeSort(array) {
    let arr = [...array];
    let n = arr.length;

    function* merge(start, mid, end) {
        let left = arr.slice(start, mid + 1);
        let right = arr.slice(mid + 1, end + 1);
        let i = 0, j = 0, k = start;

        while (i < left.length && j < right.length) {
            yield { array: arr, activeIndices: [start + i, mid + 1 + j], swappedIndices: [], sortedIndices: [], eliminatedIndices: [] };
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            yield { array: arr, activeIndices: [], swappedIndices: [k], sortedIndices: [], eliminatedIndices: [] };
            k++;
        }

        while (i < left.length) {
            arr[k] = left[i];
            yield { array: arr, activeIndices: [], swappedIndices: [k], sortedIndices: [], eliminatedIndices: [] };
            i++;
            k++;
        }

        while (j < right.length) {
            arr[k] = right[j];
            yield { array: arr, activeIndices: [], swappedIndices: [k], sortedIndices: [], eliminatedIndices: [] };
            j++;
            k++;
        }
    }

    function* sort(start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            yield* sort(start, mid);
            yield* sort(mid + 1, end);
            yield* merge(start, mid, end);
        }
    }

    yield* sort(0, n - 1);
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: Array.from({length: n}, (_, i) => i), eliminatedIndices: [] };
}

export function* shellSort(array) {
    let arr = [...array];
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            yield { array: arr, activeIndices: [i, i - gap], swappedIndices: [], sortedIndices: [], eliminatedIndices: [] };

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                yield { array: arr, activeIndices: [j, j - gap], swappedIndices: [j], sortedIndices: [], eliminatedIndices: [] };
                j -= gap;
            }
            arr[j] = temp;
            yield { array: arr, activeIndices: [], swappedIndices: [j], sortedIndices: [], eliminatedIndices: [] };
        }
    }
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: Array.from({length: n}, (_, i) => i), eliminatedIndices: [] };
}

export function* cocktailShakerSort(array) {
    let arr = [...array];
    let n = arr.length;
    let swapped = true;
    let start = 0;
    let end = n - 1;

    while (swapped) {
        swapped = false;
        for (let i = start; i < end; i++) {
            yield { array: arr, activeIndices: [i, i + 1], swappedIndices: [], sortedIndices: [], eliminatedIndices: [] };
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                yield { array: arr, activeIndices: [], swappedIndices: [i, i + 1], sortedIndices: [], eliminatedIndices: [] };
            }
        }
        if (!swapped) break;
        swapped = false;
        end--;
        for (let i = end - 1; i >= start; i--) {
            yield { array: arr, activeIndices: [i, i + 1], swappedIndices: [], sortedIndices: [], eliminatedIndices: [] };
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                yield { array: arr, activeIndices: [], swappedIndices: [i, i + 1], sortedIndices: [], eliminatedIndices: [] };
            }
        }
        start++;
    }
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: Array.from({length: n}, (_, i) => i), eliminatedIndices: [] };
}

export function* sleepSort(array) {
    let arr = [...array];
    let sortedArr = [];
    let indicesToSorted = [];

    let max = Math.max(...arr);
    for (let time = 0; time <= max; time++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === time) {
                sortedArr.push(arr[i]);
                indicesToSorted.push(i);
                yield {
                    array: arr.map((v, idx) => indicesToSorted.includes(idx) ? -1 : v),
                    activeIndices: [i],
                    swappedIndices: [],
                    sortedIndices: [...indicesToSorted],
                    eliminatedIndices: []
                };
            }
        }
        if (sortedArr.length === arr.length) break;
    }

    yield { array: [...arr].sort((a,b) => a-b), activeIndices: [], swappedIndices: [], sortedIndices: Array.from({length: arr.length}, (_, i) => i), eliminatedIndices: [] };
}

export function* purgeSort(array) {
    let arr = [...array];
    let eliminatedIndices = [];

    while (arr.length - eliminatedIndices.length > 1) {
        let remaining = [];
        for(let i=0; i<arr.length; i++) if(!eliminatedIndices.includes(i)) remaining.push(i);

        let sorted = true;
        for(let i=0; i<remaining.length-1; i++) {
            if(arr[remaining[i]] > arr[remaining[i+1]]) { sorted = false; break; }
        }
        if(sorted) break;

        let targetIdx = remaining[Math.floor(Math.random() * remaining.length)];
        eliminatedIndices.push(targetIdx);

        yield { array: arr, activeIndices: [targetIdx], swappedIndices: [], sortedIndices: [], eliminatedIndices: [...eliminatedIndices] };
    }

    let sortedIndices = [];
    for(let i=0; i<arr.length; i++) if(!eliminatedIndices.includes(i)) sortedIndices.push(i);
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices, eliminatedIndices: [...eliminatedIndices] };
}

export function* quantumBogoSort(array) {
    let arr = [...array];

    yield { array: arr, activeIndices: [...Array(arr.length).keys()], swappedIndices: [], sortedIndices: [], eliminatedIndices: [] };

    const isSorted = (a) => {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) return false;
        }
        return true;
    };

    if (isSorted(arr)) {
        yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [...Array(arr.length).keys()], eliminatedIndices: [] };
    } else {
        let eliminatedIndices = Array.from({length: arr.length}, (_, i) => i);
        yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [], eliminatedIndices };
    }
}

export function* quickSort(array) {
    let arr = [...array];
    let sortedIndices = [];

    function* partition(low, high) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            yield { array: arr, activeIndices: [j, high], swappedIndices: [], sortedIndices: [...sortedIndices], eliminatedIndices: [] };
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                yield { array: arr, activeIndices: [], swappedIndices: [i, j], sortedIndices: [...sortedIndices], eliminatedIndices: [] };
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        yield { array: arr, activeIndices: [], swappedIndices: [i + 1, high], sortedIndices: [...sortedIndices], eliminatedIndices: [] };
        return i + 1;
    }

    function* sort(low, high) {
        if (low <= high) {
            const pIdx = yield* partition(low, high);
            sortedIndices.push(pIdx);
            yield* sort(low, pIdx - 1);
            yield* sort(pIdx + 1, high);
        }
    }

    yield* sort(0, arr.length - 1);
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: Array.from({length: arr.length}, (_, i) => i), eliminatedIndices: [] };
}

export function* stalinSort(array) {
    let arr = [...array];
    let sortedIndices = [];
    let eliminatedIndices = [];

    if (arr.length === 0) return;

    sortedIndices.push(0);
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        yield { array: arr, activeIndices: [i, sortedIndices[sortedIndices.length - 1]], swappedIndices: [], sortedIndices: [...sortedIndices], eliminatedIndices: [...eliminatedIndices] };

        if (arr[i] >= max) {
            max = arr[i];
            sortedIndices.push(i);
        } else {
            eliminatedIndices.push(i);
        }
        yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [...sortedIndices], eliminatedIndices: [...eliminatedIndices] };
    }

    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices, eliminatedIndices: [...eliminatedIndices] };
}

export function* thanosSort(array) {
    let arr = [...array];
    let eliminatedIndices = [];

    const getRemainingIndices = () => {
        const remaining = [];
        for (let i = 0; i < arr.length; i++) {
            if (!eliminatedIndices.includes(i)) remaining.push(i);
        }
        return remaining;
    };

    const isSorted = (indices) => {
        for (let i = 0; i < indices.length - 1; i++) {
            if (arr[indices[i]] > arr[indices[i+1]]) return false;
        }
        return true;
    };

    while (true) {
        let remaining = getRemainingIndices();
        if (remaining.length <= 1 || isSorted(remaining)) break;

        yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [], eliminatedIndices: [...eliminatedIndices] };

        // Snap half of the remaining elements
        const nextLength = Math.floor(remaining.length / 2);
        const toEliminateCount = remaining.length - nextLength;

        // Shuffle remaining indices and take the first few to eliminate
        const shuffledRemaining = [...remaining].sort(() => Math.random() - 0.5);
        const toEliminate = shuffledRemaining.slice(0, toEliminateCount);

        eliminatedIndices.push(...toEliminate);

        yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [], eliminatedIndices: [...eliminatedIndices] };
    }

    let sortedIndices = getRemainingIndices();
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices, eliminatedIndices: [...eliminatedIndices] };
}

export function* bogoSort(array) {
    let arr = [...array];

    const isSorted = (a) => {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) return false;
        }
        return true;
    };

    while (!isSorted(arr)) {
        yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [], eliminatedIndices: [] };

        // Shuffle
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        yield { array: arr, activeIndices: [], swappedIndices: [...Array(arr.length).keys()], sortedIndices: [], eliminatedIndices: [] };
    }

    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [...Array(arr.length).keys()], eliminatedIndices: [] };
}

export function* miracleSort(array) {
    let arr = [...array];

    const isSorted = (a) => {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) return false;
        }
        return true;
    };

    // Miracle sort just checks if it's sorted, and if not, it waits.
    // Since we don't actually modify the array, we just simulate "checking" it endlessly.
    let attempts = 0;
    while (!isSorted(arr)) {
        // Highlight a random element to show "checking" or waiting for miracle
        let idx = Math.floor(Math.random() * arr.length);
        yield { array: arr, activeIndices: [idx], swappedIndices: [], sortedIndices: [], eliminatedIndices: [] };

        // Since waiting for an actual bit flip is most likely not very time efficient, we simulate it:
        if (Math.random() < 0.001) {
            arr[idx] = arr[idx] ^ 1; // flip least significant bit
            yield { array: arr, activeIndices: [], swappedIndices: [idx], sortedIndices: [], eliminatedIndices: [] };
        }
        attempts++;
        if(attempts > 50) break;
    }

    if (isSorted(arr)) {
        yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices: [...Array(arr.length).keys()], eliminatedIndices: [] };
    }
}