function oddElevator(floorNumber){
  if(floorNumber === 10 || floorNumber === -1){
    return console.log(`${floorNumber}층 입니다.`)
  }else if(floorNumber%2===1){
    return console.log(`${floorNumber}층 입니다.`)
  }else{
    return console.log('해당 엘리베이터는 홀수층만 이동 가능하십니다.')
  }
}

function evenElevator(floorNumber){
  if(floorNumber === 1 || floorNumber === -1){
    return console.log(`${floorNumber}층 입니다.`)
  }else if(floorNumber%2===0){
    return console.log(`${floorNumber}층 입니다.`)
  }else{
    return console.log('해당 엘리베이터는 짝수층만 이동 가능하십니다.')
  }
}

// 짝수지만 1층도 갈 수 있다.
// 홀수지만 10층도 갈 수 있다.
// 둘다 -1도 갈 수 있다.

// npm inquirer 을 사용하여 숫자를 입력할 수 있는 인터페이스를 제작
// "문을 열겠습니다. " 라는 문구 출력
// 1초 뒤 "n층에 도착하였습니다."
// "문을 닫습니다." 라는 문구가 나오게 한다.

// 위 상황을 종합하여 예상되는 절차를 술어로 작성하시오.

// 1. npm inquirer 를 실행할 controller 파일과 홀수층만 가는, 짝수층만 가는 엘리베이터를 각 모듈로 나눈다.
// 2. controller 파일에 각 모듈을 import 해서 실행 결과를 출력한다.
// 3. 각 모듈의 기본적인 조건들부터 작성하여 실행 시, 조건을 충족한 값이 출력되게만 작성하고 controller 틀 작성
// 4.  controller.js 에 모듈 적용하여 작동 테스트 ( 현재 진행 위치 )
// 5. 부수적으로 추가할 1초 뒤 등의 설정등에 대해 보완작업을 진행한다.

// 파일 관계
// controller.js -> 실행파일
// models
// > evenElevator.js -> 짝수층 엘리베이터
// > oddElevator.js -> 홀수층 엘리베이터