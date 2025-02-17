# project name : Visa Nexus : A user-friendly Visa Navigator Portal.

# purpose  : 
The Visa Navigator Portal aims to simplify and enhance the process of managing visa related activities by providing a user-friendly platform. It allows users to explore various visa options, check detailed requirements, apply for visas, and track their applications seamlessly. Designed with security and accessibility in mind, the portal ensures that only authenticated users can manage their applications while providing real-time data management features. Its dynamic and responsive interface adapts to all devices, offering a smooth and visually appealing user experience. Additionally, the portal incorporates advanced functionalities such as search, filtering by visa types, and a dark/light theme toggle to improve usability and personalization. By focusing on scalability and error-free performance with clear notifications, the Visa Navigator Portal aims to streamline the visa application process and make it more accessible and efficient for all users.

# Live URL : https://visa-nexus.netlify.app/

# Website features:
- **Simplified Visa Management:** Easily browse visa options, check requirements, and track applications.
- **Firebase Authentication:** Secure login/register with Google sign-in and private user routes.
- **Visa Application Tracking:** Users can view and manage their visa applications with real-time updates.
- **Add and Manage Visas:** Private route to add, update, and delete visas, with secure database integration.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices..
- **Filter and Search Options:** Advanced filtering by visa type and search functionality for easy navigation.
- **User-Friendly Alerts:**  Toast and sweet alert notifications for all actions and error handling..
- **Error Handling:** Custom 404 page for invalid routes.
- **Secure Data Management:** Environment variables for Firebase keys and secure user access.
- **Light/Dark Mode Toggle:** Theme customization for better user experience..

# npm packages I have used :
1. React
2. React Router DOM
3. Firebase
4. Tailwind CSS
5. React Toastify
6. SweetAlert2
7. MongoDB 
8. React Simple Typewriter
9. React Tooltip
10. dotenv
11. Cors
12. Express
13. React countup
   


### How to Run Visa Nexus Locally

1. **Clone the Repository:**
   First, clone the project repository to your local machine using:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   Change into the project folder:

   ```bash
   cd VisaNexus
   ```

3. **Install Dependencies:**
   Install all necessary dependencies using npm:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the root of your project directory.
   - Add your Firebase credentials and MongoDB URI in the `.env` file like:

     ```bash
     REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
     REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
     REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
     REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
     REACT_APP_MONGODB_URI=<your-mongodb-uri>
     ```

5. **Start the Development Server:**
   After installing dependencies and setting up the environment variables, run the following command to start the local development server:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Additional Information:
- **Database Setup:** Ensure your MongoDB database is set up and connected. If using a local MongoDB instance, make sure it is running before starting the project.
- **Authentication Setup:** Ensure Firebase authentication is properly configured for Google sign-in.

