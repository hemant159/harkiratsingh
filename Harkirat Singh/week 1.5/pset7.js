function linearSearch() {
    const arr = [1 , 2, 3, 4, 5];
    const val = 5; 

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            console.log(i + 1);
        }
    }
}

function findElement() {
    linearSearch();
}

setTimeout(findElement, 1000);

console.log("finding the element");