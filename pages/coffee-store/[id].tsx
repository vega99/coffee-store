import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import coffeeStoresData from "../../data/coffee-stores.json";

interface Props {
    coffeeStore: {
        id: number;
        name: string;
        imgUrl: string;
        websiteUrl: string;
        address: string;
        neighbourhood: string;
    };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
    return {
        props: {
            coffeeStore: coffeeStoresData.find(
                (coffeStore) => coffeStore.id.toString() === params?.id
            ),
        },
    };
};

export const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {
                    id: "0",
                },
            },
            {
                params: {
                    id: "1",
                },
            },
        ],
        fallback: true,
    };
};

const CoffeeStore = (props: Props) => {
    const router = useRouter();
    const { id } = router.query;

    if(router.isFallback){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            Coffe store {id}
            <Link href={"/"}>Back to Home</Link>
            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>
        </div>
    );
};

export default CoffeeStore;
