namespace ToDoList
{
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using ToDoList.Models.Business.Service.Implementation;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Entites;
    using ToDoList.Models.DataAccess.Dal.Service.Implementation;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;

    public class Startup
    {
        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        #region  ConfigureServices
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(option => option.EnableEndpointRouting = false);
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie();
          

            services.AddSingleton<IDataUserService, DataUserService>();

            services.AddSingleton<IDataAppRole, DataAppRoleService>();

            services.AddSingleton<IDataCategoryService, DataCategoryService>();

            services.AddSingleton<IDataTaskService, DataTaskService>();

            services.AddSingleton<IDataAccountService, DataAccountService>();

            services.AddSingleton<IDataEmailService, DataEmailSenderService>();

            services.Configure<EmailSetting>(Configuration.GetSection("EmailSetting"));

            services.AddDbContext<DataToDoListContext>(options =>

             options.UseSqlServer(Configuration.GetConnectionString("DataToDoListContext")));

            #region Business
            // services.AddTransient<IAuthenticationService, AuthenticationService>();
            services.AddSingleton<IUserService, UserService>();
            services.AddSingleton<ICategoryService, CategoryService>();
            services.AddSingleton<ITaskService, TaskService>();
            services.AddSingleton<IAccountService, AccountService>();
            services.AddSingleton<IEmailService, EmailService>();
            #endregion
        }
        #endregion

        #region Configure
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var res = env;
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseAuthentication();
       

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
        #endregion
    }
}
