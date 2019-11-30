using System.Collections.Generic;

namespace web_api.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string name { get; set; }
        public int AdminId { get; set; }
        public Admin admin { get; set; }
        public List<Food> foodList { get; set; }
    }
}