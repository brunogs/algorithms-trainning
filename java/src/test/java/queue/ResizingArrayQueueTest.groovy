package queue

import spock.lang.Specification

class ResizingArrayQueueTest extends Specification {

    def "should enqueue item"() {
        given:
            def queueOfStrings = new ResizingArrayQueue()
        when:
            queueOfStrings.enqueue("item1")
        then:
            !queueOfStrings.empty
    }

    def "should work with anothers types item"() {
        given:
            def queueOfStrings = new ResizingArrayQueue()
        when:
            queueOfStrings.enqueue(1)
            queueOfStrings.enqueue("abc")
        then:
            !queueOfStrings.empty
    }

    def "should dequeue queue"() {
        given:
            def queueOfStrings = new ResizingArrayQueue()
            queueOfStrings.enqueue("item1")
            queueOfStrings.enqueue("item2")
            queueOfStrings.enqueue("item3")
        when:
            String dequeuedItem = queueOfStrings.dequeue()
        then:
            dequeuedItem == "item1"
    }

    def "should resize the queue"() {
        given:
            def queueOfStrings = new ResizingArrayQueue()
        when:
            queueOfStrings.enqueue("item1")
            queueOfStrings.enqueue("item2")
            queueOfStrings.enqueue("item3")
        then:
            old(queueOfStrings.size()) == 2
            queueOfStrings.size() == 4
    }

    def "should shring the queue"() {
        given:
            def queueOfStrings = new ResizingArrayQueue()
            queueOfStrings.enqueue("item1")
            queueOfStrings.enqueue("item2")
            queueOfStrings.enqueue("item3")
            queueOfStrings.enqueue("item4")
            queueOfStrings.enqueue("item5")
        when:
            queueOfStrings.dequeue()
            queueOfStrings.dequeue()
            queueOfStrings.dequeue()
        then:
            old(queueOfStrings.size()) == 8
            queueOfStrings.size() == 4
            queueOfStrings.dequeue() == "item4"
    }
}
