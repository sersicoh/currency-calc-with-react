import { StyledClock } from "./styled";
import { useDate } from "./useDate";

const Clock = () => {

    const date = useDate();

    return (
        <StyledClock>Dzisiaj jest {date.date} {date.time}</StyledClock>
    );
};

export default Clock;
