
// import React, { useState } from 'react';
// // import './App.css'; // Ensure you have the CSS file imported

// function LoginForm() {
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const handlePasswordChange = (e) => {
//         const newPassword = e.target.value;
//         setPassword(newPassword);

//         // Check if the password contains only uppercase letters
//         const isValid = /^[A-Z]*$/.test(newPassword);
//         if (newPassword && !isValid) {
//             setMessage('Wrong password. Only uppercase letters are allowed.');
//         } else {
//             setMessage('');
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add further form submission logic here if necessary
//     };


//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//     return (
//         <div className="contaioner">
//             <div className="login-form">
//                 <form onSubmit={handleSubmit}>
//                     <h2>Login</h2>
//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input type="text" id="username" name="username" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                             required />
//                     </div>
//                     {message && <p className="error-message">{message}</p>}
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default LoginForm;




import React, { useState } from 'react';
// import '../styles.css'; // Ensure the correct path to your CSS file

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check if the password contains only uppercase letters
    const isValid = /^[A-Z]*$/.test(newPassword);
    if (newPassword && !isValid) {
      setMessage('Wrong password. Only uppercase letters are allowed.');
    } else {
      setMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add further form submission logic here if necessary
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
    <div className={`login-form ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="dark-mode-toggle">
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {message && <p className="error-message">{message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>

    </div>
  );
};

export default LoginForm;

