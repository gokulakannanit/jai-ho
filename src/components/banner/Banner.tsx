import './Banner.css';

const bannerImage = 'https://imgeng.jagran.com/images/2023/jan/pongalgames1673683813761.jpg';

const Banner = () => {
    return <div className="banner">
        <img src={bannerImage} />
        <div className='cover'>
            <div className='cover_details'>
                <h2>Pongal Celebration</h2>
                <p>Pongal celebration and food festival in 795 Pine St, New York, NY 10005, USA Parking, New York, NY, USA.</p>
                <button className='primary'>BOOK NOW</button>
            </div>
        </div>
    </div>
}

export default Banner;