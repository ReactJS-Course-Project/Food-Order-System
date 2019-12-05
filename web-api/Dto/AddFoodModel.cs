namespace web_api.Dto
{
  public class AddFoodModel
  {
    public int SellerId { get; set; }
    public int CategoryId { get; set; }
    public string name { get; set; }
    public double price { get; set; }
  }
}