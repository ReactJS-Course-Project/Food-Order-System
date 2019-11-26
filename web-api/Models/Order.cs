using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public int CutomerId { get; set; }
        public Customer customer { get; set; }
        public double Total { get; set; }
        public DateTime date { get; set; }
        public List<OrderFood> orderFoods { get; set; }
        public List<SellerOrder> sellerList { get; set; }
    }
}