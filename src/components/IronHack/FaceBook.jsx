import Profile from './Profile'
import profiles from '../../data/berlin.json'
import { useState } from 'react'

// Get distinct countries.
const countries = profiles
    .map(p => p.country)
    .filter((value, index, array) => {
        return array.indexOf(value) === index
    })

const spanButtonStyle = {
    border: '0.1rem solid black',
    padding: '0.25rem 0.5rem',
    cursor: 'pointer',
    color: 'black',
}

function FaceBook()
{
    const [selectedCountry, setSelectedCountry] = useState('All')
    const [clickedProfile, setClickedProfile] = useState('')

    const setClicked = (profileImg) => {
      setClickedProfile(clickedProfile === profileImg ? '' : profileImg)
    }

    return (<>

        <div style={{ backgroundColor: 'whitesmoke', padding: '1rem 0', maxWidth: '40rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center', gap: '0.5rem', padding: '1rem' }}>
                <span style={selectedCountry !== 'All' ? spanButtonStyle : {...spanButtonStyle, backgroundColor: '#5fbfdf'}} onClick={() => setSelectedCountry('All')}>All</span>

                {countries.map(c => <span key={c} style={c !== selectedCountry ? spanButtonStyle : {...spanButtonStyle, backgroundColor: '#5fbfdf'}} onClick={() => setSelectedCountry(c)}>{c}</span>)}
            </div>
            
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', gap: '0.5rem' }}>
                {profiles
                .filter(profile => selectedCountry === 'All' || profile.country === selectedCountry)
                .map(profile => <Profile key={profile.img} profile={profile} isClicked={clickedProfile === profile.img} setClicked={setClicked}  />)}
            </div>
        </div>

    </>)
}

export default FaceBook