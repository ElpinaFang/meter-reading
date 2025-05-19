using UtilityTracker.API.Models;
using Microsoft.EntityFrameworkCore;
using UtilityTracker.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


/* builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowS3", builder =>
    {
        builder.WithOrigins("http://your-s3-url.amazonaws.com")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
*/

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    if (!db.MeterReadings.Any())
    {
        db.MeterReadings.AddRange(new[]
        {
            new MeterReading { UserId = "alice", ReadingDate = DateTime.UtcNow.AddDays(-1), Electricity = 8.2, Water = 12.5 },
            new MeterReading { UserId = "bob", ReadingDate = DateTime.UtcNow, Electricity = 9.1, Water = 10.3 }
        });
        db.SaveChanges();
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowLocalhost3000");
//app.UseCors("AllowS3");
app.UseAuthorization();
app.MapControllers();
app.Run();
