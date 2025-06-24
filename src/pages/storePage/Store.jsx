import Banner from "../../components/store/banner/Banner";
import Category from "../../components/store/category/Category";
import Clients from "../../components/store/clients/Clients";
import Colection from "../../components/store/collection/Colection";
import LatestProduct from "../../components/store/latestProduct/LatestProduct";

const Store = () => {
    return (
        <div>
            <Banner />
            <Category />
            <LatestProduct />
            <Colection />
            <Clients />
        </div>
    );
}

export default Store;
