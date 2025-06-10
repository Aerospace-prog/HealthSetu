<div align="center">
  
# 🏥 HealthSetu

[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-Latest-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

<p align="center">
  <i>Bridging the gap between doctors and patients with modern technology</i>
</p>

</div>

## 📋 Overview

HealthSetu is a comprehensive healthcare platform designed to streamline doctor-patient interactions. Built with modern technologies and following industry best practices, it offers a secure, intuitive, and feature-rich environment for healthcare management.

---

🚀 Live Demo
The application is deployed and can be accessed at the following link:

<a href = "https://healthsetulife.netlify.app/" >Click To See Live Link 🔗</a>

---


<details open>
<summary><b>✨ Key Features</b></summary>

### 🔐 Secure Authentication System

- **JWT-based Authentication**
  - Robust token-based security with refresh capabilities
  - Secure password hashing and storage
  
- **Role-based Access Control**
  - Distinct roles for Doctors, Patients, and Administrators
  - Protected routes and API endpoints with middleware validation
  - Custom permission levels based on user roles

- **User Management**
  - Streamlined registration and login processes for all roles
  - Personalized dashboards for each user type
  - Real-time form validation with helpful error messages

### 📅 Smart Appointment System

- **Intelligent Booking**
  - Patients can search and book appointments with verified doctors
  - Filter doctors by specialization, availability, and ratings
  - Intuitive calendar interface for selecting appointment slots

- **Appointment Management**
  - Doctors can view, schedule, confirm, or cancel appointments
  - Real-time updates for appointment status changes
  - Conflict detection to prevent double-booking

- **Google Calendar Integration**
  - Automatic creation of Google Calendar events with Meet links
  - Synchronized cancellations across both doctor and patient calendars
  - Email notifications for all appointment activities

### 💬 Comprehensive Feedback System

- **Post-Appointment Reviews**
  - Patients can rate and review their experience after completed appointments
  - Star-based rating system with text feedback option
  - Anonymous feedback option for sensitive concerns

- **Doctor Insights**
  - Doctors can view aggregated feedback metrics
  - Detailed individual appointment feedback
  - Performance trends over time

### 🎨 Enhanced User Experience

- **Responsive Design**
  - Fully responsive layout for all device sizes
  - Mobile-optimized interfaces for on-the-go access
  - Consistent experience across platforms

- **Modern UI Features**
  - Dark/Light mode toggle for user preference
  - Loading indicators for all asynchronous operations
  - Intuitive navigation with breadcrumbs
  - Health tips and resources section with curated content

- **Accessibility**
  - WCAG-compliant design elements
  - Screen reader compatible components
  - Keyboard navigation support

### 👨‍💼 Administrative Controls

- **Doctor Verification**
  - Approve new doctor registrations after credential verification
  - Reject applications that don't meet requirements
  - Block/reactivate existing doctors as needed

- **User Management**
  - Comprehensive admin dashboard for system oversight
  - User activity monitoring and reporting
  - System health metrics and statistics

</details>

<details>
<summary><b>🚧 Planned Features</b></summary>

### Coming Soon

- **Real-time Chat System**
  - Instant messaging between doctors and patients
  - File and image sharing capabilities
  - Chat history and searchable conversations

- **Medical Records Management**
  - Secure storage of patient medical history
  - Document upload and organization
  - Sharing controls for specific doctors

- **E-Prescription System**
  - Digital prescription creation and delivery
  - Medication tracking and reminders
  - Integration with local pharmacies

- **Secure Payment Integration**
  - Multiple payment method support
  - Automated billing and invoicing
  - Payment history and receipt generation

</details>

---

## 📁 Project Architecture

```bash
HealthSetu/
├── backend/                      # Express.js backend
│   ├── config/                   # Database and service configurations
│   ├── controllers/              # Request handlers for all routes
│   ├── models/                   # Mongoose data models
│   ├── routes/                   # API endpoint definitions
│   ├── middleware/               # Authentication and validation middleware
│   ├── services/                 # External service integrations
│   │   ├── googleMeetService.js  # Google Calendar/Meet integration
│   │   └── emailService.js       # Email notification system
│   └── server.js                 # Main Express application entry point
│
├── frontend/                     # React frontend (Vite)
│   ├── public/                   # Static assets and resources
│   ├── src/                      # Application source code
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Page-level components
│   │   ├── context/              # React context providers
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API service integrations
│   │   ├── utils/                # Utility functions
│   │   ├── styles/               # Global styles and themes
│   │   ├── App.jsx               # Main application component
│   │   └── main.jsx              # Application entry point
│   └── vite.config.js            # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites

| Requirement | Version | Description |
|-------------|---------|-------------|
| Node.js     | ≥ 16.x  | JavaScript runtime |
| MongoDB     | ≥ 4.4   | NoSQL database |
| npm         | ≥ 8.x   | Package manager |
| Google Cloud| N/A     | For Calendar API (Meet integration) |

### Backend Setup

<details>
<summary>View detailed backend setup instructions</summary>

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the backend directory:

   ```env
   PORT=8080
   MONGO_URI=mongodb://localhost:27017/healthsetu
   JWT_SECRET=yourSecretKey123
   JWT_EXPIRES_IN=7d
   
   # Email configuration
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_gmail_app_password
   
   # Google Calendar API credentials
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REDIRECT_URI=http://localhost:8080/api/auth/google/callback
   GOOGLE_REFRESH_TOKEN=your_google_refresh_token
   ```

4. **Start the server**

   Development mode with hot-reload:
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

</details>

### Frontend Setup

<details>
<summary>View detailed frontend setup instructions</summary>

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Access the application**
   
   Open your browser and navigate to:
   [http://localhost:5173](http://localhost:5173)

5. **Build for production**

   ```bash
   npm run build
   ```

</details>

---

## 🔌 API Endpoints

<details>
<summary>View API documentation</summary>

### Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | Register new user (patient/doctor) |
| `/api/auth/login` | POST | Authenticate user and get token |
| `/api/auth/refresh-token` | POST | Get new access token using refresh token |

### Patient Dashboard

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/patient-dashboard/profile` | GET | Get patient profile |
| `/api/auth/patient-dashboard/appointments` | GET | List all patient appointments |
| `/api/auth/patient-dashboard/book` | POST | Book new appointment |
| `/api/auth/patient-dashboard/cancel/:id` | PUT | Cancel existing appointment |
| `/api/auth/patient-dashboard/feedback/:id` | POST | Submit feedback for completed appointment |

### Doctor Dashboard

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/doctor-dashboard/profile` | GET | Get doctor profile |
| `/api/auth/doctor-dashboard/appointments` | GET | List all doctor appointments |
| `/api/auth/doctor-dashboard/schedule/:id` | PUT | Schedule/confirm appointment |
| `/api/auth/doctor-dashboard/cancel/:id` | PUT | Cancel existing appointment |
| `/api/auth/doctor-dashboard/feedback` | GET | View all feedback received |

### Admin Dashboard

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/admin-dashboard/doctors` | GET | List all registered doctors |
| `/api/auth/admin-dashboard/approve/:id` | PUT | Approve doctor registration |
| `/api/auth/admin-dashboard/reject/:id` | PUT | Reject doctor registration |
| `/api/auth/admin-dashboard/block/:id` | PUT | Block doctor account |
| `/api/auth/admin-dashboard/activate/:id` | PUT | Reactivate doctor account |
| `/api/auth/admin-dashboard/users` | GET | List all system users |

</details>

---

## 🗓️ Google Calendar Integration

HealthSetu seamlessly integrates with Google Calendar to enhance the appointment experience:

- **Automatic Event Creation**
  - When a doctor confirms an appointment, a Google Calendar event is automatically created
  - Both doctor and patient receive calendar invitations with Google Meet links
  - Event details include appointment information, duration, and virtual meeting access

- **Synchronized Cancellations**
  - If either party cancels an appointment, the calendar event is automatically removed
  - Both participants receive cancellation notifications
  - Calendar slots are freed up for new bookings

- **Email Notifications**
  - All calendar actions trigger email notifications to keep everyone informed
  - Includes appointment confirmations, updates, and cancellations

---

## 📝 Feedback System

Our comprehensive feedback system helps maintain quality care:

- **Patient-Driven Insights**
  - Patients can submit detailed feedback after appointments are marked complete
  - Rating system covers multiple aspects of the appointment experience
  - Optional anonymous feedback for sensitive concerns

- **Doctor Performance Metrics**
  - Doctors can view aggregated feedback scores and individual reviews
  - Identify areas of strength and opportunities for improvement
  - Track satisfaction trends over time

- **Quality Assurance**
  - Administrators can monitor overall system satisfaction
  - Identify top-performing doctors and those needing support
  - Use insights to improve platform features and user experience

---

## 🧑‍💻 Contributing

We welcome contributions to HealthSetu! Here's how you can help:

1. **Fork the repository**
   - Create your own copy of the project to work on

2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourAmazingFeature
   ```

3. **Make your changes**
   - Follow the coding standards and guidelines
   - Add tests for new functionality
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m 'Add some YourAmazingFeature'
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/YourAmazingFeature
   ```

6. **Open a pull request**
   - Provide a clear description of the changes
   - Reference any related issues

7. **Code review**
   - Address any feedback from maintainers
   - Make necessary adjustments


---

<div align="center">

### Made with ❤️ by the HealthSetu Team

</div>
