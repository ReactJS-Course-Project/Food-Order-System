namespace web_api.Dto
{
    public class RegisterModel
    {
        public int Id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string sex { get; set; }
        public int age { get; set; }
        public int adminId { get; set; }
    }
}