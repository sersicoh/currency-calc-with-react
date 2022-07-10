import "./style.css";

const Clock = ({ date, time }) => {

    return (
        <p className="clock">
            Dzisiaj jest {date} {time}
        </p>
    );
}
export default Clock;