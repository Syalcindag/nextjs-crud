'use client'
import React from 'react';
import {Container } from 'react-bootstrap';
import { validationRules } from './valdationRules';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProfileForm } from '@/components/profileForm';
import { existingData } from './existingData';

const Profile = () => {


  const onSubmit = data => {
    console.log(data);
    // Sunucuya gönderme veya başka işlemler
  };

  return (
    <Container style={{ maxWidth: '600px', marginTop: '50px', border: '1px solid black', padding: '10px', }}>
      <ProfileForm  existingData={existingData} validationRules={validationRules} onSubmit={onSubmit} />
    </Container>
  );
};


export default Profile