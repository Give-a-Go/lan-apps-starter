# LAN-Based Apps Starter Project

## Prerequisites
Before getting started, make sure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
- **Code Editor**: We recommend [VS Code](https://code.visualstudio.com/)

## Getting Started
Follow these steps to set up and run the project locally.

### 1. Clone the Repository
```sh
git clone https://github.com/Give-a-Go/lan-apps-example.git
```

### 2. Navigate to the Project Directory and Install Dependencies
```sh
cd lan-apps-example
npm install
```

### 3. Start the Server
```sh
node server.js
```
By default, the server runs on: [http://localhost:3000](http://localhost:3000). Open this in your browser to verify it's working.
<img width="500" alt="image" src="https://github.com/user-attachments/assets/d3ed8155-55a2-4138-9a32-5849b0c55422" />


#### Troubleshooting
If you see an error stating that the address is already in use, update the `PORT` value in `server.js` to another available port (e.g., any random 4-digit number), then restart the server.

### 4. Open Another Instance of the App
- **On the same device**: Open another browser tab or window and go to your localhost address.
- **On a different device on the same LAN**:
  1. Find your local network address by running the following command in the terminal:
     ```sh
     ifconfig | grep "inet "
     ```
  2. Look for an IP address similar to `192.168.x.x` (not `127.0.0.1`).
  3. Open a browser on the second device and enter `http://<your-local-IP>:<PORT>`.

### 5. Start Coding
Open the project in your code editor and modify:
- **Backend**: `server.js`
- **Frontend**: Files inside the `public/` folder

## Have Fun Building!
- By [Give(a)Go](https://giveago.co) 🚀

