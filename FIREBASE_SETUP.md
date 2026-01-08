# Firebase Setup Guide - Web Portfolio

This guide will help you set up Firebase for the contact form in your portfolio website.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter a project name (e.g., "my-portfolio")
   - Enable/disable Google Analytics (optional)
   - Click "Create project"

**Note:** You'll use the same Firebase project for both your web portfolio and Flutter admin app!

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Build** > **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development) or **Start in production mode** (for production)
4. Select a location for your database
5. Click **Enable**

### For Production: Set Up Security Rules

If you chose production mode, you'll need to set up security rules. Go to **Rules** tab and use:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{messageId} {
      // Allow read only for authenticated admin users
      allow read: if request.auth != null;
      // Allow write from API route (server-side only)
      allow write: if false; // API route handles writes
    }
  }
}
```

**Note:** Since we're using an API route for form submissions, the writes are handled server-side, which is more secure.

## Step 3: Get Your Firebase Configuration

### For Web App (Portfolio Website)

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app with a nickname (e.g., "Portfolio Website")
5. Copy the configuration values (you'll need these for `.env.local`)

### For Flutter App (Admin - View Messages)

1. In the same **Project Settings** > **Your apps** section
2. Click **Add app** and select **Android** or **iOS**
3. Follow the setup wizard:
   - **Android**: Register package name (e.g., `com.yourname.portfolioadmin`)
   - **iOS**: Register bundle ID
4. Download the configuration file:
   - **Android**: `google-services.json`
   - **iOS**: `GoogleService-Info.plist`
5. See `FLUTTER_FIREBASE_SETUP.md` for Flutter integration details

## Step 4: Add Environment Variables

1. Create a `.env.local` file in the root of your project (copy from `.env.example`)
2. Add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. Replace the placeholder values with your actual Firebase config values

## Step 5: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check Firebase Console > Firestore Database to see the message

## Viewing Messages in Firebase

1. Go to Firebase Console > Firestore Database
2. You'll see a collection called `messages`
3. Each document contains:
   - `name`: Sender's name
   - `email`: Sender's email
   - `message`: The message content
   - `timestamp`: When the message was sent
   - `read`: Boolean indicating if you've read the message

## Security Notes

- The API route (`/app/api/contact/route.ts`) handles form submissions server-side
- This prevents exposing your Firebase credentials to the client
- For production, consider adding rate limiting and spam protection
- You can set up Firebase Admin SDK for more secure server-side operations

## Troubleshooting

### Error: "Firebase: Error (auth/api-key-not-valid)"
- Check that your API key is correct in `.env.local`
- Make sure the environment variable names start with `NEXT_PUBLIC_`

### Error: "Firestore permission denied"
- Check your Firestore security rules
- Make sure the database is created and enabled

### Messages not appearing in Firestore
- Check the browser console for errors
- Verify your Firebase configuration is correct
- Check the Network tab to see if the API request is successful

