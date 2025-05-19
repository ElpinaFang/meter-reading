using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UtilityTracker.API.Data;
using UtilityTracker.API.Models;

namespace UtilityTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MeterReadingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MeterReadingsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/meterreadings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MeterReading>>> GetReadings()
        {
            return await _context.MeterReadings.OrderByDescending(r => r.ReadingDate).ToListAsync();
        }

        // POST: api/meterreadings
        [HttpPost]
        public async Task<ActionResult<MeterReading>> PostReading(MeterReading reading)
        {
            reading.ReadingDate = reading.ReadingDate.ToUniversalTime(); // sanitize date
            _context.MeterReadings.Add(reading);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetReadings), new { id = reading.Id }, reading);
        }
    }
}
