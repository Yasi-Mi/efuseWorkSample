import {connect} from "react-redux";
import Newsfeed from "./Newsfeed";

function mapStateToProps(state) {
    return {
        posts: state.newsfeed.posts
    }
}

export default connect(mapStateToProps)(Newsfeed)