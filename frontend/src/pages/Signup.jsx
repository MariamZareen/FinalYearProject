import React, { useState } from 'react';
import logo from '../img/clogo.webp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const departments = {
  CSE: 'CS',
  ISE: 'IS',
  ECE: 'EC',
  EEE: 'EE',
  MECH: 'ME',
  AIDS: 'AD',
  AIML: 'AM',
  CIVIL: 'CV',
};

export default function Signup() {
  const { loginHandler } = useAuth();
  const [err, setError] = useState('');
  const [fullname, setName] = useState('');
  const [passout, setPassout] = useState('');
  const [username, setUsername] = useState('');
  const [dept, setDept] = useState('');
  const [password, setPassword] = useState('');
  const [isStrong, setIsStrong] = useState(false);
  const [usnError, setUsnError] = useState('');
  const navigate = useNavigate();

  const validateUSN = (value) => {
    if (!dept || !passout) {
      setUsnError('Please select department and passout year first.');
      return;
    }
  
    // Convert passout year to number
    const passoutYear = parseInt(passout, 10);
    
    // Ensure passout year is a valid number and within limits
    if (isNaN(passoutYear) || passoutYear < 2004 ) {
      setUsnError('Invalid passout year. It should be 2004 or later.');
      return;
    }

    if(passoutYear > 2028){
      setUsnError('Invalid passout year. It should be 2028 or earlier.');
      return;
    }
  
    // Calculate valid join years (passout - 4 and passout - 3)
    const joinYearOptions = [passoutYear - 4, passoutYear - 3].filter(year => year >= 2004);
  
    if (joinYearOptions.length === 0) {
      setUsnError('Invalid passout year. Joining year should be 2004 or later.');
      return;
    }
  
    // Generate expected USN prefixes
    const expectedPrefixes = joinYearOptions.map(year => `1NT${year.toString().slice(-2)}${departments[dept]}`);
    const usnRegex = new RegExp(`^(${expectedPrefixes.join('|')})\\d{3}$`);
  
    // Validate input against USN format
    if (!usnRegex.test(value)) {
      setUsnError(`Invalid USN. Expected format: ${expectedPrefixes[0]}XXX or ${expectedPrefixes[1]}XXX (e.g., ${expectedPrefixes[0]}102).`);
    } else {
      setUsnError('');
    }
  
    setUsername(value);
  };
  
  const checkPasswordStrength = (pwd) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(pwd);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setIsStrong(checkPasswordStrength(pwd));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!dept || !passout || !fullname || !username || !password) {
      setError('All fields are required.');
    } else if (usnError.length === 0 && isStrong) {
      const data = { dept, passout, fullname, username, password };
      axios
        .post('http://localhost:5000/signup', data)
        .then(() => {
          loginHandler(username);
          navigate('/app/home');
        })
        .catch((error) => {
          setError(error.response.data);
        });
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='h-[650px] w-[400px] flex flex-col items-center'>
        <div className='text-red-500 my-2'>{err}</div>
        <div className='flex items-center flex-col w-[100%] justify-around h-[100%] border-slate-400 border-2 p-5 bg-slate-200'>
          <img src={logo} alt='logo' className='h-[80px]' />
          <form className='flex flex-col w-[90%]'>
            <select className='m-3 p-2 w-[100%]' value={dept} onChange={(e) => setDept(e.target.value)} required>
              <option value='' disabled>Select Department</option>
              {Object.keys(departments).map((dep) => (
                <option key={dep} value={dep}>{dep}</option>
              ))}
            </select>
            <input
              type='text'
              placeholder='Passout Year'
              className='m-3 p-2 w-[100%]'
              onChange={(e) => setPassout(e.target.value)}
              required
            />
            <input
              type='text'
              placeholder='Full name'
              className='m-3 p-2 w-[100%]'
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div>
              <input
                type='text'
                placeholder='USN'
                className='m-3 p-2 w-[100%]'
                value={username}
                onChange={(e) => validateUSN(e.target.value)}
                required
              />
              {usnError && <p className='text-red-500'>{usnError}</p>}
            </div>
            <input
              type='password'
              placeholder='Password'
              className='m-3 p-2 w-[100%] border rounded'
              onChange={handlePasswordChange}
              required
            />
            {!isStrong && password.length > 0 && (
              <p className="text-red-500 text-sm">Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.</p>
            )}
            <input
              type='submit'
              className={`text-white bg-blue-500 rounded m-3 w-[100%] h-[40px] cursor-pointer ${isStrong ? '' : 'opacity-50 cursor-not-allowed'}`}
              value='Sign up'
              onClick={handleClick}
              disabled={!isStrong}
            />
          </form>
        </div>
        <div className='h-[15%] bg-slate-200 border-slate-400 border-2 text-center mt-3 w-full flex justify-center items-center'>
          <p>
            Already have an account? <Link to='/' className='text-blue-500 font-semibold'>SignIn</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
