import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            Coffe store {id}
            <Link href={"/"}>Back to Home</Link>
        </div>
    );
};

export default CoffeeStore;
