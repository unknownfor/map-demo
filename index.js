let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]



function getChild(data, result, pid) {
    for (const item of data) {
        if (item.ipd === pid) {

        }
    }
}

function toTree(arr) {
    const result = []
    getChild(arr)
    console.log(result)
}