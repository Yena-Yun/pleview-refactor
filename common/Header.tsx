// import styled from 'styled-components';
// import { signInWithPopup, signOut } from 'firebase/auth';
// import { auth, AuthContext, githubProvider } from '../../utils/firebase';
// import { useContext, useState } from 'react';
// import { FlexBox } from 'styles/theme';

export const Header = () => {
  // const user = useContext(AuthContext);
  // const [active, setActive] = useState(false);

  // const toggleMenu = () => {
  //   setActive(!active);
  // };

  // const handleLoginButtonClick = async () => {
  //   const result = await signInWithPopup(auth, githubProvider);
  // };

  // const logout = async () => {
  //   await signOut(auth);
  // };

  return (
    <div className='flex w-full max-h-32 p-5 justify-end'>
      {/* {user && ( */}
      <div className='relative cursor-pointer'>
        <img
          className='rounded-full w-20'
          src='/images/iu.png'
          alt='profile-image'
        />
        <ul className='border bg-white text-center'>
          <li className='border-b p-4'>
            <a>마이페이지</a>
          </li>
          <li className='p-4'>
            <a>로그아웃</a>
          </li>
        </ul>
      </div>
      {/* )} */}
      {/* {!user && ( */}
      {/* <button className='p-3 border rounded-sm bg-white'>로그인</button> */}
      {/* )} */}
    </div>
  );
};

// const Container = styled(FlexBox)`
//   flex-grow: 1;
//   height: 5vh;
//   justify-content: right;
//   align-items: flex-end;
// `;

// const LoginButton = styled.button`
//   padding: 10px 20px;
//   background: #fff;
//   border: 1px solid #dedede;
//   cursor: pointer;
// `;

// const LoggedIn = styled.div<{ active: boolean }>`
//   position: relative;
//   cursor: pointer;

//   > ul {
//     position: absolute;
//     display: ${(props) => (props.active ? 'block' : 'none')};
//     min-width: 200px;
//     z-index: 20;
//     background: #fff;
//     border: 1px solid #dedede;
//     top: 100%;
//     margin-top: 1rem;
//     right: 0;

//     a {
//       display: block;
//       padding: 0.75rem 1rem;
//       line-height: 1.5;
//       font-weight: 500;
//       text-decoration: none;
//       color: #333;
//       font-size: 0.9rem;
//     }

//     a:hover {
//       background: #f7f7f7;
//     }
//   }
// `;

// const ProfileImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
// `;
