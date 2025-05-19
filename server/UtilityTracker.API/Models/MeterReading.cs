namespace UtilityTracker.API.Models
{
    public class MeterReading
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public DateTime ReadingDate { get; set; }
        public double Electricity { get; set; }
        public double Water { get; set; }
    }
}
