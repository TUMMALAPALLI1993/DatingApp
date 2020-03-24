using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        
        //These User and UserId will add a cacade delete to to our migrations in photo table
        //It means if User gets deleted then photos relating also get deleted
        public User User { get; set; }
        public int UserId { get; set; }
    }
}