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
        void Update(int id, string firstName, string lastName,
                string userName, string sex, int age, string password);
        void UpdatePassword(int id, string oldPassword, string newPassword);
        void Delete(int id);
        string GetAdminUsername(int SellerId);
    }
}