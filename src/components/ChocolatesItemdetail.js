import React ,{useEffect}from "react";
import style from './Chocolates.module.css';
import { getChocolateDetails } from "../actionCreators/chocolateAC";
import {connect } from "react-redux"
import { FontIcon } from "material-ui";


function ChocolatesItemDetails(props){
    useEffect(() => {props.dispatch(getChocolateDetails(props.match.params.id))}, [])

    return (
      <div className={style.chocolates1}>
        <p className={style.txtstyle}> {props.chocolateDetail.name}</p>
        <img src={props.chocolateDetail.image} />
        <div className={style.txtstyle}>{props.chocolateDetail.desc}</div>
      </div>
    );
}

function mapStateToProps(state){
    console.log(state)
   // console.log(chocolatedetail)
     return{
         chocolateDetail:state.chocolateDetail
        }
}
export default connect (mapStateToProps)(ChocolatesItemDetails)


//         <div className="item">
//             <h3><Link to={`/chocolates/${props.id}`}>{props.name}> </Link></h3>
//             <p onClick={()=>props.onDescribe(props.desc)}>{props.image}</p>
//         </div>
//         );
//         }
//     ChocolatesList.propTypes ={
//         name:propTypes.string.isRequired,
//       //  image:propTypes.image.isRequired,
//         onDescribe:propTypes.func.isRequired
//     };
//     ChocolatesList.defaultProps={
//         onDescribe:()=>alert("not implemented"),
//         name:"default name",
//         desc:"default desc"
//     }
// export default ChocolatesItemDetails