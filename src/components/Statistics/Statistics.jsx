import css from './Statistics.module.css'
import{getRandomHexColor} from '../GetRandomColor.js'

export const  Statistics = ({ stats}) => {
  return (
  
    <ul className={css['stat-list']}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  
  );
};
