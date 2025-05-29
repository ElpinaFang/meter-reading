# ⚡ Utility Usage Tracker

A fullstack web application to track and visualize household utility usage (electricity and water) over time. Built with **ASP.NET Core**, **React**, **PostgreSQL**, and hosted on **AWS**.

---

## 🔧 Features

- Submit daily utility readings (electricity and water)
- View dashboard of recent entries
- Visualize usage trends in a line chart
- Backend hosted on **EC2**, database on **RDS**
- Frontend deployed using **S3 + Static Website Hosting**

---

## 🧱 Tech Stack

| Layer     | Technology                        |
|-----------|------------------------------------|
| Frontend  | React + Tailwind CSS               |
| Backend   | ASP.NET Core Web API (.NET 8)      |
| Database  | PostgreSQL (Amazon RDS)            |
| Hosting   | EC2 for API, S3 for frontend       |
| Charting  | Chart.js                           |
| Dev Tools | Visual Studio Code, Postman, DBeaver |

---

## 🚀 Deployment

### Backend
1. Publish project:
   ```bash
   dotnet publish -c Release -o publish
   ```
2. Copy to EC2:
   ```bash
   scp -i "keypair.pem" -r publish ec2-user@<EC2_PUBLIC_IP>:/home/ec2-user/utilitytracker-api
   ```
3. SSH into EC2 and run:
   ```bash
   dotnet UtilityTracker.API.dll --urls "http://0.0.0.0:5128"
   ```

### Frontend
1. Build React app:
   ```bash
   npm run build
   ```
2. Upload `build/` to S3 bucket
3. Enable **Static Website Hosting** on the bucket

---

## 🔒 Security Notes

- Use `https` and custom domain in production
- Lock RDS and EC2 ports to your IP
- Do not commit `appsettings.json` or `.pem` files
- Add `publish/` to `.gitignore`

---

## 📂 Folder Structure

```
Utility-Usage-Tracker/
├── client/                  # React frontend
│   └── src/
├── server/UtilityTracker.API/  # .NET API backend
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   └── appsettings.json
```

---

## 🧪 Sample API Endpoint

```
GET http://<EC2_PUBLIC_IP>:5128/api/meterreadings
```

---

## 🙋 Author

Developed by Elpina Goei.  
Master of Computer Science | Fullstack Developer | AI Enthusiast  
[GitHub: ElpinaFang](https://github.com/ElpinaFang)

---

## 📝 License

MIT License