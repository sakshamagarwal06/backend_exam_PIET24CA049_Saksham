# Backend Development Exit Test — PIET (2028 Batch | 5th Semester)

- **Name:** Saksham Agarwal
- **Registration No:** PIET24CA049
- **Session:** 2026–27

## Project Structure
- `Task1_Library_API/` — Library Book Management REST API (Node.js, Express, MongoDB/Mongoose, CRUD operations, error handling, request logger, Postman & MongoDB Compass screenshots in `outputs/`).
- `Task2_Student_Portal/` — Student Portal with JWT Authentication & Role-Based Access Control (Registration with Joi & bcrypt, 1-hour JWT Login, Protected `/profile` & Admin-only `/students` routes, `helmet`, `cors`, `express-rate-limit`, Postman screenshots in `outputs/`).

## Setup & Run
1. Navigate into either task folder (`cd Task1_Library_API` or `cd Task2_Student_Portal`).
2. Run `npm install` to install dependencies.
3. Configure `.env` (`PORT` and `MONGO_URI`, plus `JWT_SECRET` for Task 2).
4. Start the server with `node server.js`.