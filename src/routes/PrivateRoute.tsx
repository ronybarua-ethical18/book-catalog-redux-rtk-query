import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  console.log("private route", user)



  if (user === null) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
