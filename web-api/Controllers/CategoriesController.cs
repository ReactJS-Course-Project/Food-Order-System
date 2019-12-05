using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using web_api.Services;

namespace web_api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : ControllerBase
    {
        private ICategoryService _categoryService;
        private IConfiguration _config;

        public CategoriesController(ICategoryService categoryService, IConfiguration config)
        {
            _categoryService = categoryService;
            _config = config;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var categories = _categoryService.GetAllCategories();
            return Ok(categories);
        }
    }
}