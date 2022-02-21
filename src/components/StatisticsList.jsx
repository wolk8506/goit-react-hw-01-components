import { Fragment } from "react"

export const StatisticsList = (props) => {
    return (
        <Fragment>
            <span className="label">{props.label }</span>
            <span className="percentage">{props.percentage}%</span>
        </Fragment>
    
   )
}