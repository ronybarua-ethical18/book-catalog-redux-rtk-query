import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {  useSignupMutation } from '@/redux/features/user/userApi';
import { setUser } from '@/redux/features/user/userSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [signup, { data: user, isSuccess }] = useSignupMutation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch=useDispatch()

  useEffect(() => {
    
    if (user && isSuccess) {
      navigate('/login');
    }
    
  }, [user, dispatch, isSuccess, navigate]);
  


  return (
    <div className="w-1/3  m-auto mt-40 flex flex-col items-center justify-center p-4 shadow-md ">
      <h1 className="text-3xl font-bold mb-10">Sign up Form</h1>
      <div className="w-full ">
      <Input
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
          className="mb-5"
        />
        <Input
          placeholder="Last name"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          className="mb-5"
        />
        <Input
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="mb-5"
        />
        <Input
          placeholder="Enter password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="mb-10"
        />
       
      </div>
      <Button
        onClick={() =>
          signup({
            data: { email: email, password: password, name:{firstName, lastName} },
          }).unwrap()
          .then((payload) => toast.success(payload.message))
          .catch((error) => toast.error(error.data.message))
        }
      >
        Signup
      </Button>
    </div>
  );
}
