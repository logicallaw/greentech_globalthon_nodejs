# ☘️ 2025 GreenTech Globalthon NodeJS Server

## 👥 My Team Contributors

| Name           | Roles                             |
|----------------|---------------------------------- |
| Kim Jun-Ho     | Backend                           |

## 📺 Demo Video

## 🚀 Start

### 1. Requirement

This project was carried out in the following environment.

- **Node.js v23.6.0**  
- **npm v10.9.2**  
- **MySQL v8.0**  
- **UTF-8 (includes some Korean content)**  
- **Google Cloud Platform (GCP) account**  

### 2. Install

#### **Copy your local environment**

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/greentech_globalthon_nodejs.git
   cd greentech_globalthon_nodejs
2. **Install dependancy**
   ```bash
   npm install
3. **Set environmental variables**
   ```bash
   COOKIE_SECRET = your-cookie-secret

   # Connect to GCP MySQL - PROD
   SEQUELIZE_USERNAME = your-db-username
   SEQUELIZE_PASSWORD = your-db-password
   SEQUELIZE_DB_PROD = your-db-name

   SEQUELIZE_HOST = your-cloud-sql-host
   SEQUELIZE_PORT = your-cloud-sql-port

   # Connect to local MySQL - DEV
   SEQUELIZE_DEV_USERNAME = your-db-username
   SEQUELIZE_DEV_PASSWORD = your-db-password
   SEQUELIZE_DEV_DB = your-db-name

   SEQUELIZE_DEV_HOST = your-cloud-sql-host
   SEQUELIZE_DEV_PORT = your-cloud-sql-port

   # Connect to local MySQL - TEST 
   SEQUELIZE_TEST_USERNAME = your-db-username
   SEQUELIZE_TEST_PASSWORD = your-db-password
   SEQUELIZE_TEST_DB = your-db-name

   SEQUELIZE_TEST_HOST =  your-cloud-sql-host
   SEQUELIZE_TEST_PORT = your-cloud-sql-port
   TEST_SERVER_URL = your-cloud-sql-url

   # JWT SECRET
   JWT_SECRET = your-jwt-secret
   JWT_EXPIRES_IN= your-jwt-expires-in
   ```
4. **Run production environment of Node.js server**
   ```bash
   npm run prod
   ```
5. **Monit Node.js with command below**
   ```bash
   npx pm2 monit
   ```
---

## 📡 How to Use API
This project provides a comprehensive API for seamless integration.
For detailed instructions and examples, please refer to the [API Usage Guide](docs/API_USAGE.md).

## 🛠️ CI/CD pipeline

### **GCP Cloud Build & GitHub Actions**
For GCP Cloud Build, you must follow these steps.

1. **Open cloudbuild.yaml**

2. **'your-*' part needs to be modified**
   ```bash
   steps:
   # 1. Install dependancy
   - name: 'gcr.io/cloud-builders/npm'
       args: ['install']

   # 2. Update your repository using 'git pull'
   - name: 'gcr.io/cloud-builders/gcloud'
      args:
         - 'compute'
         - 'ssh'
         - 'your-vm-instance'
         - '--zone'
         - 'your-vm-instance-timezone'
         - '--command'
         - |
           git config --global --add safe.directory /home/your-github-account/greentech_globalthon_nodejs && \
           cd /home/your-github-account/greentech_globalthon_nodejs && git pull

   # 3. Restart your server using pm2
   - name: 'gcr.io/cloud-builders/gcloud'
      args:
         - 'compute'
         - 'ssh'
         - 'your-vm-instance'
         - '--zone'
         - 'your-vm-instance-timezone'
         - '--command'
         - |
           cd /home/your-github-account/greentech_globalthon_nodejs && \
           npx pm2 reload all

   # logsBucket
   logsBucket: 'gs://your-bucket-name' 
   ```

## 🗂️ Project architecture


1. **Client request**  
   - When a user sends a request, it is routed to the Express.js server through the GCP Load Balancer.
2. **GCP Express.js server**  
   - The Express.js server handles CRUD operations by communicating with MySQL Cloud SQL.  

## ⚙️ Tech Stacks

- **Backend**: Node.js, Express.js
- **Database**: Cloud SQL (MySQL)  
- **Cloud Provider**: Google Cloud Platform (GCP)  
  - GCP VM Instances (with Auto-scaling)  
  - GCP Cloud Load Balancer  
  - GCP Cloud Build (for CI/CD)
- **Code Formatting**: Clang-format  
- **Style Guide**: Google C++ Style Guide (adapted where applicable) 

## 🧑‍💻 How to contribute

1. **Fork this repository**
2. **Create a new branch**
   ```bash
   git checkout -b feature/your-new-feature-name your-remote-name/feature/your-new-feature-name
   ```
3. **Commit your change logs**
   ```bash
   git commit -m "feat: add your-change-logs"
   ```
4. **Push your branch**
   ```bash
   git push your-remote-name feature/your-new-feature-name
   ```
5. **Create a pull request at github**


## 📄 Licesne
This project is licensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE.txt) file.


## 📝 Questions or Support
If you have any questions or need support, feel free to open an issue on GitHub or reach out via the following contact methods:
 - Email: logicallawbio@gmail.com
 - GitHub: logicallaw