namespace ToDoList.Models.DataAccess.Dal.Entites
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Category
    {
        public int Id { get; set; }

        [Required]

        public string Name { get; set; }

        public  int UserAccountid { get; set; }

        public Dictionary<int,Task> TasksList;

        
    }
}