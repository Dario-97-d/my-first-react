import user from '../../assets/user.json'

const UserCard = () => {

    return (
        <>
        
        <div className="user-card">

            <div className='user-card-header'>

            <img src={user.image} />

            <h1 className='user-name'>
                {user.name}
            </h1>

            </div>

            <div className="user-info">
            Age : {user.age} | {user.position}
            </div>

        </div>

        </>
    )
}

export default UserCard