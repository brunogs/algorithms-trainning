package stacks;

import common.Node;

public class LinkedStack<Item> {

    private Node<Item> first = null;

    public boolean isEmpty() {
        return first == null;
    }

    public void push(Item item) {
        Node<Item> oldFirst = first;
        first = new Node<>();
        first.item = item;
        first.next = oldFirst;
    }

    public Item pop() {
        Item item = first.item;
        first = first.next;
        return item;
    }

}
