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
                    Avartar = ""
                });
                context.SaveChanges();
            }
        }
    }
}