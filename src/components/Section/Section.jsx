import css from './Section.module.css'
export const Section = ({ title, section, children }) => {
  return (
    <section className={section}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};
