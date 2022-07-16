import { PostType } from 'utils/types/card';

export const Card = (props: { card: PostType }) => {
  const { title, authorInfo, tags, editDate, category } = props.card;

  // const formatDate = () => {
  //   return editDate.toDate().toLocaleDateString('ko-KR');
  // };

  return (
    <div className='flex flex-col w-80 max-w-xs h-96 px-8 py-10 border rounded-lg bg-white'>
      <p className='text-sm mb-4'>{/* {category} */}</p>
      <h2 className='h-8 text-xl mb-9'>{/* {title} */}</h2>
      <div className='flex my-6 mr-3'>
        {/* {tags.map((tag) => (
          <span className='text-sm'>#{tag}</span>
        ))} */}
      </div>
      <p className='text-gray-500 mb-6'>{/* {formatDate()} */}</p>
      <div className='border-t mb-6' />
      <div className='flex justify-between'>
        <div className='flex'>
          <p className='text-xs'>{/* {authorInfo?.displayName} */}</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-xs mb-3'>💙</p>
          <p className='text-xs'>💬</p>
        </div>
      </div>
    </div>
  );
};
