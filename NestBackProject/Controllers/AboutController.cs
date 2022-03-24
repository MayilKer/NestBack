using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NestBackProject.DAL;
using NestBackProject.Models;
using NestBackProject.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NestBackProject.Controllers
{
    public class AboutController : Controller
    {
        private readonly NestDbContext _context;
        public AboutController(NestDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            //About about = _context.Abouts.Include(i => i.AboutSliders).FirstOrDefault();
            //if (about == null) return BadRequest();
            AboutVM aboutVM = new AboutVM
            {
                Abouts = _context.Abouts.Include(i => i.AboutSliders).FirstOrDefault(),
                Provides = _context.Provides.ToList(),
                Perfomance = _context.Perfomances.FirstOrDefault(),
                Histories = _context.Histories.ToList()
            };
            if (aboutVM == null) return BadRequest();
            return View(aboutVM);
        }
    }
}
