using Microsoft.EntityFrameworkCore;
using web_api.Models;

namespace web_api.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Admin> admins { get; set; }
        public DbSet<Category> categories { get; set; }
        public DbSet<Customer> customers { get; set; }
        public DbSet<Food> foods { get; set; }
        public DbSet<History> history { get; set; }
        public DbSet<Order> orders { get; set; }
        public DbSet<OrderFood> orderFoods { get; set; }
        public DbSet<Payment> payments { get; set; }
        public DbSet<Seller> sellers { get; set; }
        public DbSet<SellerOrder> sellerOrders { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderFood>().HasKey(item => new
            {
                item.OrderId,
                item.FoodId
            });

            modelBuilder.Entity<SellerOrder>().HasKey(item => new
            {
                item.sellerId,
                item.orderId
            });
        }

    }
}