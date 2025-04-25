import './IdCard.css'

function IdCard(props)
{
    return (
        
        <div className="idcard-frame">
            <div className="idcard-image">
                <img src={props.picture} />
            </div>

            <div className="idcard-info">
                
                <div className="idcard-first-name">
                    <span><b>First name:</b> {props.firstName}</span>
                </div>

                <div className="idcard-last-name">
                    <span><b>Last name:</b> {props.lastName}</span>
                </div>

                <div className="idcard-gender">
                    <span><b>Gender:</b> {props.gender}</span>
                </div>

                <div className="idcard-height">
                    <span><b>Height:</b> {props.height / 100}m</span>
                </div>

                <div className="idcard-birth">
                    <span><b>Birth:</b> {props.birth.toDateString()}</span>
                </div>
                
            </div>
        </div>
    )
}

export default IdCard