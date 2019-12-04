using System.ComponentModel.DataAnnotations;

namespace web_api.Dto
{
    public class UpdatePasswordModel
    {
        [Required]
        public string oldPassword { get; set; }
        [Required]
        public string newPassword { get; set; }
    }
}