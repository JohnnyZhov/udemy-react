import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>AllMeetups</Link>
            </li>
            <li>
              <Link to='/new-meetup'>New meetup</Link>
            </li>
            <li>
              <Link to='/favourites'>Favourites</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default MainNavigation;
