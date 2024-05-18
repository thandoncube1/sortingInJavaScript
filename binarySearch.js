function binarySearch(list, length, target) {
    let low = 0;
    let high = length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target === list[mid]) {
            return mid;
        } else if (target < list[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


(function main() {
    console.log("Enter a number: ");
    let target = 34;

    let arrayList = [12, 22, 34, 45, 55, 63, 82, 98];
    let result = binarySearch(arrayList, arrayList.length, target);

    if (arrayList[result] == target) {
        console.log("Found the element on index [" + result + "]");
    } else {
        console.log("Element not found");
    }
})();