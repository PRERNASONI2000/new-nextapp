// export default function ProductsDetails({params}:{
//     params: { productId: string };
// }){
//     const productId = params.productId;
//     return(
//         <h1>Product Details {productId}</h1>
//     )
// }


export default async function ProductsDetails({params}:{
    params: Promise<{ productId: string }>;
}){
    const productId = (await params).productId;
    return(
        <h1>Product Details {productId}</h1>
    )
}