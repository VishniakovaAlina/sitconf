import { ContentContainer } from '@/components/ContentContainer/ContentContainer';
import { MainLayout } from '@/layouts/Main/MainLayout';
import { Routes } from '@/Routes';

export const links = [
  {
    route: Routes.home,
    label: 'Homepage',
  },
];

const NotFound = () => {
  return (
    <MainLayout title="Not Found" description="Not Found">
      <ContentContainer>
        <h1>:( Page not found</h1>
      </ContentContainer>
    </MainLayout>
  );
};

export default NotFound;
