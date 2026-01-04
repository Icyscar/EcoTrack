# EcoTrack | Waste Management & Sustainability System

EcoTrack is a web-based prototype designed as part of the **Agile Development & Case Tool Lab**, focusing on **SDG 12: Responsible Consumption and Production**. It empowers households to track their waste, municipal admins to manage stakeholders, and recycling partners to efficiently collect materials.

## 🌍 Project Vision
The goal of EcoTrack is to bridge the gap between waste generators and recyclers. By providing a digital interface for waste logging and collection management, we encourage responsible disposal habits and streamline the circular economy.

## 🚀 Key Features

### 🛡️ Admin Control Panel (The Master Hub)
- **Centralized Security**: Public registration is disabled. Only the Admin can create official accounts.
- **Stakeholder Onboarding**: Register **Households (Customers)** and **Recycling Partners**.
- **Partner Differentiation**: Supports both large **Recycling Agencies** (🚛) and **Individual Partners** (🚶).
- **System Monitoring**: Track total waste volume and manage the entire ecosystem from one dashboard.

### 🏠 Household Dashboard
- **Waste Logging**: Users log daily waste types (Plastic, Organic, E-Waste, etc.).
- **Sustainability Insights**: View a dedicated **Sustainability Tips** page to improve recycling habits.
- **Status Tracking**: Households can see the collection status of their reported waste in real-time.

### 🚛 Recycling Partner Portal
- **Claim & Collect**: Recyclers can view a list of available recyclable waste in their area.
- **Task Locking**: Once a recycler claims a waste item, it is locked from others to prevent double-collection.
- **Individual/Agency Views**: Personalized dashboard titles and icons based on the partner type.

## 🛠️ Technical Stack
- **Frontend**: Vanilla HTML5, CSS3 (Modern Glassmorphism Design), JavaScript.
- **Backend**: Mocked using Browser `LocalStorage` for data persistence.
- **Security**: Mock Role-Based Access Control (RBAC).

## 🔑 Access Credentials (Mock)
- **Admin**: `admin@gmail.com` / `admin`
- **Users/Recyclers**: Register these first via the Admin account.

## 📂 Project Structure
- `index.html`: Centralized Login Hub.
- `admin.html`: Master Control Panel.
- `dashboard.html`: Household User Dashboard.
- `recycler.html`: Partner Collection Portal.
- `tips.html`: Educational Sustainability content.
- `js/`: Modules for `auth.js`, `waste.js`, and `tips.js`.
- `css/`: Global `styles.css` with a responsive design system.

---
*Developed for the Agile Development & Case Tool Lab Prototype.*
