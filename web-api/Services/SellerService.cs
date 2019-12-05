using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using web_api.Data;
using web_api.Helpers;
using web_api.Models;

namespace web_api.Services
{
    public class SellerService : ISellerService
    {
        private DataContext _context;
        public SellerService(DataContext context)
        {
            _context = context;
        }
        public Seller Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password)) return null;
            var seller = _context.sellers.SingleOrDefault(x => x.userName == username);

            // check if seller exists
            if (seller == null) return null;

            // check if password is correct
            if (!VerifyPasswordHash(password, seller.passwordHash, seller.passwordSalt)) return null;

            // authentication successful
            return seller;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentException("password");
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (passwordHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (passwordSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        public Seller Create(Seller seller, string password)
        {
            // validate
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");

            if (_context.sellers.Any(x => x.userName == seller.userName))
                throw new AppException("Username \"" + seller.userName + "\" is already taken");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            Admin existingAdmin = _context.admins
                                    .SingleOrDefault(a => a.Id == seller.adminId);

            Seller newSeller = new Seller()
            {
                firstName = seller.firstName,
                lastName = seller.lastName,
                userName = seller.userName,
                passwordHash = passwordHash,
                passwordSalt = passwordSalt,
                sex = seller.sex,
                age = seller.age,
                admin = existingAdmin
            };

            _context.sellers.Add(newSeller);
            _context.SaveChanges();

            return newSeller;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null)
                throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public void Delete(int id)
        {
            var seller = _context.sellers.Find(id);
            if (seller != null)
            {
                _context.sellers.Remove(seller);
                _context.SaveChanges();
            }
        }

        public IEnumerable<Seller> GetAll()
        {
            return _context.sellers;
        }

        public Seller GetById(int id)
        {
            return _context.sellers.Find(id);
        }

        public void Update(int id, string firstName, string lastName,
                string userName, string sex, int age, string password)
        {

            var seller = _context.sellers.Find(id);

            if (seller == null)
                throw new AppException("User not found");

            if (userName != seller.userName)
            {
                // username has changed so check if the new username is already taken
                if (_context.sellers.Any(x => x.userName == userName))
                    throw new AppException("Username " + userName + " is already taken");
            }

            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is incorrect");
            // check if password is correct
            else if (!VerifyPasswordHash(password, seller.passwordHash, seller.passwordSalt))
                throw new AppException("Password is incorrect");
            // update seller properties
            seller.firstName = firstName;
            seller.lastName = lastName;
            seller.userName = userName;
            seller.sex = sex;
            seller.age = age;

            _context.sellers.Update(seller);
            _context.SaveChanges();
        }

        public string GetAdminUsername(int SellerId)
        {
            // get current seller
            Seller currentSeller = _context.sellers
                                    .Include(a => a.admin)
                                    .SingleOrDefault(s => s.Id == SellerId);
            return currentSeller.admin.userName;
        }

        public void UpdatePassword(int id, string oldPassword, string newPassword)
        {
            var seller = _context.sellers.Find(id);
            if (string.IsNullOrWhiteSpace(oldPassword))
                throw new AppException("Password is incorrect");
            // check if password is correct
            else if (!VerifyPasswordHash(oldPassword, seller.passwordHash, seller.passwordSalt))
                throw new AppException("Password is incorrect");
            // update password if it was entered
            if (!string.IsNullOrWhiteSpace(newPassword))
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(newPassword, out passwordHash, out passwordSalt);

                seller.passwordHash = passwordHash;
                seller.passwordSalt = passwordSalt;

                _context.sellers.Update(seller);
                _context.SaveChanges();
            }
        }
    }
}