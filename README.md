# Employee Manager
Used to manage the users in an organisation.

## DB Setup
Export the DB connection parameters (application DB user and password):

```
export DB_USER=employee_manager
export DB_PASS=password
cd db
./setup.sh
```

## Running the application
### Backend (express)
Export the DB connection parameters (application DB user and password) and start the Node application. It will run on http://localhost:8002.

```
export DB_USER=employee_manager
export DB_PASS=password
cd express
nodemon index.js
```

### Frontend (angular)
Run `npm start` in `web-app/employee-web-app`.
This will start the frontend on http://localhost:8001.