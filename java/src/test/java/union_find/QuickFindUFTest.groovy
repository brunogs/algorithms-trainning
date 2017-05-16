package union_find

import spock.lang.Specification

class QuickFindUFTest extends Specification {

    def "given empty datastructure should not found connection"() {
        given:
            def unionFind = new QuickFindUF(10)
        expect:
            !unionFind.connected(4, 3)
    }

    def "should direct connect pairs"() {
        given:
            def unionFind = new QuickFindUF(10)
        when:
            unionFind.union(4, 3)
        then:
            unionFind.connected(4, 3)
            unionFind.connected(3, 4)
    }

    def "should group connections"() {
        given:
            def unionFind = new QuickFindUF(10)
        when:
            unionFind.union(4 ,3)
            unionFind.union(3 ,8)
            unionFind.union(6, 5)
        then:
            unionFind.connected(4, 3)
            unionFind.connected(4, 8)
            !unionFind.connected(4, 5)
    }

    def "should valid connections"() {
        given:
            def unionFind = new QuickFindUF(10)
        when:
            unionFind.union(4, 3)
            unionFind.union(3, 8)
            unionFind.union(6, 5)
            unionFind.union(9, 4)
            unionFind.union(2, 1)
            unionFind.union(5, 0)
            unionFind.union(7, 2)
            unionFind.union(6, 1)
        then:
            unionFind.connected(8, 9)
            unionFind.connected(1, 0)
            unionFind.connected(6, 7)
    }
}
