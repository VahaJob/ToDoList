namespace ToDoList.DataAccess.Entites
{
    using System;

    public class User
    {
        public int Id { get; set; } 
        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string Email { get; set; }

        public int Age { get; set; }

        public DateTime BirthDate { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public int Phone { get; set; }
    }
}
