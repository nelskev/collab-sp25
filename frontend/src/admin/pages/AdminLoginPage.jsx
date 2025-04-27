import React, { useState } from "react";
import SigninForm from "../components/AdminLoginForm";
import { TextNameProvider } from "../../context/TextNameContext";

function AdminLoginPage() {






  return (
    <>
  


<div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
<div className="col-md-8">
  <TextNameProvider>

        <h2 className="text-center">Administrator Login</h2>
        <br />
        {/* <LoginForm /> */}
        <SigninForm />
  </TextNameProvider>
        </div>
      </div>
    </>
  );
}

export default AdminLoginPage;
