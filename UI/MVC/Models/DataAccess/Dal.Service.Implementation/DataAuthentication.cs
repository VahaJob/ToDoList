namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    //public class DataAuthentication : IDataAuthentication
    //{
    //    private readonly string connectionString;

    //    public DataAuthentication(IConfiguration configuration)
    //    {
    //        connectionString = configuration.GetConnectionString("DataToDoListContext");
    //    }

    //    public bool SignIn(string email, string password)
    //    {
    //        using (var db = new DataToDoListContext(Options()))
    //        {
    //            User user = db.Users.FirstOrDefault(x => (x.Email == email) && x.Password == password);
    //             var authUserEmail = user.Email;
              
    //             var  authUserPassword= user.Password;
    //            if (authUserEmail ==null ||authUserEmail ==null)
    //            {
    //                return false;
    //            }

    //            if (authUserEmail.Equals(email) && authUserPassword.Equals(password))
    //            {
    //                return true;
    //            }
    //        }
    //        return false;
    //    }


    //    private DbContextOptions<DataToDoListContext> Options()
    //    {
    //        var optionsBuilder = new DbContextOptionsBuilder<DataToDoListContext>();
    //        DbContextOptions<DataToDoListContext> options = optionsBuilder.UseSqlServer(this.connectionString)
    //          .Options;
    //        return options;
    //    }

    //}
}
