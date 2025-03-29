import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='hContainer'>
        <h4 className='hTitle'>Account Setting</h4>
        <div className="userBox">
            <div className="top">
                <div className="left">
                <img src="https://th.bing.com/th/id/OIP.a9F_vLc0iE28S8HJwrLyIAAAAA?rs=1&pid=ImgDetMain" alt="" />
                </div>
                <div className="right">
                    <p className="title">Marry Doe</p>
                    <p className="gmail">marry@gamil.com</p>
                </div>
            </div>
            <div className="bottom">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas et earum debitis, corrupti reiciendis ab atque dicta, quasi quae quaerat vel quidem repellat? Nisi esse ad animi, impedit quod soluta!</p>
            </div>
        </div>
    </div>
  )
}

export default Home