import "./FlipCard.css"

const FlipCard = () => {
    const makerspaceimg =
        "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1705742765/i_cell_4rth_year/makerspace/c7uhwyswmb2jnsbjvxor.webp";
    return (
        <div className="flip-card-container">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front maker__img">
                        <img src={makerspaceimg} alt="MakerSpace images" />
                    </div>
                    <div className="flip-card-back">
                        <div className=" maker__about_content">
                            <div>
                                <h2>About Our Makerspace</h2>
                                <div className="Arrow"></div>
                            </div>
                            <p>
                                Welcome to NIT Raipur's Makerspace, a vibrant hub where innovation thrives and cutting-edge technology.
                                Explore a playground designed to empower inventors, entrepreneurs, and curious minds, providing the
                                tools to turn ideas into reality.
                            </p>
                            <p>
                                Our collaborative environment fosters interdisciplinary teamwork, uniting engineers, designers, and
                                makers. The Makerspace is more than a physical space; it's a community dedicated to exploration,
                                learning, and pushing the boundaries of what's possible. Join us on a journey of discovery and let the
                                Makerspace launch your next big idea!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard

