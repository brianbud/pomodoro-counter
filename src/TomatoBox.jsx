export default function TomatoBox({counter}){
    return(
        <div className="tomato-box">
        <h1>{!counter ? "No tomatoes yet" : counter}</h1>
      </div>
    )
}