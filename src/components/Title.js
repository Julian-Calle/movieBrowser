import { Link } from 'react-router-dom';
import './Title.css';
function Title() {
  return (
    <nav>
      <div className="header-item">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Title;
