/**
* 插入排序
* 有数组：A[0..n]，其中，A[0..i-1]是已经排好序的，A[i..n]是未排好序的，
* 此时拿出A[i]元素，与A[0..i-1]逐个比较，
* 首先A[i]与A[i-1]比较，如果A[i-1]较大，则A[i-1]元素移到i的位置上面去，
* 然后A[i]与A[i-2]比较，如果A[i-2]较大，则A[i-2]元素移到i-1的位置上去，
* 然后A[i]与A[i-3]比较，如果A[i-3]较大，则A[i-3]元素移到i-2的位置上去
* ...
* A[i]与A[x](x>0 && x<i-1)比较，如果A[i]较大，则把A[i]放到x+1位置上去，
* 或者说在A[0..i-1]中一直没找到比A[i]更小的元素，则把A[i]放到0位置上去，
* A[i]比较结束，继续进行下一轮比较...
*/
function insertSort(arr) {
    for (var i = 1, il = arr.length; i < il; i++) {
        var temp = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
