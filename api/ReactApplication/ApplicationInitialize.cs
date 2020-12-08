using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ReactApplication
{
    public class ApplicationInitialize
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                // Look for any board games.
                if (context.Tasks.Any())
                {
                    return;   // Data was already seeded
                }

                List<Models.Task> tasks = new List<Models.Task>();

                for (int i = 0; i < 40; i++)
                {
                    var task = new Models.Task
                    {
                        Title = $"Title Auto {i + 1}",
                        Description = $"Description {i + 1}",
                        CreateDate = DateTime.Now
                    };

                    if (i <= 10)
                    {
                        task.Status = Models.TaskStatus.InProgess;
                    }

                    if (i > 10 && i < 20)
                    {
                        task.Status = Models.TaskStatus.Pending;
                    }

                    if (i > 20 && i < 30)
                    {
                        task.Status = Models.TaskStatus.Completed;
                    }

                    if (i > 30)
                    {
                        task.Status = Models.TaskStatus.Todo;
                    }

                    tasks.Add(task);
                }

                context.Tasks.AddRange(tasks);

                context.Users.Add(new Models.User
                {
                    Username = "Zoo",
                    FullName = "Zookeeper",
                    Avartar = @"https://avatars0.githubusercontent.com/u/15654411?s=460&u=018b3360fc1d15d741e3c5df9b6c0faab469c356&v=4"
                });
                context.SaveChanges();
            }
        }
    }
}