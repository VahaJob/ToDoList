using ToDoList.DataAccess.Entites;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.DataAccess.EfCore
{
    public class ToDoListContext : DbContext
    {

        public ToDoListContext(DbContextOptions<ToDoListContext> options)
             : base(options)
        {
            Database.Migrate();
        }


        public DbSet<User>? Users { get; set; }
    }
}
