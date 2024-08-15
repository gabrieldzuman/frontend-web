import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
`;

const AuthForm: React.FC<{ isLogin: boolean }> = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
    </Form>
  );
};

export default AuthForm;
