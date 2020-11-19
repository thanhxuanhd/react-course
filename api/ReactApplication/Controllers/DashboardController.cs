using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ReactApplication.ViewModels;

namespace ReactApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class DashboardController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;
        private ILogger<DashboardController> _logger;

        public DashboardController(ApplicationDbContext applicationDbContext, ILogger<DashboardController> logger)
        {
            _applicationDbContext = applicationDbContext;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var tasks = await _applicationDbContext.Tasks.ToListAsync();

                var totalTask = tasks.Count();
                var taskCompleted = tasks.Count(x => x.Status == Models.TaskStatus.Completed);
                var taskPending = tasks.Count(x => x.Status == Models.TaskStatus.Pending);
                var taskInProgess = tasks.Count(x => x.Status == Models.TaskStatus.InProgess);
                var taskToDo = tasks.Count(x => x.Status == Models.TaskStatus.Todo);

                var dashboard = new Dashboard
                {
                    Completed = taskCompleted,
                    InProgess = taskInProgess,
                    Pending = taskPending,
                    Total = totalTask,
                    ToDo = taskToDo
                };

                return Ok(dashboard);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }
    }
}