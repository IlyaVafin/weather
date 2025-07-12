import { Forecast } from '@/features/forecast/Forecast';
import Header from '@/widgets/header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Forecast />
    </>
  );
}
