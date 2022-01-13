import React from 'react'
class Counter extends React.Component {
    render() {
       const { count } = this.props
       return(
         <div id="counter">
           {count}
         </div>
       )
     }
   
   }

   export default Counter