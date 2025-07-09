import { ITodayWeather } from '@/shared/types/types';
import Image from 'next/image';
import s from '../Cards.module.css';
export const Visibility = ({ data }: { data: ITodayWeather }) => {
  const visibility = (data.visibility / 1000).toFixed(0);
  return (
    <div className={s.overviewCard}>
      <p>Visibility</p>
      <div className={s.visibilityImg}>
        <Image
          src={Number(visibility) < 5 ? '/bad-visibility.svg' : 'good-visibility.svg'}
          alt="visibility"
          width={90}
          height={90}
        />
      </div>
      <div className={s.visibilityValues}>
        <p>
          <b>{visibility}</b> km
        </p>
        <div className={s.visibilityText}>
          <Image src="/eye-outline.svg" alt="eye" width={24} height={24} />
          <p>Haze is affecting visibility</p>
        </div>
      </div>
    </div>
  );
};
