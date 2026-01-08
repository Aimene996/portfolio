# Firebase Integration - Complete Setup

This portfolio uses Firebase to store contact form messages. You can view these messages from:
- **Web**: Firebase Console
- **Flutter App**: Real-time admin dashboard (see setup below)

## Quick Start

### 1. Web Portfolio Setup (Already Done ✅)

The code is already set up! You just need to:
1. Create a Firebase project
2. Enable Firestore Database
3. Add environment variables to `.env.local`
4. See `FIREBASE_SETUP.md` for detailed steps

### 2. Flutter Admin App Setup (View Messages)

To view messages in a Flutter app:
1. Follow `FLUTTER_FIREBASE_SETUP.md`
2. Use the same Firebase project
3. The Flutter app will show messages in real-time

## File Structure

```
my-portfolio/
├── FIREBASE_SETUP.md          # Web portfolio Firebase setup
├── FLUTTER_FIREBASE_SETUP.md  # Flutter admin app setup
├── lib/
│   └── firebase.ts            # Firebase configuration
└── app/
    └── api/
        └── contact/
            └── route.ts        # API route that saves messages
```

## How It Works

1. **User submits form** → Contact form on portfolio website
2. **API route saves** → `/api/contact` saves to Firestore
3. **Messages stored** → Firestore collection: `messages`
4. **View messages** → Firebase Console or Flutter app

## Message Structure

Each message in Firestore contains:
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  message: "Hello, I'm interested in...",
  timestamp: Timestamp,
  read: false
}
```

## Security

- Messages are written server-side (API route) - secure ✅
- For production, add authentication to Flutter app
- Update Firestore rules to restrict read access

## Need Help?

- Web setup issues? → See `FIREBASE_SETUP.md`
- Flutter setup issues? → See `FLUTTER_FIREBASE_SETUP.md`
- Code questions? → Check the implementation files

