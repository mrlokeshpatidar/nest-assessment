# NestJS Form API

<div style="position: relative; padding-bottom: 53.645833333333336%; height: 0;"><iframe src="https://www.loom.com/embed/60374e9982e24f2d91c6e0e2322565f1?sid=f4c52c45-ea1b-4360-ab1a-fda73211a10b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

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
Before running the application, make sure to configure the database connection settings in `app.module.ts` file.

### Running the Application
To run the application in development mode, use the following command:
```bash
npm run start:dev
```

### Usage
Once the application is running, you can access the API endpoints using tools like Postman or curl.

Endpoints
* POST /form: Create a new form entry.
* GET /fill_data?form_title="user": Retrieve a specific form entry by user.
* POST /fill_data?form_title="user": Create a new form entry.

