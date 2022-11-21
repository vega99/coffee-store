import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import coffeeStoresData from "../data/coffee-stores.json";
import { GetStaticProps } from "next";

interface Props {
    coffeeStores: {
        id: number;
        name: string;
        imgUrl: string;
        websiteUrl: string;
        address: string;
        neighbourhood: string;
    }[];
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            coffeeStores: coffeeStoresData,
        }, // will be passed to the page component as props
    };
};

export default function Home(props: Props) {
    const handleOnBannerClick = () => {};

    return (
        <div className={styles.container}>
            <Head>
                <title>Coffe Connoiseseur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Banner
                    buttonText="View stores nearby"
                    handleOnClick={handleOnBannerClick}
                />
                <div className={styles.heroImage}>
                    <Image
                        src={"/static/hero-image.png"}
                        width={700}
                        height={400}
                        alt="image"
                    />
                </div>
                {props.coffeeStores.length > 0 && (
                    <>
                        <h2 className={styles.heading2}>Ojo de Agua Stores</h2>
                        <div className={styles.cardLayout}>
                            {props.coffeeStores.map((coffeStore) => (
                                <Card
                                    key={coffeStore.id}
                                    name={coffeStore.name}
                                    href={`/coffee-store/${coffeStore.id}`}
                                    imgUrl={coffeStore.imgUrl}
                                    className={styles.card}
                                />
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
