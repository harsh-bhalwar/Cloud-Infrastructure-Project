# Industrial Training Project: Deployment of a Backend Web Service on Google Cloud Platform

A Node.js and Express.js REST API project that demonstrates end-to-end deployment of a backend web service on Google Cloud Platform (GCP) using industry-standard cloud infrastructure components.

## 📋 Project Overview

This project focuses on deploying a fully functional backend web service on Google Cloud Platform (GCP) using industry-standard cloud infrastructure components. The goal is to understand and implement the end-to-end process of hosting, configuring, and exposing a web application in a cloud environment.

The application is deployed on a Compute Engine Virtual Machine running Ubuntu, hosted in a custom VPC (Virtual Private Cloud), with appropriate firewall rules, external IP assignment, and secure SSH access. The backend service is managed using systemd for automatic boot-time startup and reliable process management.

## ✨ Features

- RESTful API with multiple endpoints
- System metrics monitoring
- Application status tracking
- Team information display
- To-do list management
- GCP VM deployment ready
- Cloud Monitoring integration

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Google Cloud Platform (GCP)** - Cloud infrastructure
  - Compute Engine (VM Instance)
  - VPC (Virtual Private Cloud)
  - Cloud Monitoring (Stackdriver)
  - Firewall Rules
  - External IP Assignment

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Industrial Training Project"
```

2. Install dependencies:
```bash
npm install
```

## 📝 Usage

### Running Locally

1. Start the development server:
```bash
npm start
```

2. The server will run on `http://localhost:3000` (or the port specified in the `PORT` environment variable)

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (default: development)

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000
```

### Available Endpoints

#### 1. Root Endpoint
- **GET** `/`
- **Description**: Welcome message and available endpoints
- **Response**:
```json
{
  "message": "Welcome to Harsh Bhalwar's Industrial Training Project, deployed on GCP VM",
  "available_endpoints": ["/project", "/status", "/team", "/metrics", "/to-do"]
}
```

#### 2. Project Information
- **GET** `/project`
- **Description**: Returns detailed project information
- **Response**:
```json
{
  "developer": "Harsh Bhalwar",
  "title": "Industrial Training Project : Deployment of a Backend Web Service on Google Cloud Platform",
  "description": "...",
  "technologies": ["Node.js", "Express.js", "GCP"],
  "version": "1.0.0"
}
```

#### 3. Application Status
- **GET** `/status`
- **Description**: Returns current application status and uptime
- **Response**:
```json
{
  "status": "running",
  "uptime": "123.45 seconds",
  "environment": "development",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### 4. Team Members
- **GET** `/team`
- **Description**: Returns project team information
- **Response**:
```json
{
  "project_team": [
    {
      "name": "Harsh Bhalwar",
      "role": "Backend Engineer / Cloud Deployment"
    },
    {
      "name": "Node.js",
      "role": "Building Backend Application"
    },
    {
      "name": "GCP",
      "role": "Hosting app on GCP VM Instance"
    }
  ],
  "note": "This project demonstrates building a backend app and hosting it on a GCP VM instance for public access using VM external API."
}
```

#### 5. System Metrics
- **GET** `/metrics`
- **Description**: Returns system metrics and memory usage
- **Response**:
```json
{
  "cpu_architecture": "x64",
  "node_version": "v20.0.0",
  "memory_usage": {
    "rss": "25.50 MB",
    "heapTotal": "10.00 MB",
    "heapUsed": "5.00 MB",
    "external": "2.00 MB"
  },
  "platform": "linux"
}
```

#### 6. To-Do List
- **GET** `/to-do`
- **Description**: Returns project to-do items
- **Response**:
```json
[
  {
    "id": 1,
    "task": "Build Node.js + Express.js App",
    "completed": true
  },
  {
    "id": 2,
    "task": "Create GCP VM Instance",
    "completed": true
  },
  {
    "id": 3,
    "task": "Deploy your app in GCP VM instance",
    "completed": false
  },
  {
    "id": 4,
    "task": "Access your app publicly using VM External IP",
    "completed": false
  }
]
```

## ☁️ GCP Deployment

This project is designed to be deployed on Google Cloud Platform. The deployment includes:

1. **Compute Engine VM Instance**
   - Ubuntu-based virtual machine
   - Custom VPC configuration
   - External IP assignment

2. **Network Configuration**
   - Firewall rules for ingress traffic
   - Port exposure (default: 3000)
   - Optional Nginx reverse proxy

3. **Process Management**
   - Systemd service for automatic startup
   - Process monitoring and management

4. **Monitoring**
   - GCP Cloud Monitoring (Stackdriver) integration
   - CPU utilization tracking
   - Network throughput monitoring
   - Custom alerts for threshold violations

## 📊 Project Goals

- Understand cloud deployment techniques
- Implement server administration best practices
- Learn networking concepts in cloud environments
- Set up monitoring and alerting systems
- Deploy a scalable, secure, and production-ready backend service

## 👤 Author

**Harsh Bhalwar**
- Backend Engineer / Cloud Deployment Specialist

## 📄 License

ISC

## 🔄 Version

1.0.0

## 📝 Notes

This project demonstrates practical cloud deployment techniques, server administration, networking concepts, and monitoring capabilities. It highlights how a backend service can be deployed in a scalable, secure, and production-ready manner using Google Cloud Platform.

---

For more information, visit the `/project` endpoint when the server is running.

