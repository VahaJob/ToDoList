﻿namespace ToDoList.Models.Business.Entites
{
    using System;

    public class User
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public int Age { get; set; }

        public DateTime BirthDate { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public enum Role
        {
            Admin,
            User,
            Moderator
        }
    }
}
