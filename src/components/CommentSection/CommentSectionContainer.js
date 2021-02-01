import {addCommentAction, likePostAction} from "../../redux/actionCreators";
import {connect} from "react-redux";
import CommentSection from "./CommentSection";

function mapStateToProps(state) {
    return {
        avatar: state.newsfeed.currentUser.avatar
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLike: () => dispatch(likePostAction(ownProps.postID)),
        onComment: (content, postedTime) => dispatch(addCommentAction(ownProps.postID, content, postedTime))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection)