using System.Collections.Generic;

namespace web_api.Models
{
    public class Food
    {
        public int Id { get; set; }
        public int SellerId { get; set; }
        public Seller seller { get; set; }
        public int CategoryId { get; set; }
        public Category category { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public List<OrderFood> orderFoods { get; set; }
    }
}