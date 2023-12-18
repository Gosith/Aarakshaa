import React from 'react'

function sidebar() {
    return (
        <div className='sidebar'>
            <div className='user-role'> 
                {/* me thiyenne rathu kotuwa */}
                <div className='user-pp'>
                    <img src="" alt="" />
                </div>
                <span className='username'></span>

            </div>

            <div className='nav-pane'>
            {/* me thiyenne duburu kotuwa */}
                <ul className='nav-list'>
                    {MenuItems.map(key,index)=>{
                        return(
                            <li className=''> </li>
                        )
                    }}

                </ul>
            </div>

        </div>
    )
}

export default sidebar

.sidebar{
    display: flex;
    flex-direction: column;
}