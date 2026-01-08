# Firebase CLI Guide - Direct Access to Firebase

This guide shows you how to use Firebase CLI to directly access and manage your Firebase project from the command line.

## Installation ✅

Firebase CLI is already installed! You can verify with:
```bash
firebase --version
```

## Step 1: Login to Firebase

```bash
firebase login
```

This will:
- Open your browser
- Ask you to sign in with your Google account
- Grant permissions to Firebase CLI

## Step 2: List Your Projects

```bash
firebase projects:list
```

This shows all your Firebase projects.

## Step 3: Initialize Firebase in Your Project (Optional)

If you want to use Firebase CLI commands in this directory:

```bash
firebase init
```

Select:
- **Firestore**: Configure security rules and indexes
- **Functions**: (Optional) If you want to add cloud functions later

## Step 4: View Messages Directly from CLI

### Option A: Use Firestore Emulator (Local Testing)

```bash
# Start Firestore emulator
firebase emulators:start --only firestore

# In another terminal, view data
firebase firestore:get messages
```

### Option B: Use Firebase Console (Web UI)

After logging in, you can:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Firestore Database**
4. View all messages in the `messages` collection

### Option C: Use Firebase CLI to Query Data

```bash
# Set your project
firebase use <your-project-id>

# View Firestore data (requires Firebase Admin SDK setup)
# Or use the web console for easier viewing
```

## Useful Firebase CLI Commands

### Authentication
```bash
firebase login              # Login to Firebase
firebase logout            # Logout
firebase login:list        # List logged-in accounts
```

### Project Management
```bash
firebase projects:list                    # List all projects
firebase use <project-id>                 # Switch to a project
firebase use --add                         # Add a project alias
firebase projects:create <project-name>    # Create new project
```

### Firestore
```bash
firebase firestore:delete <path>           # Delete data
firebase firestore:indexes                 # View indexes
firebase firestore:rules                    # View security rules
```

### Deployment
```bash
firebase deploy --only firestore:rules    # Deploy security rules
firebase deploy --only firestore:indexes   # Deploy indexes
```

## Quick Access to View Messages

### Method 1: Firebase Console (Easiest)

1. Login: `firebase login`
2. Open: [Firebase Console](https://console.firebase.google.com/)
3. Select your project
4. Go to **Firestore Database** > **messages** collection

### Method 2: Using Node.js Script

Create a script to view messages:

```javascript
// view-messages.js
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection('messages')
  .orderBy('timestamp', 'desc')
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      console.log('\n--- Message ---');
      console.log('ID:', doc.id);
      console.log('Name:', data.name);
      console.log('Email:', data.email);
      console.log('Message:', data.message);
      console.log('Timestamp:', data.timestamp?.toDate());
      console.log('Read:', data.read);
    });
  });
```

## Get Service Account Key (For Admin Access)

1. Go to Firebase Console > Project Settings
2. Click **Service Accounts** tab
3. Click **Generate New Private Key**
4. Save the JSON file securely (don't commit to git!)

## View Messages in Real-Time

### Using Firebase Console:
1. Login: `firebase login`
2. Open [Firebase Console](https://console.firebase.google.com/)
3. Select your project
4. Go to **Firestore Database**
5. Click on **messages** collection
6. Messages appear in real-time as they're submitted!

## Security Best Practices

1. **Never commit service account keys** to git
2. Add `service-account-key.json` to `.gitignore`
3. Use environment variables for sensitive data
4. Set up proper Firestore security rules

## Troubleshooting

### "Command not found"
- Make sure Firebase CLI is installed: `npm install -g firebase-tools`
- Restart your terminal

### "Permission denied"
- Run `firebase login` again
- Check that you have access to the project

### "Project not found"
- List projects: `firebase projects:list`
- Switch project: `firebase use <project-id>`

## Next Steps

- Set up Firestore security rules
- Deploy your portfolio with Firebase Hosting
- Set up Firebase Functions for email notifications
- Create a Flutter app to view messages (see `FLUTTER_FIREBASE_SETUP.md`)

