import Profile from './Profile'
import profiles from '../../data/berlin.json'

function FaceBook()
{
    return (
        <div>
            {profiles.map(profile => <Profile key={profile.img} profile={profile} />)}
        </div>
    )
}

export default FaceBook