import user from '../../assets/user.json'

export default function UserCard()
{
  return (<>
    <div className="user-card">
      <div className='user-card-header'>
        <img src={user.image} />

        <h2 className='user-name'>
          {user.name}
        </h2>
      </div>

      <div className="user-info">
        Age : {user.age} | {user.position}
      </div>
    </div>
  </>)
}
