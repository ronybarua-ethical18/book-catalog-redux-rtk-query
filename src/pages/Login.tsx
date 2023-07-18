import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useLoginMutation } from '@/redux/features/user/userApi';
import { setUser } from '@/redux/features/user/userSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [login, { data: User, isSuccess }] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (User && isSuccess) {
      // toast.
      setUser(User);
      navigate('/books');
    }
  }, [User, isSuccess, navigate]);

  console.log('email, password', email, password);

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
          })
        }
      >
        Login
      </Button>
    </div>
  );
}
