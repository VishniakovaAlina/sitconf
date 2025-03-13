import Image from 'next/image';
import { MainLayout } from 'src/layouts/Main';

import MainImage from '@public/img/main_image.png';

import { Button } from '@/components/Button/Button';
import { Conference } from '@/components/Conference/Conference';
import { ContentContainer } from '@/components/ContentContainer/ContentContainer';
import { meta } from '@/constants/meta';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const { title, description } = meta.home;

  return (
    <MainLayout title={title} description={description} className={styles.root}>
      <ContentContainer className={styles.container}>
        <div className={styles.title}>
          <div>
            <h4>26 октября</h4>
            <h4>Коворкинг YellowRockets</h4>
          </div>
        </div>
        <div className={styles.content}>
          <h1>
            IT конференция
            <br /> для лучших людей
          </h1>
          <p>
            IT-конференция в Самаре, созданная сообществом SITC. Она посвящена актуальным темам и трендам в IT-индустрии и служит местом
            встречи для обмена опытом с единомышленниками и установления профессиональных контактов
          </p>
        </div>
        <Image src={MainImage} alt="sitconf" />
      </ContentContainer>
      <ContentContainer>
        <div className={styles.conferences}>
          <div className={styles.blue_line}>
            <h4>Предстоящие конференции</h4>
          </div>
          <div className={styles.conferences_container}>
            <Conference
              name="Management"
              date="26 октября"
              place="Коворкинг Yellow Rockets"
              description="SITConf Management - это конференция для руководителей, тимлидов и тех, кто стремится ими стать. Здесь вы сможете обменяться
              опытом с коллегами и познакомиться с крутанами"
              link="#"
            />
            <Conference
              name="QA"
              date="26 октября"
              place="Коворкинг Yellow Rockets"
              description="SITConf QA - это конференция QA-инженеров, автотестеров и всех, кто стремится глубже погрузиться в мир качества. Здесь вы
              можете обменяться опытом с коллегами"
              link="#"
            />
          </div>
          <div className={styles.blue_line} />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.conferences}>
          <div className={styles.blue_line}>
            <h4>Прошедшие конференции</h4>
          </div>
          <div className={styles.conferences_container}>
            <Conference
              name="Management"
              date="26 октября"
              place="Коворкинг Yellow Rockets"
              description="SITConf Management - это конференция для руководителей, тимлидов и тех, кто стремится ими стать. Здесь вы сможете обменяться
              опытом с коллегами и познакомиться с крутанами"
              link="#"
            />
            <Conference
              name="QA"
              date="26 октября"
              place="Коворкинг Yellow Rockets"
              description="SITConf QA - это конференция QA-инженеров, автотестеров и всех, кто стремится глубже погрузиться в мир качества. Здесь вы
              можете обменяться опытом с коллегами"
              link="#"
            />
          </div>
          <div className={styles.blue_line} />
        </div>
      </ContentContainer>
      <ContentContainer>
        <Button>хочу быть спикером</Button>
      </ContentContainer>
    </MainLayout>
  );
};

export default HomePage;
