
# NextMart

## Short Project Description
NextMart is a simple e-commerce web application built with **Next.js 15** (App Router) and **NextAuth.js** for authentication.  
Users can browse products, view product details, and authenticated users can access a protected dashboard to add new products. The application features a premium UI with React Icons, loading spinners, and toast notifications.

---

## Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/asapial/nextmart.git
cd nextmart
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root and add your credentials:

```env
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Database (MongoDB)
MONGO_URI=your_mongodb_connection_string

# Imgbb API Key (optional if using image upload)
IMGBB_API_KEY=your_imgbb_api_key
```

### 4. Run the Application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Route Summary

| Route                   | Method     | Description                                            | Auth Required   |
| ----------------------- | ---------- | ------------------------------------------------------ | --------------- |
| `/`                     | GET        | Landing page with Hero, Product Highlights, and Footer | No              |
| `/login`                | GET / POST | User login (Google or credentials)                     | No              |
| `/register`             | GET / POST | User registration                                      | No              |
| `/products`             | GET        | List all products                                      | No              |
| `/products/[id]`        | GET        | View single product details                            | No              |
| `/dashboard/addProduct` | GET / POST | Add new product to the database                        | Yes (protected) |
| `/dashboard`            | GET        | Dashboard overview                                     | Yes (protected) |

---

## Features

* Public and protected pages using NextAuth.js
* Login with Google or credentials
* Add products in dashboard (protected)
* Responsive UI with premium look using Tailwind CSS and React Icons
* Image upload to Imgbb with live preview
* Toast notifications for actions
* Collapsible sidebar for dashboard navigation

---

## Tech Stack

* **Frontend:** Next.js 15, React, Tailwind CSS
* **Authentication:** NextAuth.js
* **Database:** MongoDB (or any preferred database)
* **Image Hosting:** Imgbb API
* **UI/Icons:** React Icons

---

