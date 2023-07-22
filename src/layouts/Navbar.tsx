import { Link } from 'react-router-dom';

import { HiOutlineSearch } from 'react-icons/hi';
// import Cart from '../components/Cart';
import logo from '../assets/images/technet-logo.png';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { setUser } from '@/redux/features/user/userSlice';
import { Input } from '@/components/ui/input';
import { setSearchTerm } from '@/redux/features/books/bookSlice';
// import { signOut } from 'firebase/auth';
// import { auth } from '@/lib/firebase';
// import { setUser } from '@/redux/features/user/userSlice';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

const handleSearch = (e:any) =>{
  console.log(e.target.value)
  dispatch(setSearchTerm(e.target.value))
}

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <h2 className="font-bold text-3xl">Book Store</h2>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              {user ? (
                <>
                  <li>
                    <Button
                      variant="link"
                      asChild
                      onClick={() => dispatch(setUser(null))}
                    >
                      <Link to="/login">Logout</Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      asChild
                      // onClick={() => dispatch(setUser(null))}
                    >
                      <Link to="/wishlist">Wishlist</Link>
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/signup">Signup</Link>
                    </Button>
                  </li>
                </>
              )}

              <li>
                 <Input placeholder='Search book' onChange={handleSearch}/>
              </li>
              <li>{/* <Cart /> */}</li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    {/* <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar> */}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    {/* {!user.email && ( */}
                    <>
                      <Link to="/login">
                        <DropdownMenuItem className="cursor-pointer">
                          Login
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/signup">
                        <DropdownMenuItem className="cursor-pointer">
                          Sign up
                        </DropdownMenuItem>
                      </Link>
                    </>
                    {/* )} */}
                    {/* {user.email && ( */}
                    <DropdownMenuItem
                      className="cursor-pointer"
                    >
                      Logout
                    </DropdownMenuItem>
                    {/* )} */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
