using System.Collections.Generic;

namespace web_api.Models
{
    public class Admin : User
    {
        public List<Customer> customerList { get; set; }
        public List<Seller> sellerList { get; set; }
    }
}