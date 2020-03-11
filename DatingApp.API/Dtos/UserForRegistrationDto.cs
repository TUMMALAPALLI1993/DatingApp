using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegistrationDto
    {
        [Required]
        public string Username { get; set; } 
        [Required]  
        [StringLength(10,MinimumLength= 5,ErrorMessage="You must specify password between 5 and 10")]
        public string Password { get; set; }
    }
}