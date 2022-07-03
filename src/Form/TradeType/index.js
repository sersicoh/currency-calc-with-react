import "./style.css";

const TradeType = () => {
    
    return (
        <>
            <input className="form__TradeType" type="radio" name="tradeType" value="selling" defaultChecked></input>
            <input className="form__TradeType" type="radio" name="tradeType" value="buying"></input>
        </>
    );
}

export default TradeType;