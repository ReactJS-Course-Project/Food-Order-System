using System.ComponentModel.DataAnnotations;

namespace web_api.Dto
{
    public class UpdateInfo
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string userName { get; set; }
        [Required]
        public string password { get; set; }
        public string sex { get; set; }
        public int age { get; set; }
    }
}