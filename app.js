import express from "express";

const app = express();
// Middleware to parse JSON
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
      res.json({
            message: "Welcome to Harsh Bhalwar’s Industrial Training Project, deployed on GCP VM",
            available_endpoints: ["/project", "/status", "/team", "/metrics", "/to-do"],
      });
});

// 1️⃣ Project Information Endpoint
app.get("/project", (req, res) => {
      res.status(200).json({
            developer: "Harsh Bhalwar",
            title: "Industrial Training Project : Deployment of a Backend Web Service on Google Cloud Platform",
            description:
                  "This project focuses on deploying a fully functional backend web service on Google Cloud Platform (GCP) using industry-standard cloud infrastructure components. The goal of the project is to understand and implement the end-to-end process of hosting, configuring, and exposing a web application in a cloud environment.\n A Node.js and Express.js REST API containing five backend endpoints is developed and deployed on a Compute Engine Virtual Machine running Ubuntu. The application is hosted in a custom VPC (Virtual Private Cloud), configured with appropriate firewall rules, external IP assignment, and secure SSH access. The backend service is started and managed using systemd, enabling automatic boot-time startup and reliable process management. To make the application publicly accessible, all necessary network configurations such as ingress rules, port exposure, and optional Nginx reverse proxy routing are implemented. GCP’s Cloud Monitoring (Stackdriver) is used to observe real-time instance performance, track CPU utilization, monitor network throughput, and set up custom alerts to notify when thresholds (e.g., high CPU usage) are exceeded.\n This project demonstrates practical cloud deployment techniques, server administration, networking concepts, and monitoring capabilities. It highlights how a backend service can be deployed in a scalable, secure, and production-ready manner using Google Cloud Platform.",
            technologies: [
                  "Node.js",
                  "Express.js",
                  "GCP",
            ],
            version: "1.0.0",
      });
});

// 2️⃣ Application Status Endpoint
app.get("/status", (req, res) => {
      res.status(200).json({
            status: "running",
            uptime: process.uptime().toFixed(2) + " seconds",
            environment: process.env.NODE_ENV || "development",
            timestamp: new Date().toISOString(),
      });
});

// 3️⃣ Team Members Endpoint
app.get("/team", (req, res) => {
      res.status(200).json({
            project_team: [
                  {name: "Harsh Bhalwar", role: "DevOps Engineer / Developer"},
                  {name: "Jenkins", role: "CI/CD Automation"},
                  {name: "Docker", role: "Containerization"},
            ],
            note: "This project demonstrates automated build, test, and deploy pipelines.",
      });
});

// 4️⃣ Sample System Metrics Endpoint (extra)
app.get("/metrics", (req, res) => {
      const used = process.memoryUsage();
      const memoryUsageMB = {};
      for (let key in used) {
            memoryUsageMB[key] = (used[key] / 1024 / 1024).toFixed(2) + " MB";
      }

      res.status(200).json({
            cpu_architecture: process.arch,
            node_version: process.version,
            memory_usage: memoryUsageMB,
            platform: process.platform,
      });
});

app.get("/to-do", (req, res) => {
      const todos = [
            {id: 1, task: "Build Node.js + Express.js App", completed: true},
            {id: 2, task: "Create GCP VM Instance", completed: true},
            {id: 3, task: "Deploy your app in GCP VM instance", completed: false},
            {id: 4, task: "Access your app publicly using VM External IP", completed: false},
      ];

      res.status(200).json(todos)
});

export default app;
