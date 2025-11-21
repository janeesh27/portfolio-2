# Backend Setup Guide

## Quick Start

### 1. Navigate to Backend Directory
```bash
cd /Users/janeesh/Desktop/portfolio/backend/portfolio_backend
```

### 2. Install Dependencies
```bash
pip install -r ../requirements.txt
```

### 3. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Create Superuser (Admin Access)
```bash
python manage.py createsuperuser
```
Enter your email and password when prompted.

### 5. Start Development Server
```bash
python manage.py runserver
```

The API will be available at: **http://localhost:8000**

---

## What's Included

### ✅ Custom User Model
- Email-based authentication (no username required)
- Fields: email, first_name, last_name, username (optional), bio, avatar, phone
- Password validation and hashing

### ✅ JWT Authentication
- Access token lifetime: 1 hour
- Refresh token lifetime: 7 days
- Token rotation and blacklisting enabled
- Secure token-based auth for frontend

### ✅ Complete Auth API
All endpoints are ready to use:
1. **Register** - `/api/auth/register/`
2. **Login** - `/api/auth/login/`
3. **Logout** - `/api/auth/logout/`
4. **Token Refresh** - `/api/auth/token/refresh/`
5. **Get Profile** - `/api/auth/profile/`
6. **Update Profile** - `/api/auth/profile/update/`
7. **Change Password** - `/api/auth/change-password/`
8. **Delete Account** - `/api/auth/delete-account/`

### ✅ Admin Panel
Access at: **http://localhost:8000/admin**
- Manage users
- View all registered users
- User permissions and groups

### ✅ CORS Configured
- Frontend at localhost:3000 is whitelisted
- Ready for Next.js integration

---

## Database Options

### Current: SQLite (Development)
✅ Already configured - no setup needed
- File: `db.sqlite3`
- Good for development
- Not recommended for production

### Recommended for Production: PostgreSQL

#### Install PostgreSQL
```bash
# macOS
brew install postgresql
brew services start postgresql

# Ubuntu
sudo apt-get install postgresql postgresql-contrib
```

#### Create Database
```bash
psql postgres
CREATE DATABASE portfolio_db;
CREATE USER portfolio_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
\q
```

#### Update settings.py
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'portfolio_db',
        'USER': 'portfolio_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

#### Install PostgreSQL Python Package
```bash
pip install psycopg2-binary
```

---

## Testing the API

### Using cURL

**Register:**
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

**Get Profile (replace <TOKEN> with actual token):**
```bash
curl -X GET http://localhost:8000/api/auth/profile/ \
  -H "Authorization: Bearer <TOKEN>"
```

---

## Integrating with Next.js Frontend

### 1. Install Axios in Frontend
```bash
cd /Users/janeesh/Desktop/portfolio/portfolio-2
npm install axios
```

### 2. Create API Client
Create `src/lib/api.js`:
```javascript
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### 3. Example Auth Functions
```javascript
// Register
export const register = async (userData) => {
  const response = await api.post('/auth/register/', userData);
  return response.data;
};

// Login
export const login = async (credentials) => {
  const response = await api.post('/auth/login/', credentials);
  localStorage.setItem('access_token', response.data.tokens.access);
  localStorage.setItem('refresh_token', response.data.tokens.refresh);
  return response.data;
};

// Get Profile
export const getProfile = async () => {
  const response = await api.get('/auth/profile/');
  return response.data;
};
```

---

## Troubleshooting

### Issue: "No module named 'rest_framework_simplejwt'"
**Solution:** Install dependencies
```bash
pip install -r ../requirements.txt
```

### Issue: "Table doesn't exist"
**Solution:** Run migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Issue: "CORS error in frontend"
**Solution:** Check that frontend URL is in `CORS_ALLOWED_ORIGINS` in settings.py

### Issue: "Invalid token"
**Solution:** 
1. Token may have expired (access tokens expire in 1 hour)
2. Use refresh token to get new access token
3. Re-login if refresh token expired

---

## Next Steps

### 1. Add Protected Routes in Frontend
Create auth context and protected route wrapper

### 2. Create Blogs Module
```bash
python manage.py startapp blogs
```

### 3. Create Interview Prep Module
```bash
python manage.py startapp interview_prep
```

### 4. Environment Variables
Create `.env` file:
```
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=your-database-url
```

Install python-decouple (already in requirements):
```python
from decouple import config
SECRET_KEY = config('SECRET_KEY')
```

---

## Production Checklist

- [ ] Use PostgreSQL instead of SQLite
- [ ] Set DEBUG = False
- [ ] Use environment variables for sensitive data
- [ ] Set up proper ALLOWED_HOSTS
- [ ] Configure static/media file serving
- [ ] Set up HTTPS
- [ ] Configure production CORS settings
- [ ] Set up proper logging
- [ ] Add rate limiting
- [ ] Set up backup strategy

---

## Support

For detailed API documentation, see: `API_DOCUMENTATION.md`

Contact: janeesh.tin@gmail.com

