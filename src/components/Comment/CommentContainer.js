import {deleteCommentAction, editCommentAction, likeCommentAction} from "../../redux/actionCreators";
import Comment from "./Comment"
import {connect} from "react-redux";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLike: () => dispatch(likeCommentAction(ownProps.postID, ownProps.comment.id)),
        onEdit: (newContent) => dispatch(editCommentAction(ownProps.postID, ownProps.comment.id, newContent)),
        onDelete: () => dispatch(deleteCommentAction(ownProps.postID, ownProps.comment.id))
    }
}

export default connect(undefined, mapDispatchToProps)(Comment)