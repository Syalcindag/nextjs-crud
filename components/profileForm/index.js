'use client'
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';

export const ProfileForm = ({validationRules, existingData, onSubmit}) => {
    const { register, handleSubmit, formState: { errors }, trigger} = useForm({
        defaultValues: existingData
    });

    return (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text"
                    {...register("name", validationRules.name)} 
                    onBlur={() => trigger("name")}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nameSurname?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register("surname", validationRules.surname)} 
                    onBlur={() => trigger("surname")}
                    isInvalid={!!errors.surname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.surname?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                {...register("email", validationRules.email)} 
                onBlur={() => trigger("email")}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
    
           
    
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
      );
}
