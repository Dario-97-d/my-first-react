import './Profile.css'

function Profile({ profile })
{
    return (
        
        <div className="profile-frame">
            <div className="profile-image">
                <img src={profile.img} alt={'Profile picture'} />
            </div>

            <div className="profile-info">
                
                <div className="profile-first-name">
                    <span><b>First name:</b> {profile.firstName}</span>
                </div>

                <div className="profile-last-name">
                    <span><b>Last name:</b> {profile.lastName}</span>
                </div>

                <div className="profile-country">
                    <span><b>Country:</b> {profile.country}</span>
                </div>

                <div className="profile-type">
                    <span><b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}</span>
                </div>
                
            </div>
        </div>
    )
}

export default Profile