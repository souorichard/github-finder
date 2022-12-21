import "./User.scss";

import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

import { UserProps } from "../types/user";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className='user'>
      <img src={avatar_url} alt='{login}' />
      <h2>{login}</h2>
      {location && (
        <p className='location'>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className='stats'>
        <div>
          <p>Seguidores:</p>
          <p className='number'>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className='number'>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver Melhores Projetos</Link>
    </div>
  );
};

export default User;
