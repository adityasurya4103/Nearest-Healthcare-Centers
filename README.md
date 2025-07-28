# Suggest Nearest Coordinates Using Haversine Formula With Latitude And Longitude

# This Repository contains the backend logic for Immuverse project for suggesting the nearest healthcare center 

A backend utility to **suggest the nearest coordinates** (like a healthcare center) using the **Haversine formula** with **latitude and longitude**, retrieved from a user’s pincode via Geoapify. Ideal for geolocation-based services in healthcare, logistics, or smart city systems.

---

## 🚀 Features

- Convert pincode to latitude and longitude using **Geoapify Geocoding API**
- Use the **Haversine formula** to calculate spherical distance
- Find and return the **nearest location** from a database
- Built with **Node.js**, **MongoDB**, and **Axios**

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/SuggestNearestCoordinatesUsingHaversineWithLatitudeAndLongitude.git
cd SuggestNearestCoordinatesUsingHaversineWithLatitudeAndLongitude
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
GEOAPIFY_API_KEY=your_api_key_here
```

> 💡 Replace `your_api_key_here` with your actual API key from [Geoapify](https://www.geoapify.com/).

---

## 📂 Folder Structure

```
.
├── models/
│   └── healthCareCenter.js       # MongoDB schema for healthcare centers
├── utils/
│   └── assignNearest.js          # Core logic using Haversine formula
├── .env                          # API key (not committed to Git)
├── package.json
└── README.md
```

---

## 🧠 How It Works

1. **Input:** User provides a pincode (e.g., `411001`).
2. **Geocoding:** The pincode is sent to **Geoapify API** to fetch latitude and longitude.
3. **Distance Calculation:** The system calculates the **Haversine distance** between user coordinates and all saved healthcare centers.
4. **Nearest Match:** Returns the `centerId` of the **nearest center**.

---

## 🛠 Example Usage

```js
const { assignNearestHealthCareCenter } = require('./utils/assignNearest');

(async () => {
  const nearest = await assignNearestHealthCareCenter("411001");
  console.log("Nearest Center ID:", nearest);
})();
```

---

## 🧪 Sample MongoDB Document (healthCareCenter)

```json
{
  "centerId": "HC123",
  "name": "Primary Health Center",
  "location": {
    "latitude": 19.7515,
    "longitude": 75.7139
  }
}
```


## ⚠️ Note

This repository demonstrates **only a specific functionality** of a larger project.  
It focuses solely on **suggesting the nearest location** using **Haversine formula** and **latitude-longitude-based logic**.

> 🧩 **This code does not include `app.js`, `index.js`, or routing/server logic.**  
It is meant to be **integrated into a broader Node.js application**.


