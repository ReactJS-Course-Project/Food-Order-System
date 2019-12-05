using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using web_api.Data;
using web_api.Helpers;
using web_api.Models;

namespace web_api.Services
{
    public class FoodService : IFoodService
    {
        private DataContext _context;

        public FoodService(DataContext context)
        {
            _context = context;
        }
        public Food Add(Food food)
        {
            if (_context.foods.Any(x => x.name == food.name))
                throw new AppException($"Food's name {food.name} is already existed");

            Seller existingSeller = _context.sellers.Single(x => x.Id == food.SellerId);

            Category existingCategory = _context.categories.Single(x => x.Id == food.CategoryId);

            Food newFood = new Food
            {
                name = food.name,
                price = food.price,
                seller = existingSeller,
                category = existingCategory
            };

            _context.foods.Add(newFood);
            _context.SaveChanges();

            return food;
        }

        public void deleteFood(int id)
        {
            Food food = _context.foods.Find(id);
            if (food == null)
                throw new AppException("Food not Found");
            _context.foods.Remove(food);
            _context.SaveChanges();
        }

        public Food GetFood(int id)
        {
            var food = _context.foods.Find(id);
            if (food == null)
                throw new AppException("Food not found");

            return _context.foods
                    .Include(f => f.category)
                    .Include(f => f.seller)
                    .Single(f => f.Id == id);
        }

        public void updateFood(int id, string name, int CategoryId, double price)
        {
            var f = _context.foods.Find(id);
            if (f == null) throw new AppException("Food not found");
            if (_context.foods.Any(x => x.name == name)) throw new AppException($"Food's name {name} is already existed");

            Category existingCategory = _context.categories.SingleOrDefault(c => c.Id == CategoryId);

            f.name = name;
            f.price = price;
            f.category = existingCategory;

            _context.foods.Update(f);
            _context.SaveChanges();
        }

        public IEnumerable<Food> GetOwnFoods(int SellerId)
        {
            var seller = _context.sellers.SingleOrDefault(s => s.Id == SellerId);
            if (seller == null)
                throw new AppException("Seller not found");

            var Foods = _context.foods
                            .Include(f => f.seller)
                            .Include(f => f.category)
                            .Where(f => f.SellerId == SellerId);
            return Foods;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Food> GetFoodsByCategory(int CategoryId)
        {
            var category = _context.categories.Find(CategoryId);
            if (category == null) throw new AppException("Category not found");
            return _context.foods
                            .Include(f => f.category)
                            .Include(f => f.seller)
                            .Where(f => f.CategoryId == CategoryId);
        }
    }
}