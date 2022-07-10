import "./style.css";

const Clock = ({ date, time }) => (

    <p className="clock">
        Dzisiaj jest {date} {time}
    </p>

);
export default Clock;