import { Link } from 'react-router-dom';

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
