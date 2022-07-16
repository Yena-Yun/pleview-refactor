import Link from 'next/link';

export const Sidebar = () => {
  return (
    <div className='bg-slate-800 px-14 py-10'>
      <div className='flex flex-col justify-center items-center mb-14 cursor-pointer'>
        <Link href='/'>
          <img src='/images/logo.png' alt='logo' />
        </Link>
        <Link href='/'>
          <h1 className='text-3xl  text-white font-bold font-serif mt-4'>
            Pleview
          </h1>
        </Link>
      </div>
      <ul>
        <li className='mb-14 font-medium text-2xl text-white'>
          <Link href='/'>홈</Link>
        </li>
        <li className='mb-14 font-medium text-2xl text-white'>
          <Link href='/createReview'>질문 등록하기</Link>
        </li>
        <li className='mb-14 font-medium text-2xl  text-white'>
          <Link href='/honor'>명예의 전당</Link>
        </li>
        <li className='mb-14 font-medium text-2xl  text-white'>
          <Link href='/guide'>가이드</Link>
        </li>
      </ul>
    </div>
  );
};
