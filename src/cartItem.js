import React from 'react';

class CartItem extends React.Component {
    

    increaseQuantity = () =>{
        //setState form 1
        //this.setState({
        //    qty:this.state.qty+1
        //});

        //setState form 2 - if prevState is required this technique should be used
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        },()=>{
            console.log('this.state',this.state);
        });
    }

    decreaseQuantity=()=>{
        if(this.props.product.qty>0){
            //setState method 1
            //this.setState({
            //    qty:this.state.qty-1
            //});
            
            //SetState method 2
            this.setState((prevState)=>{
                return{
                    qty:prevState.qty-1
                }
            });
        }
    }

    render() {
        console.log('this.props',this.props);
        const{price,title,qty} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs.{price}</div>
                <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828926.svg"
                            onClick={this.increaseQuantity} 
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                            onClick={this.decreaseQuantity} 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1345/1345874.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background:'#ccc'
    }
}


export default CartItem;