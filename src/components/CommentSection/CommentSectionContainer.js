import {likePostAction} from "../../redux/actionCreators";
import {connect} from "react-redux";
import CommentSection from "./CommentSection";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLike: () => dispatch(likePostAction(ownProps.postID))
    }
}

export default connect(undefined, mapDispatchToProps)(CommentSection)