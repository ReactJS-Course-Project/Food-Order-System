using System.Collections.Generic;
using System.Linq;
using web_api.Data;
using web_api.Helpers;
using web_api.Models;

namespace web_api.Services
{
    public class CategoryService : ICategoryService
    {
        private DataContext _context;
        public CategoryService(DataContext context)
        {
            _context = context;
        }
        public void addCategory(Category category)
        {
            if (_context.categories.Any(x => x.name == category.name))
                throw new AppException($"Category's name {category.name} is already existed");

            Admin existingAdmin = _context.admins.Single(x => x.Id == category.AdminId);

            Category newCategory = new Category()
            {
                name = category.name,
                admin = existingAdmin
            };

            _context.categories.Add(newCategory);
            _context.SaveChanges();
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return _context.categories;
        }
    }
}