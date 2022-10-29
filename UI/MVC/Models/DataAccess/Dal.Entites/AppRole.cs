using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models.DataAccess.Dal.Entites
{
    public class AppRole
    {
        public int Id { get; set; }

        [EmailAddress]

        public string Email { get; set; }

        [Required]

        public string Name { get; set; }

        [Required]

        public string Password { get; set; }

        [Required]

        public string Role { get; set; }
    }
}
