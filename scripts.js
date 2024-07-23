let array = [];
let sorting = false;
let currentAlgorithm = null;

const generateArray = () => {
    if (sorting) return;
    const size = document.getElementById('sizeSlider').value;
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 400) + 5);
    }
    renderArray();
};

const renderArray = () => {
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';
    const barColor = document.getElementById('barColor').value;
    array.forEach(height => {
        const bar = document.createElement('div');
        bar.style.height = `${height}px`;
        bar.style.width = `${600 / array.length}px`;
        bar.style.backgroundColor = barColor;
        bar.style.margin = '0 1px';
        arrayContainer.appendChild(bar);
    });
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const updateSpeed = () => {
    if (sorting && currentAlgorithm) {
        const speed = 101 - document.getElementById('speedSlider').value;
        currentAlgorithm(array, speed);
    }
};

const sortArray = async (algorithm) => {
    if (sorting) {
        sorting = false;
        return;
    }
    sorting = true;
    const speed = 101 - document.getElementById('speedSlider').value;
    switch (algorithm) {
        case 'bubbleSort':
            currentAlgorithm = bubbleSort;
            await bubbleSort(array, speed);
            break;
        case 'selectionSort':
            currentAlgorithm = selectionSort;
            await selectionSort(array, speed);
            break;
        case 'insertionSort':
            currentAlgorithm = insertionSort;
            await insertionSort(array, speed);
            break;
        case 'quickSort':
            currentAlgorithm = quickSort;
            await quickSort(array, 0, array.length - 1, speed);
            break;
        case 'mergeSort':
            currentAlgorithm = mergeSort;
            await mergeSort(array, 0, array.length - 1, speed);
            break;
        case 'heapSort':
            currentAlgorithm = heapSort;
            await heapSort(array, speed);
            break;
        default:
            console.error('Unknown algorithm:', algorithm);
            break;
    }
    sorting = false;
    currentAlgorithm = null;
    renderArray();
};
generateArray();
