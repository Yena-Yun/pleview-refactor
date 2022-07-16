import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from 'components/Card';
import { CATEGORIES, SKILLS } from 'utils/constants';
import { PostType } from 'utils/types/card';
import { IFilter } from 'utils/types/post';

const Home: NextPage = () => {
  const [categoryActiveIdx, setCategoryActiveIdx] = useState(0);
  const [cardData, setCardData] = useState<PostType[]>([]);
  const [cardFilter, setCardFilter] = useState<IFilter>({
    skill: undefined,
    category: '전체',
  });

  //  useEffect(() => {
  //    (async () => {
  //      const fetchedCardData = await fbService.getPosts();
  //      setCardData(fetchedCardData);
  //    })();
  //  }, []);

  const handleClickCategory = (idx: number, category: string) => {
    setCategoryActiveIdx(idx);
    setCardFilter({ ...cardFilter, category });
  };

  const handleFilter = (skill: string) => {
    setCardFilter({ ...cardFilter, skill });
  };

  const filteredData = () => {
    return cardData
      .filter((data) => {
        if (!cardFilter.category || cardFilter.category === '전체') return true;
        return data.category === cardFilter.category;
      })
      .filter((data) => {
        if (!cardFilter.skill || cardFilter.skill === '전체') return true;
        return data.tags.includes(cardFilter.skill);
      });
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-600'>
      <Head>
        <title>Pleview: Please Review My Code</title>
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <div className='w-full h-full flex flex-col'>
        <div className='flex relative mb-5 py-6'>
          {CATEGORIES.map((category, idx) => (
            <li
              className={`flex min-w-fit py-5 text-xl font-semibold ${
                categoryActiveIdx === idx ? 'text-gray-600' : 'text-gray-400'
              }`}
              key={`${idx}_${category}`}
              onClick={() => {
                handleClickCategory(idx, category);
              }}
            >
              {category}
            </li>
          ))}
        </div>
        <ul className='flex mb-16'>
          {SKILLS.map((skill, idx) => (
            <li
              className='flex justify-center items-center px-5 py-3 mr-3 w-24 font-semibold border-gray-500 cursor-pointer hover:border-gray-800 hover:border-2 last:mr-0'
              key={`${idx}_${skill}`}
              onClick={() => handleFilter(skill)}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-wrap gap-6'>
        {filteredData().map((card) => {
          return (
            <Link key={card.id} href={'/detail/' + card.id}>
              <Card card={card} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
