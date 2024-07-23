const partition = async (arr, low, high, speed) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            await swap(arr, i, j, speed);
        }
    }
    await swap(arr, i + 1, high, speed);
    return i + 1;
};

const quickSort = async (arr, low = 0, high = arr.length - 1, speed) => {
    if (low < high) {
        let pi = await partition(arr, low, high, speed);
        await quickSort(arr, low, pi - 1, speed);
        await quickSort(arr, pi + 1, high, speed);
    }
};
