import { 
    Banner, 
    OurCollection, 
    OurStory, 
    Review, 
    ShopCategory 
} from "../../components/home";

const Home = () => {
    return (
        <div>
            <Banner />
            <OurStory />
            <OurCollection />
            <ShopCategory />
            <Review />
        </div>
    );
}

export default Home;
