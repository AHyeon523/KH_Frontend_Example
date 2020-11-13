//express 프레임워크 임포트
const express = require('express')
const app = express()
const PORT = 6600 // 포트 번호

//미들웨어 추가
app.use(express.static('./static'))

//더미 데이터
app.get('/data', (req, res) => {
    const data = {
        id: '124125125',
        name: 'hahahha',
        mtData: [1,2,3, ],
        timestamp: new Date(),
    }

    //data 객체를 json으로 서빙해줌
    //JSON: Javascript Object Notation
    res.json(data)
})

//애플리케이션 시작!
app.listen(PORT, () => {
    console.log('애플리케이션 시작됨.')
})