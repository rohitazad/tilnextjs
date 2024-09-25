const Product = (props:any)=>{
    const cateid = props.params.category;
    return (
        <div>
            <h1>Product category :- {cateid}</h1>
            {JSON.stringify(props)}
        </div>
    )
}

export default Product;