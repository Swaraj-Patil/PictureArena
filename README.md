# Manoranjan - OTT Platform

Manoranjan is a full-stack OTT platform built with Next.js, Express.js, and MongoDB. It offers a seamless streaming experience with features like user authentication, an admin panel, and an integrated payment portal.

## Features

- **Home Page**: Explore the latest movies and shows.
- **Movies and Shows Page**: Browse through a comprehensive collection.
- **Detailed View Pages**: Get detailed information about individual movies and shows.
- **Support Page**: Access support for any queries or issues.
- **Subscription Page**: Manage your subscriptions with ease.
- **User Authentication**: Secure login and registration.
- **Admin Panel**: Manage content and users.
- **Payment Portal**: Integrated payment system for subscriptions.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Swaraj-Patil/manoranjan.git
   cd manoranjan

2. **Install dependencies**:
   ```bash
   # For the client
   cd client
   npm install

   # For the server
   cd ../server
   npm install
   ```

3. **Set up environment variables**:
- Create a `.env.local` file in both `client/` and `server/` directories based on the `example-env` file in the `config` folder. This file should contain all required environment variables.

4. **Run the development server**:

   ```bash
   # From the root directory
   npm run dev
   ```


5. **Open the application**:

- Visit `http://localhost:3000` for the Next.js frontend.
- The Express.js backend runs on `http://localhost:5000`.

# Deployment
- **Vercel**: The frontend is deployed on Vercel, and environment variables are managed through the Vercel dashboard.

# Contributing
Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

# License
This project is licensed under the MIT License - see the [LICENSE](https://manoranjan.com/license) file for details.