import { format } from "timeago.js";

export const timeConverter = (timestamp) => {
    return format(timestamp);
};