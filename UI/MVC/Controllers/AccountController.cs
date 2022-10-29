namespace ToDoList.Controllers
{
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Mvc;
    using ToDoList.Models.Business.Entites;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using ToDoList.Models.Helpers;
    using Task = System.Threading.Tasks.Task;

    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        private readonly IDataAccountService _dataAccountService;
        private DataToDoListContext _doListContext;

        public AccountController(IUserService userService,
                                 IAccountService accountService,
                                 IDataAccountService dataAccountService,
                                 DataToDoListContext doListContext)
        {
            _userService = userService;
            _dataAccountService = dataAccountService;
            _doListContext = doListContext;
        }

        public IActionResult Registration() =>
               View();

        [HttpPost]
        public async Task<IActionResult> CreateUser([Bind("FirstName,LastName,Birthday,Email,Password,ConfirmPassword,Id")]User authUser)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await Task.Run(() => this._userService.Create(authUser));
                }
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

            return RedirectToAction(nameof(this.Login));
        }

        [HttpPost]
        public async Task<IActionResult> Login(string email, string password)
        {
            if (!ModelState.IsValid) return View();

            var userId = await Task.Run(() => _dataAccountService.SetUserAccountId(email, password));

            if (userId == 0) return View();

            var isAdmin = _doListContext.Roles.Any(x => x.Email == email && x.Password == password);

            ClaimsIdentity identity = null;

            var isAuthenticated = false;

            if (isAdmin)
            {
                identity = new ClaimsIdentity(
                    new[]
                    {
                  new Claim(ClaimTypes.Email, email),
                  new Claim(ClaimTypes.Role, "Admin"),
                    }, CookieAuthenticationDefaults.AuthenticationScheme);

                isAuthenticated = true;
            }

            if (!isAdmin)
            {
                identity = new ClaimsIdentity(
                    new[] {
                  new Claim(ClaimTypes.Email, email),
                  new Claim(ClaimTypes.Role, "User"),
              }, CookieAuthenticationDefaults.AuthenticationScheme);

                isAuthenticated = true;
            }

            if (!isAuthenticated)
            {
                return this.View();
            }

            var principal = new ClaimsPrincipal(identity);
            await this.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);
            return this.RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public JsonResult GetUser()
        {
            var mail = HttpContext.User.Claims.FirstOrDefault()?.Value;

            var user = _doListContext.Users.FirstOrDefault(x => x.Email == mail);

            return Json(user);
        }

        public IActionResult Login()
        {
            return View();
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Login");
        }
    }
}