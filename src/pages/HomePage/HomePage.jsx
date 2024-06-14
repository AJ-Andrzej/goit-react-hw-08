import css from './HomePage.module.css';
export default function HomePage() {
  return (
    <h1 className={css.title}>
      Welcom to phonebook app{' '}
      <span role="img" aria-label="Greeting icon">
        📱
      </span>
    </h1>
  );
}
