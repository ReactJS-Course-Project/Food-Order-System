using System;
using System.Collections.Generic;
using System.Linq;
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

            seller.passwordHash = passwordHash;
            seller.passwordSalt = passwordSalt;

            _context.sellers.Add(seller);
            _context.SaveChanges();

            return seller;
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

        public void Update(Seller sellerParam, string password = null)
        {
            var seller = _context.sellers.Find(sellerParam.Id);

            if (seller == null)
                throw new AppException("User not found");

            if (sellerParam.userName != seller.userName)
            {
                // username has changed so check if the new username is already taken
                if (_context.sellers.Any(x => x.userName == sellerParam.userName))
                    throw new AppException("Username " + sellerParam.userName + " is already taken");
            }

            // update seller properties
            seller.firstName = sellerParam.firstName;
            seller.lastName = sellerParam.lastName;
            seller.userName = sellerParam.userName;
            seller.sex = sellerParam.sex;
            seller.age = sellerParam.age;

            // update password if it was entered
            if (!string.IsNullOrWhiteSpace(password))
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(password, out passwordHash, out passwordSalt);

                seller.passwordHash = passwordHash;
                seller.passwordSalt = passwordSalt;
            }

            _context.sellers.Update(seller);
            _context.SaveChanges();
        }
    }
}