import { ActiveProgress } from "../../helpers/Progress";
function Progress(props){
    const {ProgressValue} = props;
    const progressPercent = ProgressValue.cntAll != 0 ? (ProgressValue.cntDone / ProgressValue.cntAll) * 100 : 0;
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