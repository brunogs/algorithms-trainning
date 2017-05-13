package stacks

import spock.lang.Specification


class ResizingArrayStackOfStringsTest extends Specification {

    def "excpect an empty stack"() {
        given:
            def stackOfStrings = new ResizingArrayStackOfStrings()
        expect:
            stackOfStrings.empty
    }

    def "should be able to push itens in stack"() {
        given:
            def stackOfStrings = new ResizingArrayStackOfStrings()
        when:
            stackOfStrings.push("item1")
        then:
            !stackOfStrings.empty
    }

    def "should be able to pop itens in stack"() {
        given:
            def stackOfStrings = new ResizingArrayStackOfStrings()
            stackOfStrings.push("item1")
            stackOfStrings.push("item2")
            stackOfStrings.push("item3")
        when:
            def removedItem = stackOfStrings.pop()
        then:
            removedItem == "item3"
            stackOfStrings.pop() == "item2"
    }

    def "should resize the stack"() {
        given:
            def stackOfStrings = new ResizingArrayStackOfStrings()
        when:
            stackOfStrings.push("item1")
            stackOfStrings.push("item2")
            stackOfStrings.push("item3")
        then:
            old(stackOfStrings.size()) == 1
            stackOfStrings.size() == 4
    }

    def "should shring the stack"() {
        given:
            def stackOfStrings = new ResizingArrayStackOfStrings()
            stackOfStrings.push("item1")
            stackOfStrings.push("item2")
            stackOfStrings.push("item3")
            stackOfStrings.push("item4")
            stackOfStrings.push("item5")
        when:
            stackOfStrings.pop()
            stackOfStrings.pop()
            stackOfStrings.pop()
        then:
            old(stackOfStrings.size()) == 8
            stackOfStrings.size() == 4
    }
}
