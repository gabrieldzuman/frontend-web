import React from 'react';
import AuthForm from '../components/AuthForm';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h2>Register</h2>
      <AuthForm isLogin={false} />
    </div>
  );
};

export default RegisterPage;
