// <copyright file="HomeController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace ToDoList.Controllers
{
    using System.Diagnostics;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using ToDoList.Models;
    using ToDoList.Models.Business.Entites;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using Task = Models.Business.Entites.Task;

    public class HomeController : Controller
    {
        private readonly ICategoryService _categoryService;
        private readonly ITaskService _taskService;
        private readonly IEmailService _emailService;
        private readonly IDataAccountService _dataAccountService;
        private readonly DataToDoListContext _doListContext;

        private int CategoryId { get; set; }

        private string UserEmail { get; set; }

        private int UserAccountId { get; set; }

        public HomeController(

            ICategoryService categoryService,
            ITaskService taskService,
            IEmailService emailService,
            IDataAccountService dataAccountService,
            DataToDoListContext dataToDoListContext)
        {
            _categoryService = categoryService;
            _taskService = taskService;
            _emailService = emailService;
            _dataAccountService = dataAccountService;
            _doListContext = dataToDoListContext;
        }

        [Authorize(Roles = "Admin,User")]

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]

        public async Task<IActionResult> CreateCategory(Category category)
        {
            Regex reg = new Regex(@"^([\d.,-]+)$");
            bool isCheck;

            this.CategoryId = category.Id;

            if (!reg.IsMatch(category.Name))
            {
                isCheck = await _categoryService.CreateCategory(category);
            }
            else
            {
                return BadRequest($"Name { category.Name}");
            }

            if (!isCheck)
            {
                return BadRequest($"Name { category.Name} ");
            }

            return RedirectToAction("Index");
        }

        [HttpPut]

        public async Task<JsonResult> EditCategory(Category category)
        {
            category.UserAccountId=this.GetUserAccountId();
            this.CategoryId = category.Id;
            if (!this.ModelState.IsValid) return Json(category);
            try
            {
                await System.Threading.Tasks.Task.Run(() => _categoryService.UpdateCategory(category));
            }
            catch (DbUpdateConcurrencyException)
            {
                return Json($"Name {category.Name} Already exist");
            }

            return Json(category);
        }

        [HttpGet]
        public async Task <JsonResult> EditCategory(string name, int? id)
        {
            if (name == null)
            {
                return Json("Not Found");
            }

            var category =  await System.Threading.Tasks.Task.Run(()=> _doListContext.Categories.Find(name));
            return category == null ? Json("Not Found") : Json(category);
        }

        [HttpDelete]

        public async Task<JsonResult> DeleteCategory(int? id)
        {
            if (id == null)
            {
                return Json("Not Found");
            }

            await System.Threading.Tasks.Task.Run(() => _categoryService.DeleteCategory(id));

            return Json("Task was Deleted");
        }

        [HttpGet]
        public async Task<JsonResult> CategoryList()
        {
            var userAccountId = GetUserAccountId();
            return await System.Threading.Tasks.Task.Run(()=>Json(_categoryService.CategoriesAsync(userAccountId).Result.ToList()));
        }

        [HttpPost]

        public async Task<IActionResult> CreateTask(Task task)
        {
            Regex reg = new Regex(@"^([\d.,-]+)$");
            task.UserAccountId = GetUserAccountId();
            if (!reg.IsMatch(task.Name))
            {
                await System.Threading.Tasks.Task.Run(()=>_taskService.CreateTask(task));
            }

            return RedirectToAction("Index");
        }

        [HttpDelete]

        public async Task<JsonResult> DeleteTask(int id)
        {
            await System.Threading.Tasks.Task.Run(() => _taskService.DeleteTask(id));

            return Json("Was Deleted");
        }

        [HttpGet]

        public async Task<JsonResult> GetTask(int id)
        {
            return await System.Threading.Tasks.Task.Run(()=> Json(_taskService.GetTask(id)));
        }

        [HttpPut]
        public async Task<JsonResult> UpdateTask( Task task)
        {
            if (task.Id == 0)
            {
                return Json("Not Found");
            }

            var taskResult = await System.Threading.Tasks.Task.Run(() => _taskService.UpdateTask(task));
            return taskResult == null ? Json("Not Found") : Json(taskResult);
        }

        [HttpGet]

        public async Task<JsonResult> TaskList()
        {
            return await System.Threading.Tasks.Task.Run(()=> Json(_taskService.GetTaskList(GetUserAccountId()).Result.ToList()));
        }

        //[Required]
        //[BindProperty]
        //public string Email { get; set; }

        //public async Task<IActionResult> SendMessage()
        //{
        //   // var setting = _emailSender.GetEmailSettings();

        //  //  var status = await _emailSender.SendEmailAsync(setting.To, setting.Subject, setting.Message);

        //    var Ok = Response().Ok;

        //    if (!status.Equals(Ok))
        //    {
        //        return Json(Response().NotSendMessage);
        //    }

        //    this.EmailStatusMessage = this.Response().SuccesReport;

        //    return RedirectToAction("Index");
        //}

        private string GetUserAccountEmail()
        {
            var email = this.HttpContext.User.Claims.FirstOrDefault()?.Value;

            this.UserEmail = email;

            return email;
        }

        private int GetUserAccountId()
        {
            var getId = this._doListContext.Users.FirstOrDefault(x => x.Email == this.GetUserAccountEmail()).UserAccountId;

            this.UserAccountId = getId;

            return getId;
        }

        [Authorize(Roles = "Admin")]

        public IActionResult Setting()
        {
            return this.View();
        }

        public IActionResult Privacy()
        {
            return this.View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]

        public IActionResult Error() => View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? this.HttpContext.TraceIdentifier });
    }
}