package stacks;

public class Evaluate {

    public static void main(String[] args) {
        ResizingArrayStack<Character> ops = new ResizingArrayStack<>();
        ResizingArrayStack<Double> vals = new ResizingArrayStack<>();

        String expression = "( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )";

        for (Character s : expression.toCharArray()) {
            if (s == '(' || s == ' ') ;
            else if (s == '+' || s == '*') {
                ops.push(s);
            } else if (s == ')') {
                char op = ops.pop();
                if (op == '+') vals.push(vals.pop() + vals.pop());
                else if (op == '*') vals.push(vals.pop() * vals.pop());
            } else {
                vals.push(Double.valueOf(s + ""));
            }
        }
        System.out.println(vals.pop());
    }
}
