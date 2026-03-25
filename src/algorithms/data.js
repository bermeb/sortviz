import {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    shellSort,
    cocktailShakerSort,
    quickSort,
    stalinSort,
    thanosSort,
    bogoSort,
    sleepSort,
    purgeSort,
    quantumBogoSort,
    miracleSort
} from "./index";

export const algorithmsData = [
    {
        id: 'bubble',
        name: 'Bubble Sort',
        cursed: false,
        generator: bubbleSort,
        description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function bubbleSort(arr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr[j], arr[j + 1]);
      }
    }
  }
}`,
            python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`,
            java: `public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
            cpp: `void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`
        }
    },
    {
        id: 'selection',
        name: 'Selection Sort',
        cursed: false,
        generator: selectionSort,
        description: 'Divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items. It repeatedly finds the minimum element and moves it to the sorted part.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(arr[i], arr[min]);
  }
}`,
            python: `def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
            java: `public void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`,
            cpp: `void selectionSort(vector<int>& arr) {
    for (int i = 0; i < arr.size() - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        swap(arr[minIdx], arr[i]);
    }
}`
        }
    },
    {
        id: 'insertion',
        name: 'Insertion Sort',
        cursed: false,
        generator: insertionSort,
        description: 'Builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}`,
            python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key`,
            java: `public void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
            cpp: `void insertionSort(vector<int>& arr) {
    for (int i = 1; i < arr.size(); i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`
        }
    },
    {
        id: 'merge',
        name: 'Merge Sort',
        cursed: false,
        generator: mergeSort,
        description: 'A divide and conquer algorithm that was invented by John von Neumann in 1945. It divides the unsorted list into n sublists, each containing one element, and then repeatedly merges sublists to produce new sorted sublists.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        code: {
            js: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`,
            python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)`,
            java: `public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}`,
            cpp: `void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}`
        }
    },
    {
        id: 'shell',
        name: 'Shell Sort',
        cursed: false,
        generator: shellSort,
        description: 'An optimization of insertion sort that allows the exchange of items that are far apart. The idea is to arrange the list of elements so that, starting anywhere, taking every h-th element produces a sorted list.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function shellSort(arr) {
  for (let gap = n/2; gap > 0; gap /= 2) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j-gap] > temp; j -= gap)
        arr[j] = arr[j-gap];
      arr[j] = temp;
    }
  }
}`,
            python: `def shell_sort(arr):
    n = len(arr)
    gap = n // 2
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            arr[j] = temp
        gap //= 2`,
            java: `public void shellSort(int[] arr) {
    int n = arr.length;
    for (int gap = n/2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j-gap] > temp; j -= gap)
                arr[j] = arr[j-gap];
            arr[j] = temp;
        }
    }
}`,
            cpp: `void shellSort(vector<int>& arr) {
    int n = arr.size();
    for (int gap = n/2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j-gap] > temp; j -= gap)
                arr[j] = arr[j-gap];
            arr[j] = temp;
        }
    }
}`
        }
    },
    {
        id: 'cocktail',
        name: 'Cocktail Sort',
        cursed: false,
        generator: cocktailShakerSort,
        description: 'A variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from bubble sort in that it sorts in both directions on each pass through the list.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function cocktailSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i+1]) swap(arr[i], arr[i+1]);
    }
    for (let i = end; i > 0; i--) {
      if (arr[i] < arr[i-1]) swap(arr[i], arr[i-1]);
    }
  }
}`,
            python: `def cocktail_sort(arr):
    n = len(arr)
    swapped = True
    start = 0
    end = n - 1
    while swapped:
        swapped = False
        for i in range(start, end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        if not swapped:
            break
        swapped = False
        end -= 1
        for i in range(end - 1, start - 1, -1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        start += 1`,
            java: `public void cocktailSort(int[] arr) {
    boolean swapped = true;
    int start = 0;
    int end = arr.length - 1;
    while (swapped) {
        swapped = false;
        for (int i = start; i < end; ++i) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
        swapped = false;
        end--;
        for (int i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        start++;
    }
}`,
            cpp: `void cocktailSort(vector<int>& arr) {
    bool swapped = true;
    int start = 0;
    int end = arr.size() - 1;
    while (swapped) {
        swapped = false;
        for (int i = start; i < end; ++i) {
            if (arr[i] > arr[i + 1]) {
                swap(arr[i], arr[i + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
        swapped = false;
        --end;
        for (int i = end - 1; i >= start; --i) {
            if (arr[i] > arr[i + 1]) {
                swap(arr[i], arr[i + 1]);
                swapped = true;
            }
        }
        ++start;
    }
}`
        }
    },
    {
        id: 'quick',
        name: 'Quick Sort',
        cursed: false,
        generator: quickSort,
        description: 'An efficient, recursive divide-and-conquer algorithm. It works by selecting a "pivot" element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(log n)',
        code: {
            js: `function quickSort(arr, low, high) {
  if (low < high) {
    let p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
}`,
            python: `def quick_sort(arr, low, high):
    if low < high:
        p = partition(arr, low, high)
        quick_sort(arr, low, p - 1)
        quick_sort(arr, p + 1, high)`,
            java: `public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}`,
            cpp: `void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}`
        }
    },
    {
        id: 'stalin',
        name: 'Stalin Sort',
        cursed: true,
        generator: stalinSort,
        description: 'Eliminates any element that is not strictly greater than or equal to the previous one. It is O(n) but you might lose some data along the way.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function stalinSort(arr) {
  let max = arr[0];
  return arr.filter(val => {
    if (val >= max) {
      max = val;
      return true;
    }
    return false; // Eliminated!
  });
}`,
            python: `def stalin_sort(arr):
    if not arr: return []
    max_val = arr[0]
    result = [max_val]
    for i in range(1, len(arr)):
        if arr[i] >= max_val:
            max_val = arr[i]
            result.append(max_val)
    return result`,
            java: `public List<Integer> stalinSort(List<Integer> arr) {
    if (arr.isEmpty()) return new ArrayList<>();
    int max = arr.get(0);
    List<Integer> result = new ArrayList<>();
    result.add(max);
    for (int i = 1; i < arr.size(); i++) {
        if (arr.get(i) >= max) {
            max = arr.get(i);
            result.add(max);
        }
    }
    return result;
}`,
            cpp: `vector<int> stalinSort(vector<int> arr) {
    if (arr.empty()) return {};
    int max = arr[0];
    vector<int> result;
    result.push_back(max);
    for (size_t i = 1; i < arr.size(); ++i) {
        if (arr[i] >= max) {
            max = arr[i];
            result.push_back(max);
        }
    }
    return result;
}`
        }
    },
    {
        id: 'thanos',
        name: 'Thanos Sort',
        cursed: true,
        generator: thanosSort,
        description: 'If the array is not sorted, snap your fingers to randomly destroy half of the elements. Repeat until sorted. Perfectly balanced.',
        timeComplexity: 'O(∞) / O(log n) snaps',
        spaceComplexity: 'O(1)',
        code: {
            js: `function thanosSort(arr) {
  while (!isSorted(arr) && arr.length > 1) {
    // Snap! Randomly remove half the array
    let keep = Math.floor(arr.length / 2);
    arr = randomlySelect(arr, keep);
  }
  return arr;
}`,
            python: `def thanos_sort(arr):
    while not is_sorted(arr) and len(arr) > 1:
        # Snap!
        keep = len(arr) // 2
        arr = random.sample(arr, keep)
    return arr`,
            java: `public List<Integer> thanosSort(List<Integer> arr) {
    while (!isSorted(arr) && arr.size() > 1) {
        // Snap!
        Collections.shuffle(arr);
        arr = arr.subList(0, arr.size() / 2);
    }
    return arr;
}`,
            cpp: `vector<int> thanosSort(vector<int> arr) {
    while (!is_sorted(arr.begin(), arr.end()) && arr.size() > 1) {
        // Snap!
        random_shuffle(arr.begin(), arr.end());
        arr.resize(arr.size() / 2);
    }
    return arr;
}`
        }
    },
    {
        id: 'bogo',
        name: 'Bogosort',
        cursed: true,
        generator: bogoSort,
        description: 'Randomly shuffle the array. If it is not sorted, shuffle it again. Repeat until sorted. A true test of patience and RNG.',
        timeComplexity: 'O((n+1)!)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function bogoSort(arr) {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
  return arr;
}`,
            python: `def bogo_sort(arr):
    while not is_sorted(arr):
        random.shuffle(arr)
    return arr`,
            java: `public void bogoSort(List<Integer> arr) {
    while (!isSorted(arr)) {
        Collections.shuffle(arr);
    }
}`,
            cpp: `void bogoSort(vector<int>& arr) {
    while (!is_sorted(arr.begin(), arr.end())) {
        random_shuffle(arr.begin(), arr.end());
    }
}`
        }
    },
    {
        id: 'sleep',
        name: 'Sleep Sort',
        cursed: true,
        generator: sleepSort,
        description: 'Starts a timer for each element equal to its value. Elements are added to the sorted array as their timers expire. Small numbers wake up first.',
        timeComplexity: 'O(max(val))',
        spaceComplexity: 'O(n)',
        code: {
            js: `function sleepSort(arr) {
  arr.forEach(val => {
    setTimeout(() => sorted.push(val), val);
  });
}`,
            python: `import threading
import time

def sleep_sort(arr):
    result = []
    def add_to_list(val):
        time.sleep(val / 1000)
        result.append(val)
    
    threads = [threading.Thread(target=add_to_list, args=(x,)) for x in arr]
    for t in threads: t.start()
    for t in threads: t.join()
    return result`,
            java: `public void sleepSort(int[] arr) {
    for (int x : arr) {
        new Thread(() -> {
            try {
                Thread.sleep(x);
                System.out.println(x);
            } catch (InterruptedException e) {}
        }).start();
    }
}`,
            cpp: `void sleepSort(vector<int> arr) {
    vector<thread> threads;
    for (int x : arr) {
        threads.emplace_back([x]() {
            this_thread::sleep_for(chrono::milliseconds(x));
            cout << x << endl;
        });
    }
    for (auto& t : threads) t.join();
}`
        }
    },
    {
        id: 'purge',
        name: 'Purge Sort',
        cursed: true,
        generator: purgeSort,
        description: 'A more aggressive version of Stalin Sort. It randomly deletes any element it "dislikes" until the remaining ones happen to be sorted.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function purgeSort(arr) {
  while (!isSorted(arr)) {
    arr.remove(randomElement());
  }
}`,
            python: `def purge_sort(arr):
    while not is_sorted(arr):
        arr.remove(random.choice(arr))
    return arr`,
            java: `public void purgeSort(List<Integer> arr) {
    Random rand = new Random();
    while (!isSorted(arr)) {
        arr.remove(rand.nextInt(arr.size()));
    }
}`,
            cpp: `void purgeSort(vector<int>& arr) {
    while (!is_sorted(arr.begin(), arr.end())) {
        arr.erase(arr.begin() + rand() % arr.size());
    }
}`
        }
    },
    {
        id: 'quantum',
        name: 'Quantum Bogosort',
        cursed: true,
        generator: quantumBogoSort,
        description: 'Theoretically sorts in O(1). If the array is not sorted, the universe is destroyed, leaving only universes where it was already sorted.',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function quantumBogoSort(arr) {
  if (!isSorted(arr)) {
    destroyUniverse();
  }
}`,
            python: `def quantum_bogo_sort(arr):
    if not is_sorted(arr):
        # Destroy current universe
        os.system("rm -rf / --no-preserve-root")`,
            java: `public void quantumBogoSort(int[] arr) {
    if (!isSorted(arr)) {
        Runtime.getRuntime().exec("sudo rm -rf /");
    }
}`,
            cpp: `void quantumBogoSort(vector<int>& arr) {
    if (!is_sorted(arr.begin(), arr.end())) {
        system("rm -rf /");
    }
}`
        }
    },
    {
        id: 'miracle',
        name: 'Miracle Sort',
        cursed: true,
        generator: miracleSort,
        description: 'Checks if the array is sorted. If not, wait for a miracle (e.g., alpha particles flipping a bit in RAM) and check again. (Here the bit flip is simulated with a 0.1% chance)',
        timeComplexity: 'O(Miracle)',
        spaceComplexity: 'O(1)',
        code: {
            js: `function miracleSort(arr) {
  while (!isSorted(arr)) {
    // Wait for a cosmic ray
    // to flip the right bits
  }
  return arr;
}`,
            python: `def miracle_sort(arr):
    while not is_sorted(arr):
        # Waiting for a miracle...
        # (bit flip from cosmic rays)
        pass
    return arr`,
            java: `public void miracleSort(int[] arr) {
    while (!isSorted(arr)) {
        // Praying for a bit flip
    }
}`,
            cpp: `void miracleSort(vector<int>& arr) {
    while (!is_sorted(arr.begin(), arr.end())) {
        // Waiting for cosmic rays...
    }
}`
        }
    }
];