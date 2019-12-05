using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using web_api.Dto;
using web_api.Helpers;
using web_api.Models;
using web_api.Services;

namespace web_api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class FoodsController : ControllerBase
    {
        private IFoodService _foodService;
        private IConfiguration _config;

        public FoodsController(IFoodService foodService, IConfiguration config)
        {
            _foodService = foodService;
            _config = config;
        }

        [HttpPost]
        [Route("import")]
        public IActionResult addFood([FromBody]AddFoodModel foodDto)
        {
            foodDto.name = foodDto.name.ToLower();

            try
            {
                // save
                var food = new Food()
                {
                    name = foodDto.name,
                    price = foodDto.price,
                    SellerId = foodDto.SellerId,
                    CategoryId = foodDto.CategoryId
                };
                _foodService.Add(food);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }

        [HttpGet("{SellerId}")]
        public IActionResult viewFoods(int SellerId)
        {
            var foods = _foodService.GetOwnFoods(SellerId);
            return Ok(
                JsonConvert.SerializeObject(
                    foods,
                    Formatting.Indented,
                    new JsonSerializerSettings()
                    {
                        ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                    }
                )
            );
        }
        [HttpGet("GetFood/{id}")]
        public IActionResult GetFood(int id)
        {
            return Ok(
                JsonConvert.SerializeObject(
                    _foodService.GetFood(id),
                    Formatting.Indented,
                    new JsonSerializerSettings()
                    {
                        ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                    }
                )
            );
        }

        [HttpGet("Category/{id}")]
        public IActionResult GetFoodByCategory(int id)
        {
            return Ok(
                JsonConvert.SerializeObject(
                    _foodService.GetFoodsByCategory(id),
                    Formatting.Indented,
                    new JsonSerializerSettings()
                    {
                        ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                    }
                )
            );
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _foodService.deleteFood(id);
            return Ok();
        }

        [HttpPut("Update/{id}")]
        public IActionResult Update(int id, [FromBody] UpdateFood foodParam)
        {
            _foodService.updateFood(id, foodParam.name, foodParam.CategoryId, foodParam.price);
            return Ok();
        }
    }
}
