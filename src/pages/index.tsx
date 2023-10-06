import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useCountStore } from '@/store/useCountStore';
import { useStore } from 'zustand';

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ countA }) => {
  console.log('🚀 ~ file: index.tsx:15 ~ countA:', countA);
  const { t } = useTranslation('common');
  const { count, increment, decrement } = useCountStore(state => state);

  return (
    <div>
      <h1>{t('home')}</h1>

      <div> {count}</div>
      <button
        onClick={() => increment(1)}
        className="mr-3 border bg-violet-200 p-2 md:mr-4"
      >
        increment
      </button>
      <button
        className="mr-3 border bg-violet-200 p-2"
        onClick={() => decrement(1)}
      >
        decrement
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
  req,
}) => {
  const i18n = await serverSideTranslations(locale ?? 'jp', ['common']);

  return {
    props: {
      ...i18n,
    },
  };
};

export default Home;
