using System.Collections.Generic;

namespace web_api.Models
{
    public class Seller : User
    {
        public int adminId { get; set; }
        public Admin admin { get; set; }
        public List<Food> foodList { get; set; }
        public List<SellerOrder> orderList { get; set; }
    }
}