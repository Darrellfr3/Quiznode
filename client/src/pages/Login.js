import React from 'react'

function Login() {
    return (
        <div>
            <h2 id="pagetext">Login to get started</h2>
      <h5 id="loginerror"></h5>
      <form class="login"/>
        <div class="form-group ">
          <label id="pagetext" for="exampleUsername">Username</label>
          <input type="text" class="form-control" id="username-input" placeholder="Username"/>
        </div>
        </div>
    )
}

export default Login
