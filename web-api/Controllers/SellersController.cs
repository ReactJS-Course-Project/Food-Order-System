using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using web_api.Dto;
using web_api.Helpers;
using web_api.Models;
using web_api.Services;

namespace web_api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class SellersController : ControllerBase
    {
        private ISellerService _sellerService;
        private IConfiguration _config;

        public SellersController(ISellerService sellerService, IConfiguration config)
        {
            _sellerService = sellerService;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel sellerDto)
        {
            var seller = _sellerService.Authenticate(sellerDto.Username.ToLower(), sellerDto.Password);

            if (seller == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            // generate token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config.GetSection("AppSettings:Token").Value);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier,seller.Id.ToString()),
                    new Claim(ClaimTypes.Name, seller.userName)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            return Ok(new { tokenString });
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]RegisterModel sellerDto)
        {
            sellerDto.userName = sellerDto.userName.ToLower();

            try
            {
                // save 
                var seller = new Seller()
                {
                    firstName = sellerDto.firstName,
                    lastName = sellerDto.lastName,
                    userName = sellerDto.userName,
                    sex = sellerDto.sex,
                    age = sellerDto.age,
                    adminId = sellerDto.adminId
                };
                _sellerService.Create(seller, sellerDto.password);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var sellers = _sellerService.GetAll();
            return Ok(sellers);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]RegisterModel sellerDto)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _sellerService.Delete(id);
            return Ok();
        }
    }
}