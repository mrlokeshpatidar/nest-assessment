# NestJS Form API

This is a sample NestJS API project that provides endpoints for managing form data.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js and npm

### Installation

1. Clone the repository:
  ```bash
   git clone https://github.com/MrLokeshPatidar/nest-assessment.git
  ```

2. Navigate to the project directory:
  ```bash
  cd nest-assessment
  ```

3. Install dependencies
  ```bash
  npm install
  ```

### Configuration
Before running the application, make sure to configure the database connection settings in `ormconfig.json` file.

### Running the Application
To run the application in development mode, use the following command:
```bash
npm run start:dev
```

### Usage
Once the application is running, you can access the API endpoints using tools like Postman or curl.

Endpoints
POST /form: Create a new form entry.
GET /fill_data?form_title="user": Retrieve a specific form entry by ID.
POST /fill_data?form_title="user": Create a new form entry.
