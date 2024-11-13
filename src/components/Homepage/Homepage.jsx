import { homePage } from '../../data/home';
import aboutImage from '../../images/about-3.png';
import css from './Homepage.module.css';

const Homepage = () => {
  const { position, description } = homePage;
  return (
    <div className={css.homeContainer}>
      <img className={css.homeImage} src={aboutImage} />
      <div>
        <h2 className={css.position}>{position}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Homepage;
