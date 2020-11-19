using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ReactApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TaskController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;
        private readonly ILogger<TaskController> _logger;

        public TaskController(ApplicationDbContext context, ILogger<TaskController> logger)
        {
            _applicationDbContext = context;
            _logger = logger;
        }

        // GET: api/<TaskController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var tasks = await _applicationDbContext.Tasks.ToListAsync();
                return Ok(tasks);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        // GET api/<TaskController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var task = await _applicationDbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        // POST api/<TaskController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Models.Task model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                model.CreateDate = DateTime.UtcNow;
                await _applicationDbContext.Tasks.AddAsync(model);
                _applicationDbContext.SaveChanges();

                return Ok(model);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        // PUT api/<TaskController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Models.Task model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                var task = await _applicationDbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);

                if (task == null)
                {
                    return NotFound("Task Not Found");
                }

                task.Title = model.Title;
                task.Description = model.Description;
                task.Status = model.Status;

                _applicationDbContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        // DELETE api/<TaskController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var task = await _applicationDbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);

                if (task == null)
                {
                    return NotFound("Task Not Found");
                }

                _applicationDbContext.Tasks.Remove(task);
                _applicationDbContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }
    }
}