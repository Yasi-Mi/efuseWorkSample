import {addCommentAction} from "../../redux/actionCreators";
import AddComment from "./AddComment";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        avatar: state.newsfeed.currentUser.avatar
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onPostComment: (content, postedTime) => dispatch(addCommentAction(ownProps.postID, content, postedTime))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)