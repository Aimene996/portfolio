# ✅ Quick Checklist - Can't Send Messages?

## Step 1: Check .env.local File
```bash
Get-Content .env.local
```
**Should see all 6 Firebase variables starting with `NEXT_PUBLIC_FIREBASE_`**

---

## Step 2: Restart Dev Server
**CRITICAL:** Environment variables only load when server starts!

1. Stop server: `Ctrl+C`
2. Start again: `npm run dev`
3. Look for: `✅ Firebase initialized successfully` in terminal

---

## Step 3: Check Firestore is Enabled
1. Go to: https://console.firebase.google.com/project/portfolio-785b2/firestore
2. If you see "Create database" → Click it and create in **test mode**

---

## Step 4: Deploy Firestore Rules
```bash
firebase deploy --only firestore:rules
```

---

## Step 5: Test the Form
1. Go to: http://localhost:3000/contact
2. Fill form:
   - Name: Test (at least 2 chars)
   - Email: test@example.com
   - Message: Test message with more than 10 characters
3. Submit and check:
   - ✅ Green message = Working!
   - ❌ Red message = Check terminal

---

## Step 6: Check Terminal Output
When you submit, look for:
- ✅ `✅ Firebase initialized successfully` = Good
- ❌ `❌ Firebase configuration is missing` = .env.local issue
- ❌ `Firebase is not initialized` = Restart server
- ❌ `Permission denied` = Firestore rules issue

---

## Step 7: Check Browser Console (F12)
1. Open DevTools (F12)
2. Go to Console tab
3. Submit form
4. Look for red errors

---

## Step 8: Check Network Tab
1. DevTools > Network tab
2. Submit form
3. Find `/api/contact` request
4. Check:
   - Status: Should be 200
   - Response: Should show success or error details

---

## 🎯 Most Common Issues:

1. **"Firebase configuration is missing"**
   → `.env.local` doesn't exist or server not restarted

2. **"Permission denied"**
   → Firestore rules need to be deployed

3. **"Firebase is not initialized"**
   → Check `.env.local` values are correct

4. **Form submits but no success message**
   → Check terminal for errors

---

## ✅ If Everything is Set Up:

After restarting server, you should see in terminal:
```
✅ Firebase initialized successfully
```

Then when you submit a message:
- Terminal shows: Request logged
- Browser shows: Green success message
- Firebase Console shows: Message in `messages` collection

---

## 📝 Still Not Working?

Run this and share the output:
```bash
# Check .env.local
Get-Content .env.local

# Check if server is running
# Look at terminal output when you submit form
```

