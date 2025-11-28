# 🚀 Quick Start Guide

## ✅ Everything is Set Up!

Your Django backend is now ready to use!

---

## 📍 What Just Happened

1. ✅ **Created Virtual Environment** (`venv/`)
   - Isolated Python environment for your project
   - Keeps packages separate from your system Python

2. ✅ **Installed All Packages**
   - Django, DRF, JWT authentication, CORS, etc.

3. ✅ **Created Database** (`db.sqlite3`)
   - All tables created and ready
   - Custom User model with email authentication

4. ✅ **Server Running**
   - Backend API running at: http://localhost:8000

---

## 🎯 How to Use

### Start the Server (Every Time)

```bash
# Step 1: Navigate to backend
cd /Users/janeesh/Desktop/portfolio/backend/portfolio_backend

# Step 2: Activate virtual environment
source venv/bin/activate

# Step 3: Start server
python manage.py runserver
```

**Server will be available at:** http://localhost:8000

### Stop the Server

Press `Ctrl + C` in the terminal

---

## 🧪 Test Your API

### Method 1: Using cURL (Terminal)

**Register a User:**
```bash
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "testpass123",
    "password2": "testpass123",
    "first_name": "Test"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "testpass123"
  }'
```

### Method 2: Using Browser

Just open: http://localhost:8000/api/auth/register/

Django REST Framework will show you a nice UI to test!

---

## 🔑 Create Admin User (Optional)

To access Django admin panel:

```bash
cd /Users/janeesh/Desktop/portfolio/backend/portfolio_backend
source venv/bin/activate
python manage.py createsuperuser
```

Then access: http://localhost:8000/admin

---

## 📁 Important Files

```
portfolio_backend/
├── venv/                  ← Virtual environment (don't touch)
├── db.sqlite3            ← Your database (all data here)
├── manage.py             ← Django command tool
├── accounts/             ← Your auth app (was 'auth', renamed)
│   ├── models.py        ← User model
│   ├── views.py         ← API endpoints
│   ├── serializers.py   ← Data validation
│   └── urls.py          ← URL routes
└── portfolio_backend/    ← Main settings
    └── settings.py      ← Configuration
```

---

## 🎯 Available API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register/` | POST | Register new user |
| `/api/auth/login/` | POST | Login |
| `/api/auth/logout/` | POST | Logout (needs token) |
| `/api/auth/profile/` | GET | Get profile (needs token) |
| `/api/auth/profile/update/` | PUT/PATCH | Update profile |
| `/api/auth/change-password/` | POST | Change password |
| `/api/auth/token/refresh/` | POST | Refresh token |

---

## 💡 Understanding Virtual Environment

### What is `venv/`?

Think of it like a **sandbox** for your project:
- Contains all Python packages for THIS project only
- Doesn't mess with your system Python
- Each project can have different versions of packages

### Why do we activate it?

```bash
source venv/bin/activate
```

This tells your terminal: "Use the Python and packages in THIS folder"

You'll see `(venv)` in your terminal:
```
(venv) user@computer: ~/portfolio/backend$
```

---

## 🗄️ Your Database (`db.sqlite3`)

This file contains ALL your data:
- User accounts
- Sessions
- JWT tokens
- (Future: Blogs, Interview questions, etc.)

**Location:** `/Users/janeesh/Desktop/portfolio/backend/portfolio_backend/db.sqlite3`

**Don't delete this file!** It's your database.

---

## 🔧 Common Commands

### Make Changes to Models
```bash
source venv/bin/activate
python manage.py makemigrations
python manage.py migrate
```

### Create Superuser
```bash
source venv/bin/activate
python manage.py createsuperuser
```

### Run Tests
```bash
source venv/bin/activate
python manage.py test
```

### Open Django Shell
```bash
source venv/bin/activate
python manage.py shell
```

---

## ⚠️ Troubleshooting

### "Command not found: python"
Try `python3` instead of `python`

### "No module named X"
Make sure virtual environment is activated:
```bash
source venv/bin/activate
```

### "Port 8000 already in use"
Kill the existing server:
```bash
lsof -ti:8000 | xargs kill -9
```

### Database issues
Delete `db.sqlite3` and run migrations again:
```bash
rm db.sqlite3
python manage.py migrate
```

---

## 🎯 Next Steps

1. ✅ **Test the API** - Use cURL or browser
2. ✅ **Create a test user** - Register via API
3. ✅ **Check admin panel** - Create superuser first
4. 📱 **Connect Frontend** - Start integrating with Next.js
5. 📝 **Add Blogs Module** - When ready
6. 🎓 **Add Interview Prep** - When ready

---

## 📚 Full Documentation

- **API Docs:** `API_DOCUMENTATION.md`
- **Setup Guide:** `SETUP_GUIDE.md`

---

## 💬 Quick Reference

**Start Server:**
```bash
cd /Users/janeesh/Desktop/portfolio/backend/portfolio_backend
source venv/bin/activate
python manage.py runserver
```

**Test Registration:**
```bash
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{"email":"me@test.com","password":"pass123","password2":"pass123"}'
```

**Access Admin:**
```bash
# First create superuser
python manage.py createsuperuser

# Then visit
http://localhost:8000/admin
```

---

## ✅ You're All Set!

Your backend is running and ready to connect with your Next.js frontend! 🎉

**Server:** http://localhost:8000  
**API Base:** http://localhost:8000/api/  
**Admin:** http://localhost:8000/admin/

---

**Need Help?** Check the detailed docs or ask questions!

