package stacks;

import static common.ArrayGeneric.newTypedArray;

public class FixedCapacityStack<Item> {

    private Item[] s;
    private int N = 0;

    public FixedCapacityStack(int capacity) {
        s = newTypedArray(capacity);
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public void push(Item item) {
        s[N++] = item;
    }

    public Item pop() {
        Item item = this.s[--N];
        s[N] = null;
        return item;
    }
}
