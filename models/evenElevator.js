export default function evenElevator(floorNumber){
  
  if(floorNumber === 1 || floorNumber === -1){
    return console.log(`${floorNumber}층 입니다.`)
  }else if(floorNumber%2===0){
    return console.log(`${floorNumber}층 입니다.`)
  }else{
    return console.log('해당 엘리베이터는 짝수층만 이동 가능하십니다.')
  }
}