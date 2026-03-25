import {
    bubbleSort,
    stalinSort
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
    }
]