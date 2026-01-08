# Troubleshooting - Can't Send Messages

## ✅ Checklist - What to Check

### 1. Environment Variables (.env.local)
**Check:** Does `.env.local` exist in the root directory?

```bash
# Check if file exists
Get-Content .env.local
```

**Should contain:**
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCejB_SFoAq9AUnibXGgYY_OKB-5WY0SMg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=portfolio-785b2.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=portfolio-785b2
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=portfolio-785b2.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=324002708130
NEXT_PUBLIC_FIREBASE_APP_ID=1:324002708130:web:d3757bfb8181d7532575fb
```

**Fix if missing:** Create `.env.local` with the values above.

---

### 2. Dev Server Restart
**Check:** Did you restart the dev server after creating/updating `.env.local`?

**Fix:**
1. Stop server (Ctrl+C)
2. Start again: `npm run dev`
3. Environment variables only load when server starts!

---

### 3. Firestore Database Enabled
**Check:** Is Firestore enabled in Firebase Console?

**Steps:**
1. Go to: https://console.firebase.google.com/project/portfolio-785b2
2. Click **Build** > **Firestore Database**
3. If you see "Create database", click it and create in **test mode**

---

### 4. Firestore Security Rules
**Check:** Are the rules allowing writes?

**Current rules should be:**
```javascript
match /messages/{messageId} {
  allow read: if true;
  allow write: if false;  // API route handles writes server-side
  allow update: if true;
}
```

**Fix:** Deploy rules if needed:
```bash
firebase deploy --only firestore:rules
```

---

### 5. Terminal Errors
**Check:** What errors appear in your terminal when you submit the form?

**Look for:**
- ❌ "Firebase configuration is missing" → `.env.local` issue
- ❌ "Firebase is not initialized" → Check environment variables
- ❌ "Permission denied" → Firestore rules issue
- ❌ "Network error" → Check internet connection

---

### 6. Browser Console Errors
**Check:** Open browser DevTools (F12) > Console tab

**Look for:**
- Red error messages
- Network tab > Check if `/api/contact` request fails

---

### 7. Test the API Route Directly

**Test with curl or Postman:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test message with more than 10 characters"}'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon.",
  "id": "..."
}
```

---

## 🔍 Step-by-Step Debugging

### Step 1: Check Environment Variables
```bash
# In your terminal, check if variables are loaded
npm run dev
# Look for: "✅ Firebase initialized successfully"
# If you see "❌ Firebase configuration is missing" → .env.local issue
```

### Step 2: Check Firebase Console
1. Go to: https://console.firebase.google.com/project/portfolio-785b2/firestore
2. Check if `messages` collection exists
3. Try submitting a message and see if it appears

### Step 3: Check Network Tab
1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Submit the form
4. Look for `/api/contact` request
5. Check:
   - Status code (should be 200)
   - Response body (should show success or error)

### Step 4: Check Server Logs
Look at your terminal where `npm run dev` is running:
- Should see request logs
- Check for any error messages

---

## 🚨 Common Issues & Fixes

### Issue: "Firebase configuration is missing"
**Fix:**
1. Create `.env.local` file
2. Add all `NEXT_PUBLIC_FIREBASE_*` variables
3. Restart dev server

### Issue: "Permission denied"
**Fix:**
1. Check Firestore rules
2. Make sure database is created
3. Deploy rules: `firebase deploy --only firestore:rules`

### Issue: "Network error" in browser
**Fix:**
1. Check if dev server is running
2. Check browser console for CORS errors
3. Try hard refresh (Ctrl+Shift+R)

### Issue: Form submits but no message appears
**Fix:**
1. Check Firebase Console > Firestore
2. Check terminal for errors
3. Verify Firestore is enabled

---

## ✅ Quick Test

1. **Restart dev server:**
   ```bash
   # Stop (Ctrl+C)
   npm run dev
   ```

2. **Go to:** http://localhost:3000/contact

3. **Fill form:**
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message with more than 10 characters

4. **Submit and check:**
   - ✅ Green success message = Working!
   - ❌ Red error message = Check terminal/console

5. **Verify in Firebase:**
   - Go to: https://console.firebase.google.com/project/portfolio-785b2/firestore
   - Check `messages` collection
   - Should see your test message!

---

## 📞 Still Not Working?

Share these details:
1. Terminal output when submitting form
2. Browser console errors (F12 > Console)
3. Network tab response for `/api/contact`
4. Firebase Console screenshot

