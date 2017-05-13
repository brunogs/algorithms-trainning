package common;

public class ArrayGeneric {

    @SuppressWarnings("unchecked")
    public static <T> T[] newTypedArray(int capacity) {
        return (T[])new Object[capacity];
    }
}
