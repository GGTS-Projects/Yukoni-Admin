import React from 'react';



const LoginPage = () => (
  <div classNameName="container">

     <form action="/login" method="post">
        <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email"></input>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password"></input>
        </div>

        <button type="submit" className="btn btn-warning btn-lg">Login</button>
    </form>
  </div>
);

export default LoginPage;