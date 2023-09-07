//array reverse

function reverseArray(arr) {

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        
        start++;
        end--;
    }
}
reverseArray([1, 2, 3, 4, 5]); //[5,4,3,2,1]

//midle value find

function middleValueFind(arr) {

    let solo = 0;
    let fast = solo + 1;
    let endPoint = arr.length
    let middle = arr[0]

    while (fast <= endPoint) {
        middle = arr[solo]
        solo++;
        fast += 2
    }

    return middle
}
middleValueFind([1, 2, 3, 4, 5,6,7,8,9]); //5
