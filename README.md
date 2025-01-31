<b><h1>Overview</h1></b>
<b><h2>Description</h2></b>
<p>
  This API provides a simple endpoint to retrieve user details, including email, current datetime in UTC format, and GitHub repository URL. It is built using Node.js and the   built-in http module. 
 
  This project is a stage 0 project for the backend track of the HNG internship. 
  HNG is a platform that helps aspiring software developers sharpen their skills and train them to write industry standard code. HNG produces developers that are competent     and great problem solvers. If you are looking to hire Nodejs developers, you should explore the pool of talented HNG Nodejs developers 
  <a href="https://hng.tech/hire/nodejs-developers">HIRE NODEJS DEVELOPERS</a>.

</p>

<b><h2>Base URL</h2></b>
<p>
  https://hng-stage-0-0.onrender.com/
</p>

<b><h2>End points</h2></b>
<b><h3>Get details</h3></b>
<p>
  GET /api/details
</p>

<b><h4>Response</h4></b>
  <p></p>Content-Type: application/json<p></p>
  <p></p>status: 200 OK</p>
  
  Response body:
<pre>
  {
    "email": "jaybiddy.jh@gmail.com",
    "current_datetime": "new Date().toISOString()", 
    "github_url": "https://github.com/CoderHaqiim/HNG-stage-0-0"
  }
</pre>

<b><h4>Usage</h4></b>
  <pre>
    async function fetchData() {
      try {
        const URL = ""
        const response = await fetch('URL');
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
     } catch (error) {
        console.error('Fetch error:', error);
    }
  }
fetchData();
</pre>

<b><h3>Invalid route</h3></b>
<b><h4>Response</h4></b>
  <p></p>Content-Type: application/json<p></p>
  <p></p>status: 404 Not found</p>

  Response body:
<pre>
  {
    "message": "Requested resource not found"
  }
</pre>

<b><h1>Running the server locally</h1></b>
You must install node and download this repository into your local computer. 
Open the project in your text editor of choice, and in your terminal, run:
<pre>
  node server.js
</pre>
