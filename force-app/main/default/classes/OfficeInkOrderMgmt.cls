/**
 * OfficeOrderMgmt
 * Manages office supply orders for ink and paper.
 *
 * Design:
 * - Shared static counter initialized to 100000
 * - nextOrderNumber() formats as ORD-<sequence> and increments the counter
 * - orderInk(...) and orderPaper(...) both return the next order number
 *
 * Notes:
 * - Counter is in-memory static (resets per transaction/execute context)
 */
public class OfficeInkOrderMgmt {
    // Starting sequence value as requested (ORD-100000 first)
    private static Integer nextInkSeq = 100000;

    // Data structures for Invocable input and output
    public class InkOrderRequest {
        @InvocableVariable(required=true) public String inkManufacturer;
        @InvocableVariable(required=true) public String inkType;
        @InvocableVariable(required=true) public String serialNumber;
    }

    public class OrderResponse {
        @InvocableVariable public String orderNumber;
    }

    // Sleep helper: waits ~1 second without blocking longer than necessary
    private static void waitOneSecond() {
        // Apex doesn't have Thread.sleep; we can simulate delay with a time check loop.
        // Keep the loop minimal to avoid excessive CPU; for demo/testing use only.
        Datetime start = Datetime.now();
        while (Datetime.now().getTime() - start.getTime() <= 1000) {
            // no-op spin wait for ~1s
        }
    }

    // Formats and increments the global order number
    private static String nextOrderNumber() {
        String nbr = 'ORD-' + String.valueOf(nextInkSeq);
        nextInkSeq++;
        return nbr;
    }

    /**
     * Invocable method to place an order for ink.
     * Accepts a list of InkOrderRequest and returns a corresponding list of OrderResponse.
     */
    @InvocableMethod(label='Order Ink' description='Place an order for ink and return an order number starting at ORD-100000')
    public static List<OrderResponse> orderInk(List<InkOrderRequest> requests) {
        List<OrderResponse> results = new List<OrderResponse>();
        for (InkOrderRequest req : requests) {
            waitOneSecond();
            OrderResponse res = new OrderResponse();
            res.orderNumber = nextOrderNumber();
            results.add(res);
        }
        return results;
    }
}
