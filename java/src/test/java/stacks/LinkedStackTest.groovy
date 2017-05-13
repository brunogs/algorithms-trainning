package stacks

import spock.lang.Specification


class LinkedStackTest extends Specification {


    def "excpect an empty stack"() {
        given:
            def stackOfStrings = new LinkedStack()
        expect:
            stackOfStrings.empty
    }

    def "should be able to push itens in stack"() {
        given:
            def stackOfStrings = new LinkedStack()
        when:
            stackOfStrings.push("item1")
        then:
            !stackOfStrings.empty
    }

    def "should be able to pop itens in stack"() {
        given:
            def stackOfStrings = new LinkedStack()
            stackOfStrings.push("item1")
            stackOfStrings.push("item2")
            stackOfStrings.push("item3")
        when:
            def removedItem = stackOfStrings.pop()
        then:
            removedItem == "item3"
            stackOfStrings.pop() == "item2"
    }
}
