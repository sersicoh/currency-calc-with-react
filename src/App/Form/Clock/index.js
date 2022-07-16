import { StyledClock } from "./StyledClock";

const Clock = ({ date, time }) => (

    <StyledClock>
        Dzisiaj jest {date} {time}
    </StyledClock>

);
export default Clock;