using System.Collections.Generic;

namespace web_api.Models
{
    public class History
    {
        public int Id { get; set; }
        public List<Payment> payments { get; set; }
    }
}