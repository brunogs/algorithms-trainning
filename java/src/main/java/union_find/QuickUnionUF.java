package union_find;

/*               8
*              / | \
*            /   |  \
*          /     |   \
*        1       3    9
*      / | \     |
*    /   |   \   |
*   0    2    7  4
*   |
*   5
*   |
*   6
*
*        |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
*  id[]: |  1  |  8  |  1  |  8  |  3  |  0  |  5  |  1  |  8  |  8  |
 */
public class QuickUnionUF {

    private int[] id;

    public QuickUnionUF(int n) {
        this.id = new int[n];
        for (int i = 0; i < n; i++) {
            id[i] = i;
        }
    }


    private int root(int i) {
        while(i != id[i]) {
            i = id[i];
        }
        return i;
    }

    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }

    /*
    * union is also too expensive here
     */
    public void union(int p, int q) {
        int i = root(p);
        int j = root(q);
        id[i] = j;
    }
}
