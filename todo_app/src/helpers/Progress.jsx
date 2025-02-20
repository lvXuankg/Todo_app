export const CountProgress = (list) => {
    let cntDone = 0, cntAll = 0;
    list.forEach(item => {
        cntAll++;
        if(item.status == "Done") cntDone++;
    });
    
    return {
        cntDone: cntDone,
        cntAll: cntAll
    };
}

export const ActiveProgress = (progress) => {
    if(progress.cntDone == progress.cntAll) return "active";
    return "";
}