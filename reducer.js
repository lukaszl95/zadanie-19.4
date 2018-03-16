import { combineReducers } from "redux";
import comments from "./comments";
import users from "./users";
import { ADD_COMMENT } from "./action";
import { EDIT_COMMENT } from "./action";
import { REMOVE_COMMENT } from "./action";
import { THUMB_UP_COMMENT_COMMENT } from "./action";
import { THUMB_DOWN_COMMENT_COMMENT } from "./action";

const app = combineReducers({
	comments,
	users
});