import { GET_PRODUCTS} from "../../graphql/products"
import { setProducts, loadingProducts, errorProducts } from "../slices/product.slice"
import { client } from "../../utils/api"

export const getProducts = () => {

    return async(dispatch) => {

        dispatch(loadingProducts())

        try {

            const { loading, data } = await client.query({
                query: GET_PRODUCTS
            });


            dispatch(setProducts({ products: data.getProducts, loading }));
            
        } catch (error) {

            dispatch(errorProducts({ loading: false, error: error.message } ))
        }


    }

}

