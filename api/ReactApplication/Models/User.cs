using System.ComponentModel.DataAnnotations;

namespace ReactApplication.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        public string FullName { get; set; }

        public string Avartar { get; set; }
    }
}