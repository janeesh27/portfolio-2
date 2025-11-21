# Portfolio Backend API Documentation

## Base URL

```
http://localhost:8000/api/
```

## Database Setup

This project uses **SQLite** for development (included by default). For production, consider:

- **PostgreSQL** (Recommended for production)
- **MySQL**
- **MongoDB** (with djongo)

### Recommended Production DB: PostgreSQL

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'portfolio_db',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

---

## Authentication

All authenticated endpoints require the JWT token in the Authorization header:

```
Authorization: Bearer <access_token>
```

---

## API Endpoints

### 1. User Registration

**Endpoint:** `POST /api/auth/register/`

**Description:** Register a new user account

**Authentication:** Not required

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "password2": "securePassword123",
  "first_name": "John",
  "last_name": "Doe",
  "username": "johndoe"
}
```

**Response (201 Created):**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe"
  },
  "tokens": {
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGc..."
  }
}
```

---

### 2. User Login

**Endpoint:** `POST /api/auth/login/`

**Description:** Login with email and password

**Authentication:** Not required

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response (200 OK):**

```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe"
  },
  "tokens": {
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGc..."
  }
}
```

---

### 3. Token Refresh

**Endpoint:** `POST /api/auth/token/refresh/`

**Description:** Get a new access token using refresh token

**Authentication:** Not required

**Request Body:**

```json
{
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

**Response (200 OK):**

```json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

---

### 4. User Logout

**Endpoint:** `POST /api/auth/logout/`

**Description:** Logout user and blacklist refresh token

**Authentication:** Required

**Headers:**

```
Authorization: Bearer <access_token>
```

**Request Body:**

```json
{
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

**Response (200 OK):**

```json
{
  "message": "Logout successful"
}
```

---

### 5. Get User Profile

**Endpoint:** `GET /api/auth/profile/`

**Description:** Get current user's profile information

**Authentication:** Required

**Headers:**

```
Authorization: Bearer <access_token>
```

**Response (200 OK):**

```json
{
  "id": 1,
  "email": "user@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "username": "johndoe",
  "full_name": "John Doe",
  "bio": "Full Stack Developer",
  "avatar": "/media/avatars/profile.jpg",
  "phone": "+1234567890",
  "date_joined": "2024-01-15T10:30:00Z",
  "last_login": "2024-01-20T14:45:00Z"
}
```

---

### 6. Update User Profile

**Endpoint:** `PUT /api/auth/profile/update/` or `PATCH /api/auth/profile/update/`

**Description:** Update user profile information

**Authentication:** Required

**Headers:**

```
Authorization: Bearer <access_token>
Content-Type: multipart/form-data  (if uploading avatar)
```

**Request Body (JSON):**

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "username": "johndoe",
  "bio": "Passionate Full Stack Developer",
  "phone": "+1234567890"
}
```

**Request Body (Form Data for Avatar):**

```
first_name: John
last_name: Doe
avatar: [file]
bio: Full Stack Developer
phone: +1234567890
```

**Response (200 OK):**

```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "username": "johndoe",
    "full_name": "John Doe",
    "bio": "Passionate Full Stack Developer",
    "avatar": "/media/avatars/profile.jpg",
    "phone": "+1234567890",
    "date_joined": "2024-01-15T10:30:00Z",
    "last_login": "2024-01-20T14:45:00Z"
  }
}
```

---

### 7. Change Password

**Endpoint:** `POST /api/auth/change-password/`

**Description:** Change user password

**Authentication:** Required

**Headers:**

```
Authorization: Bearer <access_token>
```

**Request Body:**

```json
{
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456",
  "new_password2": "newSecurePassword456"
}
```

**Response (200 OK):**

```json
{
  "message": "Password changed successfully"
}
```

---

### 8. Delete Account

**Endpoint:** `DELETE /api/auth/delete-account/`

**Description:** Deactivate user account (soft delete)

**Authentication:** Required

**Headers:**

```
Authorization: Bearer <access_token>
```

**Response (200 OK):**

```json
{
  "message": "Account deactivated successfully"
}
```

---

## Error Responses

### 400 Bad Request

```json
{
  "email": ["This field is required."],
  "password": ["This password is too short."]
}
```

### 401 Unauthorized

```json
{
  "detail": "Authentication credentials were not provided."
}
```

### 403 Forbidden

```json
{
  "detail": "You do not have permission to perform this action."
}
```

### 404 Not Found

```json
{
  "detail": "Not found."
}
```

---

## Installation & Setup

### 1. Install Dependencies

```bash
cd backend/portfolio_backend
pip install -r requirements.txt
```

### 2. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Create Superuser

```bash
python manage.py createsuperuser
```

### 4. Run Development Server

```bash
python manage.py runserver
```

Server will be available at: `http://localhost:8000`

---

## JWT Token Lifecycle

- **Access Token Lifetime:** 1 hour
- **Refresh Token Lifetime:** 7 days
- **Token Rotation:** Enabled (new refresh token on each refresh)
- **Blacklisting:** Enabled (old tokens are blacklisted after rotation)

---

## Future Endpoints (Coming Soon)

### Blogs Module

- `GET /api/blogs/` - List all blogs
- `POST /api/blogs/` - Create new blog
- `GET /api/blogs/{id}/` - Get blog detail
- `PUT /api/blogs/{id}/` - Update blog
- `DELETE /api/blogs/{id}/` - Delete blog

### Interview Prep Module

- `GET /api/interview-prep/` - List interview questions
- `POST /api/interview-prep/` - Add new question
- `GET /api/interview-prep/{id}/` - Get question detail

---

## Security Notes

1. **Never commit SECRET_KEY** - Use environment variables in production
2. **HTTPS Only** - Always use HTTPS in production
3. **CORS Settings** - Update CORS_ALLOWED_ORIGINS for production
4. **Database** - Use PostgreSQL or MySQL in production (not SQLite)
5. **Token Security** - Store tokens securely on frontend (httpOnly cookies preferred)

---

## Testing with Postman/Curl

### Register User

```bash
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "testpass123",
    "password2": "testpass123",
    "first_name": "Test",
    "last_name": "User"
  }'
```

### Login

```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "testpass123"
  }'
```

### Get Profile (with token)

```bash
curl -X GET http://localhost:8000/api/auth/profile/ \
  -H "Authorization: Bearer <your_access_token>"
```

---

## Contact

For issues or questions, contact: janeesh.tin@gmail.com
