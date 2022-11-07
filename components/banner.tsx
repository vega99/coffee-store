import styles from "./banner.module.css";

interface Props {
    buttonText: string;
    handleOnClick: VoidFunction;
}

const Banner = (props: Props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffe</span>{" "}
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover your local stores</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={props.handleOnClick}>
                    {props.buttonText}
                </button>
            </div>
        </div>
    );
};

export default Banner;
