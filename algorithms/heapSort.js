const heapify = async (arr, n, i, speed) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        await swap(arr, i, largest, speed);
        await heapify(arr, n, largest, speed);
    }
};

const heapSort = async (arr, speed) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        if (!sorting) return;
        await heapify(arr, n, i, speed);
    }
    for (let i = n - 1; i > 0; i--) {
        if (!sorting) return;
        await swap(arr, 0, i, speed);
        await heapify(arr, i, 0, speed);
    }
};
