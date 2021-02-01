import {connect} from "react-redux";
import PostForm from "./PostForm";
import {addPostAction} from "../../redux/actionCreators";

function mapStateToProps(state) {
    return {
        avatar: state.newsfeed.currentUser.avatar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onPost: (content, postedTime) => dispatch(addPostAction(content, postedTime))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)