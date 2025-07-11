import s from './ExploreWind.module.css';
export const ExploreWind = () => {
  return (
    <section className={s.exploreWind}>
      <div className={s.exploreWindTitle}>
        <h4>Explore global map of wind weather and ocean condition </h4>
      </div>
      <button>GET STARTED</button>
    </section>
  );
};
