A simple Express.js API that returns static personal information along with a dynamic timestamp and a random cat fact fetched from an external API.

Features ✨
Personal Info: Returns a static object with name, email, and tech stack.

Dynamic Timestamp: Includes the current UTC time in ISO 8601 format with every request.

Random Cat Fact: Fetches a new, random cat fact from the Cat Fact API on every call.

Error Handling: Gracefully handles failures if the external Cat Fact API is unavailable.

API Endpoint
The only endpoint available is GET /me.

GET /me
Returns the user's information, a timestamp, and a cat fact.

Success Response (200 OK):

JSON

{
  "status": "success",
  "user": {
    "email": "dr393462@gmail.com",
    "name": "Oluwatise Ajayi",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T19:10:00.123Z",
  "fact": "A cat can’t climb head first down a tree because its claws are curved the wrong way."
}
Error Response (500 Internal Server Error): This is returned if the Cat Fact API fails to respond.

JSON

{
  "status": "error",
  "message": "Could not fetch a cat fact at this time. Please try again later."
}

Getting Started 🚀

Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You'll need to have the following software installed on your computer:

Node.js (v16 or higher is recommended)

A package manager like npm or yarn

Installation & Setup
Clone the repository:

Bash

git clone <your-repo-url>
Navigate to the project directory:

Bash

cd <your-project-folder>
Install the dependencies:

Bash

npm install
Running the Application
To start the server, run the following command. The server will launch on http://localhost:3001.

Bash

npm start
# or
node index.js
Tech Stack 🛠️
Backend: Node.js

Framework: Express.js

HTTP Client: Axios