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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


✔ Environment Variables

Sensitive information like DB connection URI is isolated in .env


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


🧪 Testing with Postman

Use Postman to test:
POST /createOffer
POST /best-discount

Ensure Body → Raw → JSON (application/json) is selected.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



RESPONSES TO APIS

POST /createOffer
<img width="1432" height="964" alt="image" src="https://github.com/user-attachments/assets/4c7e2b09-7cad-4260-86fa-69efb5e4efac" />




POST /best-discount
<img width="1440" height="870" alt="image" src="https://github.com/user-attachments/assets/8c6fef89-a36a-4101-b789-15455e20d4c6" />



Getting the Desired response.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Note on Flipkart Offer API

Flipkart does not provide a publicly documented Offer/Deals API.
Therefore, this project uses a simulated Flipkart-style response structure based on common patterns observed in large e-commerce APIs (nested objects, product identifiers, variant-level offers, bank offers, and platform coupons).

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

How you would scale the GET /highest-discount endpoint to handle 1,000 requests per second ?

To scale the GET /highest-discount endpoint efficiently, the biggest impact comes from query optimization and pre-computing results. Instead of scanning the entire offers collection each time a request arrives—which becomes extremely expensive as the number of offers grows—we index the most frequently queried fields such as productId, offerType, and discountValue. These indexes allow the database to locate relevant offers in milliseconds rather than performing a full table scan. This alone drastically reduces load and improves throughput. However, to handle traffic at the scale of 1,000 requests per second, even optimized DB queries may not be enough. That’s where pre-computation becomes powerful. Every time offers are created or updated, the service can compute the “best discount” once and store the result in a dedicated materialized table or a fast in-memory store like Redis. Then, when GET /highest-discount is called, the server simply fetches the pre-computed value in O(1) time instead of performing discount calculations repeatedly. This transforms the endpoint from compute-heavy and database-intensive to a near-instant lookup. Together, indexing and pre-computation eliminate unnecessary work, minimize database load, and make the endpoint capable of sustaining very high request volumes reliably.

What you will improve if you had more time to complete the assignment ?

Spend more time studying the Offer APIs and how to use them most accurately.
























