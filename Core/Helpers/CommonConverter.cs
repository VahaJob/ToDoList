namespace ToDoList.Models.Helpers
{
    using System;
    using ToDoList.Core.Entites;


    public class CommonConverter
    {
        public static User FromDalToBl(DataAccess.Entites.User user)
        {
            return new User
            {

                Email = user.Email,
                Name = String.Join(' ', user.FirstName, user.LastName),
                BirthDate = new DateTime(user.BirthDate.Year, user.BirthDate.Month, user.BirthDate.Day),
                Age = DateTime.Today.Year - user.BirthDate.Year,
                Phone = user.Phone

            };

        }

        public static DataAccess.Entites.User FromBlToDal(User user)
        {

            return new DataAccess.Entites.User
            {
                Email = user.Email,
                FirstName = user.Name.Split(' ')[0],
                LastName = user.Name.Split(' ')[1],
                BirthDate = new DateTime(user.BirthDate.Year, user.BirthDate.Month, user.BirthDate.Day),
                Age = DateTime.Today.Year - user.BirthDate.Year,
                Password = String.Empty,
                ConfirmPassword = String.Empty,
                Phone = user.Phone,
            }; ;
        }



    }
}
