import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db, serverTimestamp } from './firebase'; 

function SendMail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      await db.collection('emails').add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp:  serverTimestamp(),
      });
      dispatch(closeSendMessage());

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className='sendMail'>
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail__close'
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          {...register("to", { required: true })}
          type="email"
          placeholder='To'
        />
        {errors.to && <p className='sendMail__error'>To field is required</p>}

        <input
          {...register("subject", { required: true })}
          type="text"
          placeholder='Subject'
        />
        {errors.subject && <p className='sendMail__error'>Subject field is required</p>}

        <input 
          {...register("message", { required: true })}
          type="text"
          placeholder='Message...'
          className='sendMail__message'
        />
        {errors.message && <p className='sendMail__error'>Message field is required</p>}

        <div className='sendMail__options'>
          <Button  type="submit" className='sendMail__send'>Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
