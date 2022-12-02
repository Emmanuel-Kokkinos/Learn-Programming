**If cloning from GitHub:**
- clone repository
- cd to local repository
- Delete the node_modules folder and any 'lock' files such as 
- yarn.lock or package-lock.json if present.
```javascript
npm install
```

frontend folder needs this package installed:
```javascript
npm install react-router-dom
```

backend folder needs these packages installed:
```javascript
npm install --save-dev nodemon
npm install express body-parser concurrently
```

Update the frontend/package.json with the "proxy" code:
```javascript
"proxy": "http://localhost:4000/",
```

See the package.json file for npm run scripts.


**If starting from scratch:**
Initialize a React App:
```javascript
npx create-react-app frontend
or
npm init react-app ./frontend
```

Initialize the Node backend:
```javascript
mkdir backend
cd backend
npm init -y
```

**To run app:**
- cd to backend
```javascript
npm run dev
```