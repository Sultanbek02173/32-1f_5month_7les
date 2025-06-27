import Banner from "../../components/store/banner/Banner";
import Category from "../../components/store/category/Category";
import Client from "../../components/store/clients/Client";
import Collection from "../../components/store/collection/Collection";
import LatestProduct from '../../components/store/latestProduct/LatestProduct';

const Store = () => {
    return (
        <div>
            <Banner />
            <Category />
            <LatestProduct />
            <Collection />
            <Client />
        </div>
    );
}

export default Store;
