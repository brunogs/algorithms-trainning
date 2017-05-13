package stacks;

import static common.ArrayGeneric.newTypedArray;

public class ResizingArrayStack<Item> {

    private Item[] s;
    private int N = 0;

    public ResizingArrayStack() {
        s = newTypedArray(1);
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public void push(Item item) {
        if (N == s.length) {
            resize(2 * s.length);
        }
        s[N++] = item;
    }

    public Item pop() {
        Item item = this.s[--N];
        s[N] = null;
        if (N > 0 && N == s.length/4) {
            resize(s.length/2);
        }
        return item;
    }

    public int size() {
        return s.length;
    }

    private void resize(int capacity) {
        Item[] copy = newTypedArray(capacity);
        for (int i = 0; i < N; i++) {
            copy[i] = s[i];
        }
        s = copy;
    }
}
