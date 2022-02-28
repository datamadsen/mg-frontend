import { Link, useLocation } from 'react-router-dom'

function MenuItem(props) {
  const location = useLocation();
  const active = props.path === location.pathname;

  if (active)
    return ActiveMenuItem(props);

  return (
    <span className="p-1 mr-2 bg-purple-100 border cursor-pointer rounded-md hover:bg-green-100 hover:border-green-400" >
      <Link to={props.path}>
        {props.title}
      </Link>
    </span>
  )
}

function ActiveMenuItem(props) {
  return (
    <span className="p-1 mr-2 bg-green-100 border border-green-400 shadow-lg cursor-pointer rounded-md" >
      {props.title}
    </span>
  )
}

export default MenuItem;

