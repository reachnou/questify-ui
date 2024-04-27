
const TopicCard = ({ topic }) => {
    return (
        <div>
            <div class="card hover-card text-bg-info shadow-lg p-3 mb-5 rounded me-5" style={{width: "21rem", height: "12rem"}}>
                <div class="card-header text-center fw-bold fs-1">{topic?.name}</div>
                <div class="card-body text-center ">
                    <h5 class="card-title">{topic?.questions?.length} questions</h5>
                </div>
            </div>
        </div>
    )
}

export default TopicCard