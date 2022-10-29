namespace ToDoList.Models.DataAccess.Dal.Service.Interface
{
    using System.Threading.Tasks;
    using ToDoList.Models.DataAccess.Dal.Entites;

    public interface IDataEmailService
    {
        Task<string> SendEmailAsync(string email, string subject, string message);

        EmailSetting GetEmailSettings();
    }
}
