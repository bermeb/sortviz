export function* bubbleSort(array) {
    let arr = [...array];
    let n = arr.length;
    let sortedIndices = [];

    for (let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            yield { array: arr, activeIndices: [j, j + 1], swappedIndices: [], sortedIndices, eliminatedIndices: [] };

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                yield {array: arr, activeIndices: [], swappedIndices: [j, j + 1], sortedIndices, eliminatedIndices: [] };
            }
        }
        sortedIndices.push(n - i - 1);
    }
    sortedIndices.push(0);
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices, eliminatedIndices: [] };
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
    yield { array: arr, activeIndices: [], swappedIndices: [], sortedIndices, eliminatedIndices: [] };
}