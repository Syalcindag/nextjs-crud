'use client'
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import {validationRules} from './valdationRules'

function Contact() {
    const {register, handleSubmit, formState: { errors }, trigger } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
  return (
    <div className='container d-flex justify-content-center align-item-center'>
        <div className={styles.contactFormContainer}>
            <h1 className={styles.header}>Contact</h1>
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <input type="text" id="nameSurname"
                        {...register("nameSurname", validationRules.nameSurname)} 
                        onBlur={() => trigger("nameSurname")}
                    />
                    {errors.nameSurname && <span>{errors.nameSurname.message}</span>}
                    <label htmlFor="nameSurname">Name-Surname</label>
                </div>
                <div className={styles.formGroup}>
                    <input type="email" id="email"
                        {...register("email", validationRules.email)}
                        onBlur={() => trigger("email")}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <label htmlFor="email">Email</label>
                </div>
                <div className={styles.formGroup}>
                    <textarea id="description"
                        {...register("description", validationRules.description)}
                        onBlur={() => trigger("description")}
                    ></textarea>
                    {errors.description && <span>{errors.description.message}</span>}
                    <label htmlFor="description">Description</label>
                </div>
                <button className={styles.submitButton} type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact