## References

- Firebase Firestore Quickstart  
  https://firebase.google.com/docs/firestore/quickstart

# Firebase Security Rules Setup

This project uses Firebase Firestore with secure production rules.
The rules are managed locally and deployed to Firebase using the Firebase CLI.

## Firestore Rules

1. After running firebase init and selecting Firestore, the firestore.rules file is generated.
2. Open firestore.rules and replace the default rules with:
   
```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    match /users/{userId} {
      // Anyone signed in can read, but only the owner can write
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```
3. Deploy the Firestore rules:
   firebase deploy --only firestore:rules
