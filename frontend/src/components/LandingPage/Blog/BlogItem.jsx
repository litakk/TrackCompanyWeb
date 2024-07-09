function BlogItem(props) {
    return (
        <div className="blog-item">
            <img src={Post1} alt="" />
            <div className="blog-content">
                <div className="intro">Subtitle</div>

                <h1 className="title">Минфин предложил единый налоговый вычет</h1>

                <p className="info">
                    <span className="author">Арман Арманов</span>
                    <span className="date">12312 12031 29</span>
                </p>

                <p className="text">
                    Минфин разработал новый формат индивидуальных инвестиционных бизнесов
                </p>

                <a href="#" className="get-info">
                    Подробнее &rarr;
                </a>

            </div>
        </div>
    );
}

export default BlogItem;