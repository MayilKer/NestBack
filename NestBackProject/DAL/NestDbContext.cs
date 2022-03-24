using Microsoft.EntityFrameworkCore;
using NestBackProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NestBackProject.DAL
{
    public class NestDbContext : DbContext
    {
        public NestDbContext(DbContextOptions<NestDbContext> options) :base(options)
        {

        }
        public DbSet<About> Abouts { get; set; }
        public DbSet<AboutSlider> AboutSliders { get; set; }
        public DbSet<Provide> Provides { get; set; }
        public DbSet<Perfomance> Perfomances { get; set; }
        public DbSet<History> Histories { get; set; }
    }
}
