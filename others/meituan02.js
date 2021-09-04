let arr = [[1],[1,2],[2]]
test(arr)

function test(arr){
    let n = arr.length
    let result = []
    for(let i=0; i < n; i++){
        result.push([])
    }
    for(let i=0; i < n; i++){
        let routes = arr[i]
        result[i][i] = 0;
        for(let j = 0; j < i; j++){
            routes.forEach(routeA => {
                arr[j].forEach(routeB => {
                    if(routeA === routeB){
                        result[i][j] = 1;
                        result[j][i] = 1;

                        for(let k = 0; k < n && k !== i; k++){
                            if(result[j][k]){
                                if(result[i][k]){
                                    result[k][i] = result[i][k] = Math.min(result[i][k], result[j][k]+1)
                                }else {
                                    result[k][i] = result[i][k] = result[j][k]+1
                                }
                            }
                        }
                    }
                })
            });
        }
    }
}