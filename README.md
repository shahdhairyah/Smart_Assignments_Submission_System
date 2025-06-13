# 📚 Smart Assignment Submission System

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3.svg?logo=bootstrap)
![Status](https://img.shields.io/badge/status-active-success.svg)

**A modern, responsive web application for streamlined assignment submission and management**

[🚀 Live Demo](#) • [📖 Documentation](#installation) • [🐛 Report Bug](#issues) • [✨ Request Feature](#contributing)

</div>

## 🎯 Overview

The **Smart Assignment Submission System** is a comprehensive web application designed to simplify the assignment submission process for educational institutions. Built with modern web technologies, it provides separate interfaces for students and teachers with role-based authentication and file management capabilities.

### 🌟 Key Features

- **🎓 Student Portal** - Upload assignments, track deadlines, view feedback
- **👩‍🏫 Teacher Dashboard** - Manage submissions, provide feedback, download files
- **🔐 Secure Authentication** - Role-based access control
- **📱 Responsive Design** - Works on all devices
- **📄 PDF Support** - Secure file upload with validation
- **⚡ Fast Performance** - Single Page Application (SPA)

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 18+ | Frontend framework |
| Bootstrap | 5.3+ | UI components & styling |
| React Router DOM | 6+ | Client-side routing |
| HTML5 File API | Native | File handling |
| Bootstrap Icons | 1.11+ | Icons |

## 🚀 Quick Start

### Prerequisites

- Node.js (v16.0.0+)
- npm (v8.0.0+)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shahdhairyah/Smart_Assignments_Submission_System.git
   cd Smart_Assignments_Submission_System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### 🔑 Default Credentials

| Role | Email | Password |
|------|-------|----------|
| **Teacher** | `admin@college.edu` | `admin@admin` |
| **Student** | `student@college.edu` | `student123` |

## 📁 Project Structure

```
smart-assignment-system/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── FileUpload.js
│   │   ├── SubmissionCard.js
│   │   └── ProtectedRoute.js
│   ├── pages/
│   │   ├── Login.js
│   │   ├── StudentDashboard.js
│   │   └── TeacherDashboard.js
│   ├── utils/
│   │   ├── auth.js
│   │   ├── storage.js
│   │   └── validation.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── components.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 📱 Usage

### For Students
1. Login with student credentials
2. Upload PDF assignments
3. Track submission status
4. View teacher feedback
5. Monitor deadlines

### For Teachers
1. Login with teacher credentials
2. View all submissions
3. Download student files
4. Provide feedback and grades
5. Monitor class progress

## ⚙️ Configuration

### Environment Variables

Create a `.env` file:

```env
REACT_APP_NAME=Smart Assignment Submission System
REACT_APP_VERSION=1.0.0
REACT_APP_MAX_FILE_SIZE=10485760
REACT_APP_ALLOWED_FILE_TYPES=.pdf
```

## 🧪 Available Scripts

```bash
# Development
npm start          # Run development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject configuration
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Platforms
- **Netlify** - Drag and drop build folder
- **Vercel** - Connect GitHub repository
- **GitHub Pages** - Use gh-pages package
- **Heroku** - Deploy with Node.js buildpack

## 🔮 Roadmap

### Current Features ✅
- [x] User authentication
- [x] File upload system
- [x] Student/Teacher dashboards
- [x] Responsive design

### Upcoming Features 🚧
- [ ] Email notifications
- [ ] File preview
- [ ] Batch operations
- [ ] Advanced analytics
- [ ] Real-time updates
- [ ] Mobile app

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 🐛 Issues & Support

- **Bug Reports**: [Create an issue](../../issues)
- **Feature Requests**: [Start a discussion](../../discussions)
- **Email**: 1shahdhairya@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dhairya Shah**
- 🎓 Diploma Student - Computer Engineering
- 📍 Anand, Gujarat, India
- 📧 [1shahdhairya@gmail.com](mailto:1shahdhairya@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/dhairyashah)
- 🐙 [GitHub](https://github.com/shahdhairyah)

## 🙏 Acknowledgments

- Bootstrap team for the UI framework
- React community for continuous innovation
- Open source contributors
- Educational institutions for inspiration

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ by [Dhairya Shah](https://github.com/shahdhairyah)

</div>
