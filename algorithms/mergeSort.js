const merge = async (arr, l, m, r, speed) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let i = 0; i < n2; i++) R[i] = arr[m + 1 + i];

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        renderArray();
        await sleep(speed);
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        renderArray();
        await sleep(speed);
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        renderArray();
        await sleep(speed);
        k++;
    }
};

const mergeSort = async (arr, l = 0, r = arr.length - 1, speed) => {
    if (l >= r) return;
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m, speed);
    await mergeSort(arr, m + 1, r, speed);
    await merge(arr, l, m, r, speed);
};
