namespace ToDoList.Models.Business.Service.Interface
{
    using System.Threading.Tasks;
    using ToDoList.Models.Business.Entites;

    public interface IEmailService
    {
        Task<string> SendEmailAsync(string email, string subject, string message);

        EmailSetting GetEmailSettings();
    }
}
