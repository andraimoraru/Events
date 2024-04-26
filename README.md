## Events Platform Set-Up & Run Instructions

# Prerequisites

•	Node.js installed (skip if already installed)
•	MongoDB account
•	Google Cloud account with Google Calendar API enabled

<br />

# Backend Set-Up

• Open the backend folder in VS Code 

• Open the integrated terminal

• Right-click on the sidebar > Select "Open in Integrated Terminal"

• Install dependencies: 

```
npm install
```

• Seed the database:

```
npm run seed
```

• Create a .env file in the root of the backend folder and add your environment variables:

	DATABASE_URL=<your_mongodb_atlas_uri>
	CLIENT_ID=<your_google_client_id>
	CLIENT_SECRET=<your_google_client_secret>
	REDIRECT_URI=http://localhost:9090/redirect

Note: Ensure MongoDB is set up and connected and prepare the Google API credentials.


•	Run tests for backend (if needed): npm run test

•	Start the server: 

```
npm run dev
```

 <br />
 
# Frontend Set-Up


•	Open the frontend folder in VS Code in a new window or tab.

•	Open the integrated terminal as you did for the backend.

•	Install dependencies: 

```
npm install
```

•	Start the frontend application: 

```
netlify dev 
```

<br />
	
Remember to run the backend before the frontend to ensure the API is ready to accept requests.

# Starting the Application

•	First, run the backend with ``` npm run dev ``` in the backend's integrated terminal.

•	Then, run the frontend with ``` netlify dev ``` in the frontend's integrated terminal.

# Additional Notes

•	To interact with the Google Calendar, you will use the credentials you obtained from the Google Cloud Console.

•	Remember to replace the placeholder values in the .env file with your actual credentials.

For the admin features(add events) use the user login:  admin@admin.com with password admin123.


For anyone setting up this project, follow these instructions to start the application locally on your machine. Ensure the ports (9090 for the backend, and 5174 for the frontend by default) are not being used by another process.




