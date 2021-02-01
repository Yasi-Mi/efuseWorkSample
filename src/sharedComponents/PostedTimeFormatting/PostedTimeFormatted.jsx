import moment from "moment";

export default function PostedTimeFormatted({postedTime}) {
    const minutesDiff = moment().diff(postedTime, "minutes")

    return <>{minutesDiff} {minutesDiff === 1 ? "minute" : "minutes"} ago</>
}