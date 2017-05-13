package queue;

public class ResizingArrayQueueOfStrings {

    private int head = 0;
    private int tail = 1;
    private String[] q;

    public ResizingArrayQueueOfStrings() {
        q = new String[2];
    }

    public int size() {
        return q.length;
    }

    public boolean isEmpty() {
        return q[head] == null;
    }

    public void enqueue(String item) {
        if (isEmpty()) {
            q[head] = item;
        } else {
            if (tail == q.length) {
                resize(2 * q.length);
            }
            q[tail++] = item;
        }
    }

    public String dequeue() {
        String headItem = q[head];
        q[head] = null;
        head++;
        if (head > 1 && head == q.length/4) {
            resize(q.length/2);
        }
        return headItem;
    }

    private void resize(int capacity) {
        String[] copy = new String[capacity];
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
