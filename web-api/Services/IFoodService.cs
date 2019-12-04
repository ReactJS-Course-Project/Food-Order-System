using System.Collections.Generic;
using web_api.Models;

namespace web_api.Services
{
    public interface IFoodService
    {
        Food Add(Food food);
        IEnumerable<Food> GetOwnFoods(int SellerId);
        Food GetFood(int id);
        void updateFood(Food food);
        void deleteFood(int id);
        IEnumerable<Category> GetAllCategories();
    }
}