package queue

import spock.lang.Specification


class LinkedQueueOfStringsTest extends Specification {

    def "should enqueue item"() {
        given:
            def queueOfStrings = new LinkedQueueOfStrings()
        when:
            queueOfStrings.enqueue("item1")
        then:
            !queueOfStrings.empty
    }

    def "should dequeue queue"() {
        given:
            def queueOfStrings = new LinkedQueueOfStrings()
            queueOfStrings.enqueue("item1")
            queueOfStrings.enqueue("item2")
            queueOfStrings.enqueue("item3")
        when:
            String dequeuedItem = queueOfStrings.dequeue()
        then:
            dequeuedItem == "item1"
    }
}
