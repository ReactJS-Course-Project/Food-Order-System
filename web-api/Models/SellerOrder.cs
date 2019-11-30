namespace web_api.Models
{
    public class SellerOrder
    {
        public int sellerId { get; set; }
        public Seller seller { get; set; }
        public int orderId { get; set; }
        public Order order { get; set; }
    }
}