import React from 'react'
import { Image } from 'uranus-uikit'

// const Loading = styled.div`
//   border: 8px solid #f3f3f3;
//   border-radius: 50%;
//   border-top: 8px solid #ddd;
//   border-bottom: 8px solid #ddd;
//   width: 20px;
//   height: 20px;
//   -webkit-animation: spin 2s linear infinite;
//   animation: spin 2s linear infinite;
//   @-webkit-keyframes spin {
//     0% {
//       -webkit-transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//     }
//   }

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `
const Loading = () => {
  return <Image src="/images/loading.gif" width={147} height={150} />
}
export default Loading
