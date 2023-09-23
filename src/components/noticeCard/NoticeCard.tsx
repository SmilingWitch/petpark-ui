import "./NoticeCard.css"


function NoticeCard() {
    return (
        <div className="nCard">
            <div className="imgBx">
                <img src="/1.jpeg" alt="" />
            </div>
            <div className="descript">
                <div className="phone">
                    Telefono:
                </div>
                <div className="dir">
                    Direccion:
                </div>
                <div className="det">
                    Detalles: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium labore laudantium eos voluptatibus aperiam error ad provident accusamus et placeat ipsam, quas, dolores possimus qui! Pariatur eveniet accusantium saepe.
                </div>
            </div>
        </div>
    );
}

export default NoticeCard ;