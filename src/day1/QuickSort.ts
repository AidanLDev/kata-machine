// Quick sort

function qs(arr: number[], low: number, hi: number): void {
    if (low >= hi) {
        return;
    }

    const pivotIdx = partition(arr, low, hi);

    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

// Partition

function partition(arr: number[], low: number, hi: number): number {
    let pivot = arr[hi];
    let idx = low - 1;

    for (let i = low; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
