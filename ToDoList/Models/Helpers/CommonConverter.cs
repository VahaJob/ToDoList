﻿using System;
using System.Collections.Generic;
using ToDoList.Models.Business.Entites;

namespace ToDoList.Models.Helpers
{
    public class CommonConverter
    {

    

        public static User FromDalToBl(DataAccess.Dal.Entites.User user ) {
           
        var obj=  new User 
            {
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                BirthDate = new DateTime(user.DateOfBirth.Year, user.DateOfBirth.Month, user.DateOfBirth.Day),
                Age = DateTime.Today.Year - user.DateOfBirth.Year,
                Password = user.Password,
                ConfirmPassword = user.ConfirmPassword,
                UserAccountId = user.UserAccountId,
                Phone = user.Phone

            };
           



            return obj;
        }
        public static DataAccess.Dal.Entites.User FromBlToDal(User user  ) {
          
            var obj= new DataAccess.Dal.Entites.User
            {
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                DateOfBirth = new DateTime(user.BirthDate.Year, user.BirthDate.Month, user.BirthDate.Day),
                Age = DateTime.Today.Year - user.BirthDate.Year,
                Password = user.Password,
                ConfirmPassword = user.ConfirmPassword,
                UserAccountId = new Random().Next(1, (int)1e+6) + 1,
                Phone = user.Phone

            };
          
            return obj;
        }
        public static Category FromDalToBl(DataAccess.Dal.Entites.Category category)
        {

            var obj =

              new Category
              {

                  Id = category.Id,
                  Name = category.Name, 
                  UserAccountId = category.UserAccountId
                
                
            };
        
           return obj;
        }

        public static DataAccess.Dal.Entites.Category FromBlToDal(Category category)
        {
            var obj =
            new DataAccess.Dal.Entites.Category
            {
                Id = category.Id,
                Name = category.Name,
                UserAccountId = category.UserAccountId

            };
            return obj;
        }

        public static Task FromDalToBl(DataAccess.Dal.Entites.Task task) =>
          new Task
          {
              Id = task.Id,
              Name = task.Name,
              CategoryId = task.CategoryId,
              CreateTime = DateTime.Now,
              UserAccountId = task.UserAccountId
          };

        public static DataAccess.Dal.Entites.Task FromBlToDal(Task task) =>
           new DataAccess.Dal.Entites.Task
           {
               Id = task.Id,
               Name = task.Name,
               CategoryId =task.CategoryId,
               CreateTime = DateTime.Now,
               UserAccountId = task.UserAccountId
               
           };


        public static User.Role FromDalToBl(DataAccess.Dal.Entites.User.Role role) =>
        new User.Role();

        public static DataAccess.Dal.Entites.User.Role FromBlToDal(User.Role role) =>
         new DataAccess.Dal.Entites.User.Role();


        public static DataAccess.Dal.Entites.EmailSetting FromBlToDal(EmailSetting emailSetting) =>
          new DataAccess.Dal.Entites.EmailSetting
          {
              MailPort = emailSetting.MailPort,
              MailServer = emailSetting.MailServer,
              Message = emailSetting.Message,
              SenderName = emailSetting.SenderName,
              Sender = emailSetting.Sender,
              TimeSender = emailSetting.TimeSender,
              To = emailSetting.To,
              Subject = emailSetting.Subject,
              Password = emailSetting.Password
          };

        public static EmailSetting FromDalToBl(DataAccess.Dal.Entites.EmailSetting emailSetting) =>
          new EmailSetting
          {
              MailPort = emailSetting.MailPort,
              MailServer = emailSetting.MailServer,
              Message = emailSetting.Message,
              SenderName = emailSetting.SenderName,
              Sender = emailSetting.Sender,
              TimeSender = emailSetting.TimeSender,
              To = emailSetting.To,
              Subject = emailSetting.Subject,
              Password = emailSetting.Password
          };

        // Not using

        // #region Authentication
        // public static Entites.Authentication FromDalToBl(DataAccess.Dal.Entites.Authentication registrationUser)
        // {
        //    return new Entites.Authentication
        //    {
        //        Email = registrationUser.Email,
        //        Password = registrationUser.Password
        //    };

        // }
        // public static DataAccess.Dal.Entites.Authentication FromBlToDal(Entites.Authentication registrationUser)
        // {
        //    return new DataAccess.Dal.Entites.Authentication
        //    {
        //        Email = registrationUser.Email,
        //        Password = registrationUser.Password
        //    };

        // #endregion
    }
}
