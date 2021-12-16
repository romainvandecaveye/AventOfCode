export function PriorityQueue(compare: any) {
  const heap = [null];

  const swap = function (a: any, b: any) {
    const temp = heap[a];
    heap[a] = heap[b];
    heap[b] = temp;
  };

  const siftUp = function (idx: number) {
    const parent = Math.floor(idx / 2);
    while (parent > 0 && compare(heap[idx], heap[parent])) {
      swap(idx, parent);
      siftUp(parent);
    }
  };

  const siftDown = function (idx: number) {
    const leftChild = idx * 2;
    const rightChild = idx * 2 + 1;

    if (
      leftChild < heap.length &&
      compare(heap[leftChild], heap[idx]) &&
      (rightChild >= heap.length || compare(heap[leftChild], heap[rightChild]))
    ) {
      swap(idx, leftChild);
      siftDown(leftChild);
    } else if (
      rightChild < heap.length &&
      compare(heap[rightChild], heap[idx])
    ) {
      swap(idx, rightChild);
      siftDown(rightChild);
    }
  };

  const enqueue = function (value: any) {
    heap.push(value);
    siftUp(heap.length - 1);
  };

  const isEmpty = function () {
    return heap.length === 1;
  };

  const dequeue = function () {
    if (isEmpty()) return null;
    const top = heap[1];
    const end = heap.pop();

    // check if we removed last item
    if (!isEmpty() && end) {
      heap[1] = end;
      siftDown(1);
    }

    return top;
  };

  return { enqueue, dequeue, isEmpty };
}
