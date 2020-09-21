import React from 'react';
import './styles.scss';

const AboutMe = () => {
    return (
        <div className="intro">
            <h1 className="intro__title">About me</h1>
            <div className="intro__body">
                <img className="border-item" src="https://res.cloudinary.com/restaff/image/upload/v1599368841/avatar/avatar_xas6er.jpg" />
                {/* <div className="intro__content">
                    <p>Hello, mình là Lê Duy Quân, hiện đang là FE Developer.</p>
                    <p>
                        Lúc mới bắt đầu ra trường, mình khá bối rối trong việc định
                        hướng tương lai bản thân về vị trí develop, cần phải học những
                        technical nào cho phù hợp, những concept nào quan trọng,... nhưng
                        không có nơi nào tổng hợp.
                    </p>
                    <p>
                        Blog này là nơi mình chia sẻ những kiến thức từ cơ bản đến nâng
                        cao trong vị trí FE developer.
                    </p>
                    <p>Hi vọng các bạn sẽ tiến bộ và đi nhanh hơn khi có những kiến thức
                    trong Blog này.
                    </p>
                    <p>
                        <a href="https://toidicodedao.com/about/">Đọc thêm!</a>
                    </p>
                </div> */}
                <div className="intro__content">
                    <p>Kháng các đòn tâm linh: Giáo sư X đã đặt vào trong đầu anh lá chắn tâm linh, các đòn tâm linh rất khó ảnh hưởng được anh</p>
                    <p>
                        Kĩ năng chiến đấu: Level Max, phong cách của anh ko bao giờ chịu làm theo kế hoạch, thích thì cứ nhào dzô
                    </p>
                    <p>
                    Là xạ thủ giỏi, nhưng còn giỏi hơn khi ko sử dụng súng.
                    </p>
                    <p>ảo kiếm Muramasa: Thanh kiếm chứa dựng linh hồn của Muramasa, bị chém thì dường như anh ko thể lành được
                    </p>
                    <p>
                        <a style={{color: "#325a97"}} href="https://toidicodedao.com/about/">Đọc thêm!</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
