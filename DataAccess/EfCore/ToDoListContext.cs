using ToDoList.DataAccess.Entites;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoList.DataAccess.EfCore
{
    public class ToDoListContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public ToDoListContext(IConfiguration configuration)
        {
            _configuration = configuration;

            try
            {
                Database.Migrate();
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (optionsBuilder.IsConfigured) return;

            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("PostgresConnection"),
                migr => migr.MigrationsHistoryTable(HistoryRepository.DefaultTableName, "ToDoList"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.HasDefaultSchema("ToDoList");

        }
        public DbSet<User>? Users { get; set; }
    }
}
