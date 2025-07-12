import Link from 'next/link';
import s from './TodayOverviewsHeader.module.css';
export const TodayOverviewsHeader = () => {
  return (
    <div className={s.todayHeader}>
      <p className={s.headerTitle}>Todays Overview</p>
      <div className={s.otherCities}>
        <p className={s.otherText}>Other Cities</p>
        <Link href="/">See All</Link>
      </div>
    </div>
  );
};
