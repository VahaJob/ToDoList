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
        public ToDoListContext()
        {

        }


        public virtual DbSet<User>? Users { get; set; }
    }
}
