using Microsoft.EntityFrameworkCore;
using UtilityTracker.API.Models;

namespace UtilityTracker.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<MeterReading> MeterReadings { get; set; }
    }
}
