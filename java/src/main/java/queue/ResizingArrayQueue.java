package queue;

import static common.ArrayGeneric.newTypedArray;

public class ResizingArrayQueue<Item> {

    private int head = 0;
    private int tail = 1;
    private Item[] q;

    public ResizingArrayQueue() {
        q = newTypedArray(2);
    }

    public int size() {
        return q.length;
    }

    public boolean isEmpty() {
        return q[head] == null;
    }

    public void enqueue(Item item) {
        if (isEmpty()) {
            q[head] = item;
        } else {
            if (tail == q.length) {
                resize(2 * q.length);
            }
            q[tail++] = item;
        }
    }

    public Item dequeue() {
        Item headItem = q[head];
        q[head] = null;
        head++;
        if (head > 1 && head == q.length/4) {
            resize(q.length/2);
        }
        return headItem;
    }

    private void resize(int capacity) {
        Item[] copy = newTypedArray(capacity);
        int copyIndex = 0;
        for (int i = head; i < tail; i++) {
            copy[copyIndex] = q[i];
            copyIndex++;
        }
        q = copy;
        head = 0;
        tail = copyIndex;
    }
}
