import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/redux/features/user/userApi';
import { setUser } from '@/redux/features/user/userSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [login, { data: user, isSuccess }] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log('user', user);

  useEffect(() => {
    if (user && isSuccess) {
      // toast.
      dispatch(setUser(user?.data));
      navigate('/books');
    }
  }, [user, dispatch, isSuccess, navigate]);

  return (
    <div className="w-1/3  m-auto mt-40 flex flex-col items-center justify-center p-4 shadow-md ">
      <h1 className="text-3xl font-bold mb-10">Login Form</h1>
      <div className="w-full ">
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
          login({
            data: { email: email, password: password },
          }).unwrap()
          .then(() => toast.success("Login successful"))
          .catch((error:any) => toast.error(error.data.message))
          
        }
      >
        Login
      </Button>
    </div>
  );
}
