using System;

namespace web_api.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public Customer customer { get; set; }
        public DateTime payDate { get; set; }
        public int historyId { get; set; }
        public History history { get; set; }
    }
}