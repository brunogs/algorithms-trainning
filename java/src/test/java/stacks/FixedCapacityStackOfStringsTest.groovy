package stacks

import spock.lang.Specification


class FixedCapacityStackOfStringsTest extends Specification {

    def "excpect an empty stack"() {
        given:
            def stackOfStrings = new FixedCapacityStackOfStrings(10)
        expect:
            stackOfStrings.empty
    }

    def "should be able to push itens in stack"() {
        given:
            def stackOfStrings = new FixedCapacityStackOfStrings(10)
        when:
            stackOfStrings.push("item1")
        then:
            !stackOfStrings.empty
    }

    def "should be able to pop itens in stack"() {
        given:
            def stackOfStrings = new FixedCapacityStackOfStrings(10)
            stackOfStrings.push("item1")
            stackOfStrings.push("item2")
            stackOfStrings.push("item3")
        when:
            def removedItem = stackOfStrings.pop()
        then:
            removedItem == "item3"
            stackOfStrings.pop() == "item2"
    }

    def "should fail when there is no capacity"() {
        given:
            def stackOfStrings = new FixedCapacityStackOfStrings(2)
        when:
            stackOfStrings.push("item1")
            stackOfStrings.push("item2")
            stackOfStrings.push("item3")
        then:
            thrown ArrayIndexOutOfBoundsException
    }

}
