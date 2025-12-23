import firstMeet from '../../assets/first-meet.jpg'

const firsts_p1 = () => {
    return (
        <div className="container">
            <div className="container-entry">
                <p className="entry">First met at March 23, 2025(Joana's Place)</p>
                <p className="entry">Became FB friends on June 28, 2025</p>
                <p className="entry">First chat on July 17, 2025</p>
                <p className="entry">First date appointment on July 17, 2025</p>
                <img src={firstMeet} className="entry-img" />
            </div>
        </div>
    );
};

export default firsts_p1;