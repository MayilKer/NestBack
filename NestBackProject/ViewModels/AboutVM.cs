using NestBackProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NestBackProject.ViewModels
{
    public class AboutVM
    {
        public About Abouts { get; set; }
        public List<Provide> Provides { get; set; }
        public Perfomance Perfomance { get; set; }
        public List<History> Histories { get; set; }
    }
}
