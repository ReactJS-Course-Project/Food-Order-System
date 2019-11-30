using System.Collections.Generic;
using web_api.Models;

namespace web_api.Services
{
    public interface ISellerService
    {
        Seller Authenticate(string username, string password);
        IEnumerable<Seller> GetAll();
        Seller GetById(int id);
        Seller Create(Seller seller, string password);
        void Update(Seller seller, string password = null);
        void Delete(int id);
    }
}