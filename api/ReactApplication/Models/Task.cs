using System;
using System.ComponentModel.DataAnnotations;

namespace ReactApplication.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        public TaskStatus Status { get; set; }

        public DateTime CreateDate { get; set; }
    }

    public enum TaskStatus
    {
        Todo,
        InProgess,
        Pending,
        Completed
    }
}