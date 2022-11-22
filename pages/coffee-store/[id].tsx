import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import coffeeStoresData from "../../data/coffee-stores.json";
import Head from "next/head";
import styles from "../../styles/coffee-store.module.css";
import Image from "next/image";
import cls from "classnames";

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
    const paths = coffeeStoresData.map((coffeeStore) => ({
        params: {
            id: coffeeStore.id.toString(),
        },
    }));

    return {
        paths,
        fallback: true,
    };
};

const CoffeeStore = (props: Props) => {
    const router = useRouter();
    const { id } = router.query;

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

    const handleUpvoteButton = () => {};

    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">
                            Back to Home
                        </Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image
                        src={imgUrl}
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                    />
                </div>

                <div className={styles.col2}>
                    <p>{address}</p>
                    <p>{neighbourhood}</p>
                    <div className={cls("glass", styles.col2)}>
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/places.svg"
                                width="24"
                                height="24"
                                alt="icon"
                            />
                            <p className={styles.text}>{address}</p>
                        </div>
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/nearMe.svg"
                                width="24"
                                height="24"
                                alt="icon"
                            />
                            <p className={styles.text}>{neighbourhood}</p>
                        </div>
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/star.svg"
                                width="24"
                                height="24"
                                alt="icon"
                            />
                            <p className={styles.text}>1</p>
                        </div>

                        <button
                            className={styles.upvoteButton}
                            onClick={handleUpvoteButton}
                        >
                            Up vote!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeStore;
