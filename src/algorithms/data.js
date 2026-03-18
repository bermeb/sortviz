import {
    bubbleSort,
    stalinSort
} from "./index.js";

export const algorithmsData = [
    {
        id: 'bubble',
        name: 'Bubble Sort',
        cursed: false,
        generator: bubbleSort,
        description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.'
    },
    {
        id: 'stalin',
        name: 'Stalin Sort',
        cursed: true,
        generator: stalinSort,
        description: 'Eliminates any element that is not strictly greater than or equal to the previous one. It is O(n) but you might lose some data along the way.'
    }
]