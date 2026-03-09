import { useState } from 'react'
import './Profile.css'

function Profile({ profile, isClicked, setClicked })
{
    return (<>
        <div className="profile-frame">
            <div className="profile-image">
                <img src={profile.img} alt={'Profile picture'} onClick={() => setClicked(profile.img)} />
            </div>

            <div className="profile-info" style={{ display: isClicked ? 'flex' : 'none', flexDirection: 'column', gap: '0.25rem' }}>

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
    </>)
}

export default Profile