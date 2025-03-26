import ShowMoreSVG from '@public/img/show_more.svg';

import styles from './Conference.module.scss';

interface IConferenceProps {
  name?: string;
  date?: string;
  place?: string;
  description?: string;
  link?: string;
}

export const Conference = (props: IConferenceProps) => {
  return (
    <div className={styles.conference}>
      <h1>
        <p>SITConf</p>
        <p>{props.name}</p>
      </h1>
      <div className={styles.info}>
        <div>{props.date}</div>
        <div>{props.place}</div>
      </div>
      <p>{props.description}</p>
      <a type="button" href={props.link} target="_blank" rel="noreferrer">
        <ShowMoreSVG />
        Подробнее
      </a>
    </div>
  );
};
