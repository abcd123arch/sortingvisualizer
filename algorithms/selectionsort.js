const selectionSort = async (arr, speed) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        if (!sorting) return;
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (!sorting) return; 
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            await swap(arr, i, minIdx, speed);
        }

        renderArray(); 
        await sleep(speed); 
    }
};
