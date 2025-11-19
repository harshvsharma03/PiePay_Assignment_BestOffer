Best Offer Detection Service

A backend service that extracts e-commerce payment offers, stores them efficiently, and identifies the highest available discount.




----------------------------------------------------
| Layer                 | Technology               |
| --------------------- | ------------------------ |
| Backend Framework     | **Express.js**           |
| Language              | **Node.js (JavaScript)** |
| Database              | **MongoDB**              |
| Environment Variables | **dotenv**               |
| Testing Tool          | **Postman**              |
----------------------------------------------------




▶️ Running the Project

1️⃣ Install Dependencies

npm install

2️⃣ Configure Environment

Create .env file:

  MONGO_URI= {your connection link}
  
  PORT= {PORT of your CHOICE}




✔ Environment Variables

Sensitive information like DB connection URI is isolated in .env




🧪 Testing with Postman

Use Postman to test:
POST /createOffer
POST /best-discount

Ensure Body → Raw → JSON (application/json) is selected.





RESPONSES TO APIS

POST /createOffer
<img width="1432" height="964" alt="image" src="https://github.com/user-attachments/assets/4c7e2b09-7cad-4260-86fa-69efb5e4efac" />




POST /best-discount
<img width="1440" height="870" alt="image" src="https://github.com/user-attachments/assets/8c6fef89-a36a-4101-b789-15455e20d4c6" />



Getting the Desired response.




Note on Flipkart Offer API

Flipkart does not provide a publicly documented Offer/Deals API.
Therefore, this project uses a simulated Flipkart-style response structure based on common patterns observed in large e-commerce APIs (nested objects, product identifiers, variant-level offers, bank offers, and platform coupons).
