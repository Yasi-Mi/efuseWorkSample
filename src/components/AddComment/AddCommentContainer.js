import {addCommentAction} from "../../redux/actionCreators";
import AddComment from "./AddComment";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onPostComment: (content, postedTime) => dispatch(addCommentAction(ownProps.postID, content, postedTime))
    }
}

export default connect(undefined, mapDispatchToProps)(AddComment)