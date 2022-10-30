
using Moq;
using Microsoft.EntityFrameworkCore;
using ToDoList.DataAccess.Entites;
using ToDoList.DataAccess.EfCore;
using ToDoList.DataAccess.EfCore.Services.Implementation;
using System.Collections.ObjectModel;
using System.Data;

namespace ToDoList.Tests
{
    public class UserServiceTest
    {
        [Fact]
        public void add_user_then_call_method_more_one()
        {
            var mockSet = new Mock<DbSet<User>>();
            var mockContext = new Mock<ToDoListContext>();
            mockContext.Setup(m => m.Users).Returns(mockSet.Object);
            var service = new DataUserService(mockContext.Object);
            service.Create(GetUser());

            mockSet.Verify(m => m.Add(It.IsAny<User>()), Times.Once());

            mockContext.Verify(m => m.SaveChanges(), Times.Once());

        }


        [Fact]
        public void add_user_then_count_more_one()
        {
            var data = new List<User>
            {
               GetUser()
             
            }.AsQueryable();

            var mockSet = new Mock<DbSet<User>>();
     
            mockSet.As<IQueryable<User>>().Setup(m => m.Provider).Returns(data.Provider);
            mockSet.As<IQueryable<User>>().Setup(m => m.Expression).Returns(data.Expression);
            mockSet.As<IQueryable<User>>().Setup(m => m.ElementType).Returns(data.ElementType);
            mockSet.As<IQueryable<User>>().Setup(m => m.GetEnumerator()).Returns(() => data.GetEnumerator());
            var mockContext = new Mock<ToDoListContext>();
            mockContext.Setup(m => m.Users).Returns(mockSet.Object);
            var service = new DataUserService(mockContext.Object);
            service.Create(GetUser());
             var users =  service.GetUsers();
            Assert.NotNull(users);
            Assert.Equal(1, users.Count);
            Assert.Equal("Ivan", users[0].FirstName);
        }
        public User GetUser()
        {
            return new User
            {
                Id = 1,
                FirstName = "Ivan",
                LastName = "Ivanov",
                Age = 30,
                Password = "123",
                Email = "ivan@mail.ru",
                BirthDate = DateTime.Now,
                ConfirmPassword = "123",
                Phone = 1111
            };
        }

 

    }
}

