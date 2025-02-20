import { ActiveProgress } from "../../helpers/Progress";
function Progress(props){
    const {ProgressValue} = props;
    const progressPercent = (ProgressValue.cntDone / ProgressValue.cntAll) * 100;
    return (
        <>
            <div 
                className={`Progress-bar__current ${ActiveProgress(ProgressValue)}`}
                style={{width: `${progressPercent}%`}}
            ></div>
        </>
    )
}
export default Progress;