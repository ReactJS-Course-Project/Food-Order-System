using System.Collections.Generic;

namespace web_api.Models
{
    public class Customer : User
    {
        public int adminId { get; set; }
        public Admin admin { get; set; }
        public List<Order> orderList { get; set; }
    }
}