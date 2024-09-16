<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobility-Future</title>
</head>
<body>

<h1>Mobility-Future</h1>

<h2>Deployed Application</h2>
<p>The Mobility-Future project is deployed and live at the following URL:</p>
<p><a href="https://transpohub.vercel.app/">Mobility-Future App</a></p>
<p>You can access and explore the functionality of the app by visiting the link above.</p>

<hr>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#installation">Installation</a>
        <ul>
            <li><a href="#cloning-the-repository">Cloning the repository</a></li>
            <li><a href="#running-the-client">Running the client</a></li>
            <li><a href="#running-the-server">Running the server</a></li>
        </ul>
    </li>
    <li><a href="#screenshots">Screenshots</a>
        <ul>
            <li><a href="#opening-a-new-terminal-in-vs-code">Opening a new terminal in VS Code</a></li>
        </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#license">License</a></li>
</ul>

<hr>

<h2 id="introduction">Introduction</h2>
<p>Mobility-Future is a modern web application designed to transform transportation systems. It offers users the ability to access various mobility solutions and provides a seamless interface for navigating transportation data and services.</p>
<p>This repository contains the full-stack code for the application, split into a client and server component.</p>

<hr>

<h2 id="installation">Installation</h2>

<h3 id="cloning-the-repository">Cloning the Repository</h3>
<p>To use this project locally, follow these steps:</p>

<ol>
    <li>Clone the repository from GitHub:
        <pre><code>git clone https://github.com/Ayushpal2006/Mobility-Future.git</code></pre>
    </li>
    <li>Navigate to the client directory:
        <pre><code>cd Mobility-Future/client</code></pre>
    </li>
    <li>Install the client dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Start the client:
        <pre><code>npm run start</code></pre>
        This will start the client at http://localhost:3000.
    </li>
</ol>

<h3 id="running-the-server">Running the Server</h3>
<p>To run the server component, follow these steps:</p>

<ol>
    <li>Open a new terminal window (check the Screenshots section for a tutorial on how to do this in VS Code).</li>

    <li>Navigate back to the root directory and then to the server directory:
        <pre><code>cd ..</code></pre>
        <pre><code>cd server</code></pre>
    </li>

    <li>Install the server dependencies:
        <pre><code>npm install</code></pre>
    </li>

    <li>Start the server using npx:
        <pre><code>npx nodemon</code></pre>
        This will start the server at http://localhost:4000.
    </li>
</ol>

<hr>

<h2 id="screenshots">Screenshots</h2>

<h3 id="opening-a-new-terminal-in-vs-code">Opening a New Terminal in VS Code</h3>
<p>To open a new terminal in Visual Studio Code, follow these steps:</p>

<ol>
    <li>Step 1: Open VS Code, and ensure you have the project folder opened.</li>

    <li>Step 2: Click on Terminal in the top menu.</li>

    <li>Step 3: Select New Terminal from the dropdown.</li>

    <li>Step 4: A new terminal window will open at the bottom of the screen where you can execute your commands.</li>
</ol>

<hr>

<h2 id="features">Features</h2>
<ul>
    <li>Full-stack web application</li>
    <li>Client built with React</li>
    <li>Backend using Node.js and Express</li>
    <li>Real-time updates via the server API</li>
    <li>Deployed on Vercel</li>
</ul>

<hr>

<h2 id="troubleshooting">Troubleshooting</h2>
<ul>
    <li>If the client does not start: Ensure all dependencies are installed using npm install. Check for any error logs in the terminal.</li>
    <li>If the server does not run: Ensure that nodemon is installed and all dependencies are correctly installed in the server directory.</li>
</ul>

<hr>

<h2 id="contributors">Contributors</h2>
<p>Ayushpal2006 - Lead Developer</p>

<hr>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License. See the LICENSE file for more details.</p>

</body>
</html>