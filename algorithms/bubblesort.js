const swap = async (arr, i, j, speed) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    renderArray();
    await sleep(speed);
};

const bubbleSort = async (arr, speed) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (!sorting) return;
            if (arr[j] > arr[j + 1]) {
                await swap(arr, j, j + 1, speed);
            }
        }
    }
};
