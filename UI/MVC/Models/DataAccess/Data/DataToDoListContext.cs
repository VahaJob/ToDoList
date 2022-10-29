namespace ToDoList.Models.DataAccess.Data
{
    using Microsoft.EntityFrameworkCore;
    using ToDoList.Models.DataAccess.Dal.Entites;

    #region DataToDoListContext
    public class DataToDoListContext : DbContext
    {
        public DataToDoListContext(DbContextOptions<DataToDoListContext> options)
                   : base(options)
        {
           Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<AppRole> Roles { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Task> Tasks { get; set; }

    }
    #endregion
}
