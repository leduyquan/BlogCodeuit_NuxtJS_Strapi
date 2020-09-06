import React from 'react';

const AboutMe = () => {
    return (
        <aside id="text-20" className="widget-text">
            <h1 className="widget-title">About me</h1>
            <div className="widget-body">
                <img src="https://res.cloudinary.com/restaff/image/upload/v1599368841/avatar/avatar_xas6er.jpg" />
                <div className="widget-content">
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
                </div>
            </div>
        </aside>
    );
};

export default AboutMe;
