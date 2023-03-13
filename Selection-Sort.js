function swap(arr, x, y){
    let placeHolder = arr[x];
    arr[x] = arr[y];
    arr[y] = placeHolder; 
}

function selectSort(arr, value){
    let i, j, minIndex;

    for(i = 0; i < value-1; i++){
        minIndex = i;
        for(j = i + 1; j < value; j++)
        if(arr[j] < arr[minIndex])
            minIndex = j;
        swap(arr, minIndex, i)
    }
}