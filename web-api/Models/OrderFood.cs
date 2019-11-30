namespace web_api.Models
{
    public class OrderFood
    {
        public int FoodId { get; set; }
        public Food food { get; set; }
        public int OrderId { get; set; }
        public Order order { get; set; }
        public int Qty { get; set; }
    }
}