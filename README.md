<h1>Overview</h1>
<p>
  This API provides a simple endpoint to retrieve user details, including email, current datetime, and GitHub URL. It is built using Node.js and the built-in http module.
</p>

<h2>Base URL</h2>
<p>
  https://localhost:8080
</p>

<h2>End points</h2>
<h3>Get details</h3>
<p>
  GET /api/details
</p>

<h3>Response</h3>
<pre>
  {
    email: "jaybiddy.jh@gmail.com",
    current_datetime: new Date().toISOString(), 
    github_url: "https://github.com/CoderHaqiim/HNG-stage-0-0"
  }
</pre>
