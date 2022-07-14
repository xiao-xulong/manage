// import { ElLoading } from 'element-plus'
const Loading = function () {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return loading
}

export { Loading }

