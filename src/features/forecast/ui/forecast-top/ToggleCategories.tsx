import s from './ForecastTop.module.css';
export const ToggleCategories = ({
  setCategory,
  category,
}: {
  setCategory: (item: string) => void;
  category: string;
}) => {
  const dateForecast = ['Today', 'Tomorrow', 'Next 4 days'];
  return (
    <ul className={s.forecastCategories}>
      {dateForecast.map((item) => (
        <li key={item}>
          <button
            key={item}
            style={{ color: category === item ? '#fff' : '#818085' }}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
