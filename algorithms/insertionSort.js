const insertionSort = async (arr, speed) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
            renderArray();
            await sleep(speed);
        }
        arr[j + 1] = key;
        renderArray();
        await sleep(speed);
    }
};
