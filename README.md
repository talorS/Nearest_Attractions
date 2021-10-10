# Nearest_Attractions App : https://nearestattractions.herokuapp.com/

**Server written with Node.js + Express.
**Client written with React Hooks.

For testing RESTFul API you can run 'npm test' or test it using Postman app
CRUD Operations:
1. getting access token for request from client:
http://localhost:8080/api/token
2.getting attractions near geo-location <latitude> <longitude>:
http://localhost:8080/api/attractions?longitude=<longitude>&latitude=<latitude>
3. getting distinct attraction types:
http://localhost:8080/api/attractions/type
  
(for operations 2+3 you need first have access token in request header under 'x-access-token' key)
