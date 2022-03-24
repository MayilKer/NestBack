using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NestBackProject.Models
{
    public class AboutSlider
    {
        [Key]
        public int Id { get; set; }
        [StringLength(1000)]
        public string Img { get; set; }
        public int AboutId { get; set; }
        public About About { get; set; }
    }
}
