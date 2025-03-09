import { MainLayout } from 'src/layouts/Main';

import { meta } from '@/constants/meta';

const HomePage = () => {
  const { title, description } = meta.home;

  return <MainLayout title={title} description={description} />;
};

export default HomePage;
